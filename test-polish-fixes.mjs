import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = join(__dirname, 'screenshots-polish-fixes');

await mkdir(SCREENSHOT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext();

// Test 1: Homepage desktop 1440px
console.log('📸 Homepage desktop 1440px...');
const page1440 = await context.newPage({ viewport: { width: 1440, height: 900 } });
await page1440.goto(BASE_URL);
await page1440.waitForLoadState('networkidle');
await page1440.screenshot({ path: join(SCREENSHOT_DIR, 'homepage-desktop-1440x900.png'), fullPage: true });
const title1440 = await page1440.title();
console.log(`   Title: "${title1440}"`);
if (!title1440.includes('WaTask')) {
  console.error('   ❌ Title missing WaTask brand!');
} else if (title1440.split('WaTask').length - 1 > 1) {
  console.error('   ❌ Title has WaTask multiple times!');
} else {
  console.log('   ✅ Title has WaTask exactly once');
}
await page1440.close();

// Test 2: Homepage mobile 390px - check floating button behavior
console.log('📸 Homepage mobile 390px...');
const page390 = await context.newPage({ viewport: { width: 390, height: 844 } });
await page390.goto(BASE_URL);
await page390.waitForLoadState('networkidle');

// Check if WhatsApp button is hidden at top
const buttonAtTop = await page390.locator('a[aria-label="Chat on WhatsApp"]');
const isVisibleAtTop = await buttonAtTop.evaluate(el => {
  const opacity = window.getComputedStyle(el).opacity;
  return opacity === '1';
});
console.log(`   Floating button visible at top: ${isVisibleAtTop ? '❌ VISIBLE (should be hidden)' : '✅ HIDDEN'}`);

await page390.screenshot({ path: join(SCREENSHOT_DIR, 'homepage-mobile-390x844-top.png'), fullPage: false });

// Scroll past hero
await page390.evaluate(() => window.scrollTo(0, 600));
await page390.waitForTimeout(500);

const isVisibleAfterScroll = await buttonAtTop.evaluate(el => {
  const opacity = window.getComputedStyle(el).opacity;
  return opacity === '1';
});
console.log(`   Floating button visible after scroll: ${isVisibleAfterScroll ? '✅ VISIBLE' : '❌ HIDDEN (should be visible)'}`);

await page390.screenshot({ path: join(SCREENSHOT_DIR, 'homepage-mobile-390x844-scrolled.png'), fullPage: false });
await page390.close();

// Test 3: Group management tool page - check arrow list
console.log('📸 Group management tool page...');
const pageGMT = await context.newPage({ viewport: { width: 1440, height: 900 } });
await pageGMT.goto(`${BASE_URL}/whatsapp-group-management-tool`);
await pageGMT.waitForLoadState('networkidle');
await pageGMT.screenshot({ path: join(SCREENSHOT_DIR, 'group-management-desktop-1440x900.png'), fullPage: true });

// Check title
const titleGMT = await pageGMT.title();
console.log(`   Title: "${titleGMT}"`);
if (titleGMT.split('WaTask').length - 1 !== 1) {
  console.error(`   ❌ Title has WaTask ${titleGMT.split('WaTask').length - 1} times (should be 1)`);
} else {
  console.log('   ✅ Title has WaTask exactly once');
}

// Check for "WhatsApp OS" phrase
const bodyText = await pageGMT.evaluate(() => document.body.innerText);
if (bodyText.toLowerCase().includes('whatsapp os')) {
  console.error('   ❌ Page still contains "WhatsApp OS"');
} else {
  console.log('   ✅ No "WhatsApp OS" found');
}

await pageGMT.close();

// Test 4: Check a guide page
console.log('📸 Guide page...');
const pageGuide = await context.newPage({ viewport: { width: 1440, height: 900 } });
await pageGuide.goto(`${BASE_URL}/guides/send-bulk-messages-to-multiple-whatsapp-groups`);
await pageGuide.waitForLoadState('networkidle');
const titleGuide = await pageGuide.title();
console.log(`   Title: "${titleGuide}"`);
if (titleGuide.split('WaTask').length - 1 !== 1) {
  console.error(`   ❌ Title has WaTask ${titleGuide.split('WaTask').length - 1} times (should be 1)`);
} else {
  console.log('   ✅ Title has WaTask exactly once');
}

// Check for "WhatsApp OS"
const guideText = await pageGuide.evaluate(() => document.body.innerText);
if (guideText.toLowerCase().includes('whatsapp os')) {
  console.error('   ❌ Guide still contains "WhatsApp OS"');
} else {
  console.log('   ✅ No "WhatsApp OS" found');
}

await pageGuide.screenshot({ path: join(SCREENSHOT_DIR, 'guide-desktop-1440x900.png'), fullPage: false });
await pageGuide.close();

await browser.close();

console.log('\n✅ All screenshots saved to screenshots-polish-fixes/');
