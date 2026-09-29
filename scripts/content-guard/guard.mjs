#!/usr/bin/env node
// WATASK-GUARD-1 — content guard for watask.com
//
// Usage:
//   node scripts/content-guard/guard.mjs source    # banned words + contact rules on app/ and components/
//   node scripts/content-guard/guard.mjs rendered  # runs the built site (next start) and checks every sitemap URL
//   node scripts/content-guard/guard.mjs all       # both (needs `npm run build` first)
//   add  --json <file>  to also write the list of problems as JSON
//   node scripts/content-guard/guard.mjs compare <base.json> <head.json>
//        fails only on problems in head.json that are not already in base.json
//        (used by CI so a pull request is blocked only for problems it adds)
//
// Exits 1 if any check fails. Every failure names the check, the file or page, and the offending text.
// No dependencies beyond Node 20+.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { spawn } from 'node:child_process';

const ROOT = process.cwd();
const SOURCE_DIRS = ['app', 'components'];
const ALLOWLIST_FILE = process.env.GUARD_ALLOWLIST || '.github/content-allowlist.txt';
const WHATSAPP_NUMBER = '306981337327';
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 160;
// A "sentence" for the duplicate check must have at least this many words,
// so short UI labels ("Learn more", "Start free") that repeat by design are ignored.
const DUP_SENTENCE_MIN_WORDS = 6;
const PORT = Number(process.env.GUARD_PORT || 3123);

const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.md', '.mdx', '.json', '.css', '.html', '.txt', '.yml', '.yaml', '.xml']);

// Banned terms. `re` is matched case-insensitively with word boundaries.
const BANNED = [
  ['unofficial', String.raw`\bunofficial\b`],
  ['official', String.raw`\bofficial\b`],
  ['linked device', String.raw`\blinked[\s-]+devices?\b`],
  ['official API', String.raw`\bofficial\s+API\b`],
  ['safe', String.raw`\bsafe\b`],
  ['safer', String.raw`\bsafer\b`],
  ['safety', String.raw`\bsafety\b`],
  ['safely', String.raw`\bsafely\b`],
  ['Meta-approved', String.raw`\bMeta[\s-]+approved\b`],
  ['compliance', String.raw`\bcompliance\b`],
  ['compliant', String.raw`\bcompliant\b`],
  ['terms of service', String.raw`\bterms\s+of\s+service\b`],
  ['ban', String.raw`\bban\b`],
  ['bans', String.raw`\bbans\b`],
  ['banned', String.raw`\bbanned\b`],
  ['spam', String.raw`\bspam\b`],
  ['circumvent', String.raw`\bcircumvent\b`],
  ['workaround', String.raw`\bworkarounds?\b`],
  ['Connexa', String.raw`\bconnexa\b`],
  ['myconnexa', String.raw`\bmyconnexa\b`],
].map(([label, re]) => ({ label, re: new RegExp(re, 'gi') }));

const EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}/g;
const WAME_RE = /wa\.me\/([^\s"'`)<>\]\\]*)/gi;

const failures = [];
// `key` identifies the problem independent of line numbers, so the same old problem
// on main and on a pull request compare as equal.
function fail(check, where, detail, key) {
  const k = `${check}|${key ?? `${where.replace(/:\d+$/, '')}|${detail}`}`;
  failures.push({ check, where, detail, key: k });
}

// ---------------------------------------------------------------- helpers
function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (TEXT_EXT.has(extname(name).toLowerCase())) out.push(p);
  }
  return out;
}

function loadAllowlist() {
  if (!existsSync(ALLOWLIST_FILE)) return [];
  return readFileSync(ALLOWLIST_FILE, 'utf8')
    .split('\n')
    .map((l) => l.replace(/\r$/, ''))
    .filter((l) => l.trim() && !l.trim().startsWith('#'))
    .map((l) => l.trim().replace(/^"(.*)"$/, '$1'));
}

// Replace allowlisted phrases (exact, case-sensitive) with spaces so they are not scanned.
function maskAllowed(text, allow) {
  for (const phrase of allow) {
    if (!phrase) continue;
    text = text.split(phrase).join(' '.repeat(phrase.length));
  }
  return text;
}

function short(s, n = 160) {
  s = s.replace(/\s+/g, ' ').trim();
  return s.length > n ? s.slice(0, n - 1) + '…' : s;
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', middot: '·', copy: '©', reg: '®', trade: '™', times: '×', rarr: '→', larr: '←', bull: '•' };
function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTITIES[n.toLowerCase()] ?? m);
}

