import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const newPages = [
  { path: '/glossary', name: 'glossary' },
  { path: '/guides/whatsapp-communities-bulk-messaging', name: 'communities-guide' },
  { path: '/compare/multi-group-tools-vs-bsp-vs-extensions', name: 'compare-tools-vs-bsp' },
  { path: '/compare/whatsapp-group-sending-alternatives', name: 'compare-alternatives' }
];

const viewports = [
  { width: 1440, height: 900, name: 'desktop' },
  { width: 390, height: 844, name: 'mobile' }
];

async function takeScreenshots() {
  const browser = await chromium.launch();
  const screenshotsDir = '/workspace/screenshots-new-pages';
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    for (const pageInfo of newPages) {
      try {
        await page.goto(`http://localhost:3000${pageInfo.path}`, {
          waitUntil: 'networkidle',
          timeout: 30000
        });
        
        await page.waitForTimeout(1000);
        
        const filename = `${pageInfo.name}-${viewport.name}-${viewport.width}x${viewport.height}.png`;
        await page.screenshot({
          path: path.join(screenshotsDir, filename),
          fullPage: true
        });
        
        console.log(`✓ Captured ${filename}`);
      } catch (error) {
        console.error(`✗ Failed to capture ${pageInfo.path}:`, error.message);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log('\n✅ Screenshots saved to /workspace/screenshots-new-pages/');
}

takeScreenshots().catch(console.error);
