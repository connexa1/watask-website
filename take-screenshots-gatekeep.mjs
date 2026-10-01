import { chromium } from 'playwright';
import { join } from 'path';

const baseUrl = 'https://watask-website-git-cursor-seo-a2-edits-74dc-connexa-s-projects.vercel.app';

const pages = [
  {
    name: 'broadcast-vs-group',
    url: `${baseUrl}/guides/whatsapp-broadcast-vs-group-vs-communities`
  },
  {
    name: 'communities',
    url: `${baseUrl}/guides/whatsapp-communities-bulk-messaging`
  },
  {
    name: 'safer-campaigns',
    url: `${baseUrl}/guides/safer-multi-group-whatsapp-campaigns`
  }
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 }
];

async function takeScreenshots() {
  const screenshotDir = '/opt/cursor/artifacts/pr28-shots';
  
  const browser = await chromium.launch({ headless: true });
  
  for (const page of pages) {
    for (const viewport of viewports) {
      console.log(`Taking ${viewport.name} screenshot of ${page.name}...`);
      
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 2 // Retina quality
      });
      
      const browserPage = await context.newPage();
      
      try {
        await browserPage.goto(page.url, { 
          waitUntil: 'networkidle',
          timeout: 60000 
        });
        
        // Wait for images and fonts to load
        await browserPage.waitForTimeout(3000);
        
        const screenshotPath = join(screenshotDir, `${page.name}-${viewport.name}.png`);
        await browserPage.screenshot({ 
          path: screenshotPath,
          fullPage: true,
          type: 'png'
        });
        
        console.log(`✓ Saved: ${screenshotPath}`);
      } catch (error) {
        console.error(`✗ Error capturing ${page.name} ${viewport.name}:`, error.message);
      } finally {
        await context.close();
      }
    }
  }
  
  await browser.close();
  console.log('\nAll screenshots completed!');
}

takeScreenshots().catch(console.error);