function normalize(s) {
  return s
    .replace(/[  -​ ]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,;:!?)\]])/g, '$1')
    .replace(/([(\[])\s+/g, '$1')
    .trim();
}

function stripTags(html) {
  return decode(html.replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]+>/g, ' '));
}

// ---------------------------------------------------------------- source checks
function sourceChecks() {
  const allow = loadAllowlist();
  const files = SOURCE_DIRS.flatMap((d) => walk(join(ROOT, d)));
  for (const file of files) {
    const rel = relative(ROOT, file);
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((raw, i) => {
      const loc = `${rel}:${i + 1}`;
      const line = maskAllowed(raw, allow);

      for (const { label, re } of BANNED) {
        re.lastIndex = 0;
        let m;
        while ((m = re.exec(line))) {
          fail('banned-words', loc, `banned term "${label}" found as "${m[0]}" in: ${short(raw.trim())}`, `${rel}|${label}`);
        }
      }

      EMAIL_RE.lastIndex = 0;
      let e;
      while ((e = EMAIL_RE.exec(raw))) {
        // skip image-density names like logo@2x.png
        if (/@\d+x\.(png|jpe?g|webp|avif|gif|svg)$/i.test(e[0])) continue;
        fail('contact-email', loc, `email address "${e[0]}" found in: ${short(raw.trim())}`, `${rel}|${e[0].toLowerCase()}`);
      }

      WAME_RE.lastIndex = 0;
      let w;
      while ((w = WAME_RE.exec(raw))) {
        const before = raw.slice(Math.max(0, w.index - 30), w.index);
        // CSS attribute selectors like a[href^="https://wa.me/"] are link matchers, not links.
        if (/\[href[\^*$]?=["']?(https?:\/\/)?$/i.test(before)) continue;
        const num = (w[1].match(/^\+?(\d*)/) || [])[1] || '';
        if (num !== WHATSAPP_NUMBER) {
          fail('contact-whatsapp', loc, `wa.me link points to "${num || '(no number)'}" instead of ${WHATSAPP_NUMBER}: ${short(w[0])}`, `${rel}|${num}`);
        }
      }
    });
  }
  console.log(`source: scanned ${files.length} files in ${SOURCE_DIRS.join(', ')} (allowlist: ${allow.length} phrase(s))`);
}

// ---------------------------------------------------------------- rendered checks
const BLOCK_TAGS = 'address|article|aside|blockquote|br|button|caption|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|h[1-6]|header|hr|label|li|main|nav|ol|option|p|pre|section|select|summary|table|tbody|td|tfoot|th|thead|tr|ul';
const BLOCK_RE = new RegExp(`<\\/?(?:${BLOCK_TAGS})\\b[^>]*>`, 'gi');

function visibleBlocks(html) {
  let body = html;
  const b = body.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (b) body = b[1];
  body = body
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|noscript|template|svg|head)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(BLOCK_RE, '\n')
    .replace(/<[^>]+>/g, '');
  return decode(body)
    .split('\n')
    .map(normalize)
    .filter(Boolean);
}

function sentencesOf(block) {
  return block.split(/(?<=[.!?])\s+(?=[A-Z0-9"“‘'(])/).map((s) => s.trim()).filter(Boolean);
}

function collectFaqs(node, out) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) return node.forEach((n) => collectFaqs(n, out));
  const type = node['@type'];
  const isFaq = type === 'FAQPage' || (Array.isArray(type) && type.includes('FAQPage'));
  if (isFaq) {
    const ents = Array.isArray(node.mainEntity) ? node.mainEntity : node.mainEntity ? [node.mainEntity] : [];
    for (const q of ents) {
      const answers = Array.isArray(q?.acceptedAnswer) ? q.acceptedAnswer : [q?.acceptedAnswer];
      for (const a of answers) if (a?.text) out.push({ question: String(q.name ?? ''), answer: String(a.text) });
    }
  }
  for (const v of Object.values(node)) if (v && typeof v === 'object') collectFaqs(v, out);
}

function words(s) {
  return new Set(s.toLowerCase().match(/[a-z0-9]+/g) || []);
}

function checkPage(path, html) {
  const where = `page ${path}`;

  // title
  const head = (html.match(/<head[^>]*>([\s\S]*?)<\/head>/i) || [, html])[1];
  const t = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!t) fail('title', where, 'no <title> tag', `${path}|missing`);
  else {
    const title = normalize(decode(t[1]));
    if (!title) fail('title', where, 'empty <title>', `${path}|empty`);
    else if (title.length > TITLE_MAX) fail('title', where, `<title> is ${title.length} chars (max ${TITLE_MAX}): "${title}"`, `${path}|${title}`);
  }

  // meta description
  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
  const desc = metas.find((m) => /\bname=["']description["']/i.test(m));
  if (!desc) fail('meta-description', where, 'no <meta name="description">', `${path}|missing`);
  else {
    const c = desc.match(/\bcontent=(?:"([^"]*)"|'([^']*)')/i);
    const text = normalize(decode((c && (c[1] ?? c[2])) || ''));
    if (!text) fail('meta-description', where, 'meta description is empty', `${path}|empty`);
    else if (text.length > DESCRIPTION_MAX) fail('meta-description', where, `meta description is ${text.length} chars (max ${DESCRIPTION_MAX}): "${text}"`, `${path}|${text}`);
  }

  const blocks = visibleBlocks(html);
  const visibleAll = normalize(blocks.join(' '));

  // FAQ JSON-LD vs visible text
  const faqs = [];
  for (const m of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      collectFaqs(JSON.parse(m[1]), faqs);
    } catch (err) {
      fail('faq-jsonld', where, `JSON-LD block is not valid JSON: ${err.message}`, `${path}|invalid-json|${short(m[1], 300)}`);
    }
  }
  for (const { question, answer } of faqs) {
    const want = normalize(stripTags(answer));
    if (visibleAll.includes(want)) continue;
    // find the closest visible block to show in the message
    const ww = words(want);
    let best = '', bestScore = -1;
    for (const blk of blocks) {
      const bw = words(blk);
      let common = 0;
      for (const x of ww) if (bw.has(x)) common++;
      const score = common / Math.max(ww.size, bw.size, 1);
      if (score > bestScore) { bestScore = score; best = blk; }
    }
    fail('faq-jsonld', where,
      `FAQ answer in JSON-LD does not match the visible answer word for word.\n` +
      `      Q:        ${short(normalize(stripTags(question)), 200)}\n` +
      `      JSON-LD:  ${short(want, 400)}\n` +
      `      Visible:  ${bestScore > 0.3 ? short(best, 400) : '(no matching visible answer found)'}`,
      `${path}|${question}|${want}|${bestScore > 0.3 ? best : ''}`);
  }

  // duplicate visible sentences
  const seen = new Map();
  for (const blk of blocks) {
    for (const s of sentencesOf(blk)) {
      // only real sentences: 6+ words and ending in . ! or ? (skips link/button labels like "Read the guide →")
      if ((s.match(/\S+/g) || []).length < DUP_SENTENCE_MIN_WORDS) continue;
      if (!/[.!?]["”’')\]]*$/.test(s)) continue;
      const key = s.toLowerCase();
      seen.set(key, { text: s, n: (seen.get(key)?.n || 0) + 1 });
    }
  }
  for (const { text, n } of seen.values()) {
    if (n > 1) fail('duplicate-sentence', where, `sentence appears ${n} times: "${short(text, 300)}"`, `${path}|${text.toLowerCase()}|${n}`);
  }

  // rendered wa.me links (catches links built from variables)
  for (const m of html.matchAll(/href=["']([^"']*wa\.me\/[^"']*)["']/gi)) {
    const num = (m[1].match(/wa\.me\/\+?(\d*)/i) || [])[1] || '';
    if (num !== WHATSAPP_NUMBER) fail('contact-whatsapp', where, `rendered wa.me link points to "${num || '(no number)'}": ${short(m[1])}`, `${path}|${num}`);
  }
  for (const m of html.matchAll(/href=["']mailto:([^"']*)["']/gi)) {
    fail('contact-email', where, `rendered mailto link: ${m[1]}`, `${path}|${m[1].toLowerCase()}`);
  }
}

async function waitForServer(base, ms = 90000) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    try {
      const r = await fetch(base + '/sitemap.xml', { redirect: 'manual' });
      if (r.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`server did not start on ${base} within ${ms / 1000}s`);
}

async function renderedChecks() {
  if (!existsSync(join(ROOT, '.next'))) {
    fail('build', '.next', 'no build output found — run `npm run build` first');
    return;
  }
  const base = `http://127.0.0.1:${PORT}`;
  const server = spawn(process.execPath, [join(ROOT, 'node_modules/next/dist/bin/next'), 'start', '-p', String(PORT), '-H', '127.0.0.1'], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, NODE_ENV: 'production' },
  });
  let serverLog = '';
  server.stdout.on('data', (d) => (serverLog += d));
  server.stderr.on('data', (d) => (serverLog += d));
  try {
    await waitForServer(base);
    const sm = await fetch(base + '/sitemap.xml');
    if (sm.status !== 200) {
      fail('sitemap', '/sitemap.xml', `returned HTTP ${sm.status}`);
      return;
    }
    const xml = await sm.text();
    const locs = [...xml.matchAll(/<loc>\s*([\s\S]*?)\s*<\/loc>/gi)].map((m) => decode(m[1].trim()));
    if (!locs.length) fail('sitemap', '/sitemap.xml', 'sitemap has no <loc> URLs');

    const seen = new Map();
    for (const u of locs) {
      let key;
      try {
        const x = new URL(u);
        key = (x.hostname.replace(/^www\./, '') + x.pathname.replace(/\/+$/, '') + x.search).toLowerCase();
      } catch {
        key = u.toLowerCase();
      }
      if (seen.has(key)) fail('sitemap', '/sitemap.xml', `duplicate URL: "${u}" (same page as "${seen.get(key)}")`);
      else seen.set(key, u);
    }

    for (const u of seen.values()) {
      let path;
      try {
        const x = new URL(u);
        path = (x.pathname || '/') + x.search;
      } catch {
        fail('sitemap', '/sitemap.xml', `not a valid absolute URL: "${u}"`);
        continue;
      }
      const r = await fetch(base + path, { redirect: 'manual' });
      if (r.status !== 200) {
        const loc = r.headers.get('location');
        fail('sitemap', `page ${path}`, `sitemap URL ${u} returned HTTP ${r.status}${loc ? ` (redirects to ${loc})` : ''} on the local build`);
        continue;
      }
      checkPage(path, await r.text());
    }
    console.log(`rendered: checked ${seen.size} sitemap URL(s) on the local build`);
  } catch (err) {
    fail('server', base, `${err.message}\n${short(serverLog, 2000)}`);
  } finally {
    server.kill('SIGTERM');
  }
}

// ---------------------------------------------------------------- main
function report(list, heading) {
  const byCheck = {};
  for (const f of list) (byCheck[f.check] ||= []).push(f);
  console.log(`\n${heading}\n`);
  for (const [check, items] of Object.entries(byCheck)) {
    console.log(`## ${check} (${items.length})`);
    for (const f of items) {
      console.log(`  ✗ ${f.where}\n      ${f.detail}`);
      if (process.env.GITHUB_ACTIONS) {
        const m = f.where.match(/^([^:\s]+):(\d+)$/);
        const props = m ? `file=${m[1]},line=${m[2]},` : '';
        const msg = `${f.where}: ${f.detail}`.replace(/%/g, '%25').replace(/\r/g, '').replace(/\n/g, '%0A');
        console.log(`::error ${props}title=content-guard ${check}::${msg}`);
      }
    }
    console.log('');
  }
}

const args = process.argv.slice(2);
const mode = args[0] || 'all';

if (mode === 'compare') {
  const [baseFile, headFile] = args.slice(1);
  if (!baseFile || !headFile) {
    console.error('usage: guard.mjs compare <base.json> <head.json>');
    process.exit(2);
  }
  const base = JSON.parse(readFileSync(baseFile, 'utf8'));
  const head = JSON.parse(readFileSync(headFile, 'utf8'));
  const budget = new Map();
  for (const f of base) budget.set(f.key, (budget.get(f.key) || 0) + 1);
  const added = [];
  for (const f of head) {
    const left = budget.get(f.key) || 0;
    if (left > 0) budget.set(f.key, left - 1);
    else added.push(f);
  }
  const existing = head.length - added.length;
  console.log(`main already has ${base.length} known problem(s); this pull request has ${head.length} (${existing} old, ${added.length} new).`);
  if (added.length) {
    report(added, `CONTENT GUARD FAILED — this pull request adds ${added.length} new problem(s)`);
    process.exit(1);
  }
  console.log('\nCONTENT GUARD PASSED — no new problems');
  process.exit(0);
}

if (!['source', 'rendered', 'all'].includes(mode)) {
  console.error('usage: guard.mjs source|rendered|all [--json <file>]  |  guard.mjs compare <base.json> <head.json>');
  process.exit(2);
}
const jsonIdx = args.indexOf('--json');
const jsonOut = jsonIdx > -1 ? args[jsonIdx + 1] : null;

if (mode === 'source' || mode === 'all') sourceChecks();
if (mode === 'rendered' || mode === 'all') await renderedChecks();

if (jsonOut) writeFileSync(jsonOut, JSON.stringify(failures, null, 2));

if (failures.length) {
  report(failures, `CONTENT GUARD FAILED — ${failures.length} problem(s)`);
  process.exit(1);
}
console.log(`\nCONTENT GUARD PASSED (${mode})`);
