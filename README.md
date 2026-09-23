# WaTask Marketing Site

English SEO marketing site for [watask.com](https://watask.com) — WhatsApp group management and multi-group campaigns at scale.

## Overview

This is a Next.js (App Router) site implementing the WaTask SEO information architecture, featuring:

- **Marketing homepage** positioning multi-group / WhatsApp group campaigns
- **Guides hub** (`/guides`) with comprehensive content on multi-group WhatsApp strategies
- **Pillar guide** from IDEAS-001: "How to Send Bulk Messages to Multiple WhatsApp Groups"
- **Category page** defining the WhatsApp group management tool space
- **SEO hygiene**: proper canonicals to `watask.com`, sitemap, robots.txt, JSON-LD FAQ schema

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX support (for future content expansion)
- **Deployment**: Vercel-ready

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open**: http://localhost:3000

## Build & Deploy

### Build locally

```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Connect to Vercel**:
   - Import this repository to Vercel
   - Vercel will auto-detect Next.js configuration

2. **Configure custom domain** (watask.com):
   - In Vercel dashboard → Project Settings → Domains
   - Add `watask.com` and `www.watask.com`
   - Update DNS records at your domain registrar:
     - Add A record: `@` → `76.76.21.21`
     - Add CNAME: `www` → `cname.vercel-dns.com`
   - Or follow Vercel's DNS instructions for your provider

3. **Environment variables** (optional):
   - None required for v1 (static site)
   - Add Supabase variables later if CMS is integrated

## Site Structure

```
/                           # Marketing homepage
/register                   # Free trial CTA
/guides                     # Guides hub index
  /send-bulk-messages-to-multiple-whatsapp-groups  # Pillar guide
  /whatsapp-groups-api-limits                      # API limits explainer
  /whatsapp-broadcast-vs-group-vs-communities      # Taxonomy guide
  /safer-multi-group-whatsapp-campaigns            # Best practices
  /does-whatsapp-business-api-support-groups       # FAQ page
/whatsapp-group-management-tool  # Category page

/sitemap.xml                # Auto-generated sitemap
/robots.txt                 # Auto-generated robots
```

## SEO Features

- ✅ Canonical URLs to `https://watask.com`
- ✅ Proper metadata API with Open Graph
- ✅ XML sitemap (Next.js auto-generated)
- ✅ robots.txt with sitemap reference
- ✅ JSON-LD FAQ schema on pillar guide
- ✅ Semantic HTML and proper heading hierarchy
- ✅ No Lovable preview domain canonicals

## Content Strategy

### Current (v1)
- Pillar guide fully written from IDEAS-001 brief
- Category page establishing the "WhatsApp group management tool" space
- Stub pages for key supporting topics (marked "Coming Soon")

### Future Expansion
- Complete stub guides with full content
- Additional vertical pages (real estate, agencies)
- Comparison guides
- Developer resources
- Glossary page

## Important Notes

- **Canonical domain**: Always `https://watask.com` (never `watask.lovable.app`)
- **Product claims**: Content reflects honest multi-group positioning, avoiding invented features
- **Citations**: Meta/360dialog documentation properly linked for Groups API limits
- **No invented metrics**: No fake search volumes, KD, or traffic numbers

## CMS Integration (Future)

Current v1 uses MDX files in the repository. For dynamic content management:

1. Supabase tables for articles
2. Admin UI for content editing
3. Environment variables for Supabase connection
4. README will be updated with CMS setup instructions

For now, edit content directly in `app/**/*.tsx` or add `.mdx` files.

## License

Proprietary - WaTask / Connexa
