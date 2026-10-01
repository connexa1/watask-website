import playwright from 'playwright';
import { promises as fs } from 'fs';
import path from 'path';

const url = 'http://localhost:3000/guides/automate-whatsapp-group-messages';
const outputDir = '/workspace/screenshots-automation-guide';

async function takeScreenshots() {
  await fs.mkdir(outputDir, { recursive: true });

  const browser = await playwright.chromium.launch();
  
  // Desktop screenshot
  console.log('Taking desktop screenshot...');
  const desktopPage = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  await desktopPage.goto(url, { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ 
    path: path.join(outputDir, 'desktop-full.png'),
    fullPage: true
  });
  console.log('Desktop screenshot saved');
  await desktopPage.close();

  // Mobile screenshot
  console.log('Taking mobile screenshot...');
  const mobilePage = await browser.newPage({
    viewport: { width: 375, height: 667 }
  });
  await mobilePage.goto(url, { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ 
    path: path.join(outputDir, 'mobile-full.png'),
    fullPage: true
  });
  console.log('Mobile screenshot saved');
  await mobilePage.close();

  await browser.close();
  console.log(`Screenshots saved to ${outputDir}`);
}

takeScreenshots().catch(console.error);
