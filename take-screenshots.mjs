import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
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
  { name: 'desktop', width: 1280, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

async function takeScreenshots() {
  const screenshotDir = join(process.cwd(), 'screenshots');
  await mkdir(screenshotDir, { recursive: true });
  
  const browser = await chromium.launch({ headless: true });
  
  for (const page of pages) {
    for (const viewport of viewports) {
      console.log(`Taking ${viewport.name} screenshot of ${page.name}...`);
      
      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }
      });
      
      const browserPage = await context.newPage();
      
      try {
        await browserPage.goto(page.url, { 
          waitUntil: 'networkidle',
          timeout: 60000 
        });
        
        // Wait a bit for any animations/fonts to load
        await browserPage.waitForTimeout(2000);
        
        const screenshotPath = join(screenshotDir, `${page.name}-${viewport.name}.png`);
        await browserPage.screenshot({ 
          path: screenshotPath,
          fullPage: true 
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
