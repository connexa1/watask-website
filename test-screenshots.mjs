import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const pages = [
  { path: '/guides/whatsapp-groups-api-limits', name: 'api-limits-guide' },
  { path: '/whatsapp-group-management-tool', name: 'group-management-tool' },
  { path: '/guides/safer-multi-group-whatsapp-campaigns', name: 'safer-campaigns-guide' },
  { path: '/', name: 'homepage' }
];

const viewports = [
  { width: 1440, height: 900, name: 'desktop' },
  { width: 390, height: 844, name: 'mobile' }
];

async function takeScreenshots() {
  const browser = await chromium.launch();
  const screenshotsDir = '/workspace/screenshots-after';
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();

    for (const pageInfo of pages) {
      try {
        await page.goto(`http://localhost:3000${pageInfo.path}`, {
          waitUntil: 'networkidle',
          timeout: 30000
        });
        
        // Wait a bit for any animations
        await page.waitForTimeout(1000);
        
        const filename = `${pageInfo.name}-${viewport.name}-${viewport.width}x${viewport.height}.png`;
        await page.screenshot({
          path: path.join(screenshotsDir, filename),
          fullPage: true
        });
        
        console.log(`✓ Captured ${filename}`);
      } catch (error) {
        console.error(`✗ Failed to capture ${pageInfo.path} at ${viewport.name}:`, error.message);
      }
    }

    // Test mobile menu on mobile viewport
    if (viewport.name === 'mobile') {
      try {
        await page.goto('http://localhost:3000/', {
          waitUntil: 'networkidle',
          timeout: 30000
        });
        
        // Click the menu button
        await page.click('button[aria-label="Toggle menu"]');
        await page.waitForTimeout(500);
        
        const filename = `mobile-menu-open-${viewport.width}x${viewport.height}.png`;
        await page.screenshot({
          path: path.join(screenshotsDir, filename)
        });
        
        console.log(`✓ Captured ${filename}`);
      } catch (error) {
        console.error(`✗ Failed to capture mobile menu:`, error.message);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log('\nScreenshots saved to /workspace/screenshots-after/');
}

takeScreenshots().catch(console.error);
