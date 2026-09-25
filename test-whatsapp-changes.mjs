import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const screenshotsDir = '/workspace/screenshots-whatsapp';
  
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Desktop - Header CTA
  const desktopContext = await browser.newContext({ 
    viewport: { width: 1440, height: 900 } 
  });
  const desktopPage = await desktopContext.newPage();
  
  await desktopPage.goto('http://localhost:3000/', {
    waitUntil: 'networkidle',
    timeout: 30000
  });
  await desktopPage.waitForTimeout(1000);
  
  // Screenshot of header with CTA
  await desktopPage.screenshot({
    path: path.join(screenshotsDir, 'header-cta-desktop.png'),
    clip: { x: 0, y: 0, width: 1440, height: 100 }
  });
  console.log('✓ Captured header CTA (desktop)');
  
  // Screenshot of footer
  await desktopPage.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await desktopPage.waitForTimeout(500);
  const footerElement = await desktopPage.$('footer');
  if (footerElement) {
    await footerElement.screenshot({
      path: path.join(screenshotsDir, 'footer-desktop.png')
    });
    console.log('✓ Captured footer (desktop)');
  }
  
  await desktopContext.close();

  // Mobile - Floating button and header
  const mobileContext = await browser.newContext({ 
    viewport: { width: 390, height: 844 } 
  });
  const mobilePage = await mobileContext.newPage();
  
  await mobilePage.goto('http://localhost:3000/', {
    waitUntil: 'networkidle',
    timeout: 30000
  });
  await mobilePage.waitForTimeout(1000);
  
  // Full page with floating button
  await mobilePage.screenshot({
    path: path.join(screenshotsDir, 'floating-button-mobile.png')
  });
  console.log('✓ Captured floating WhatsApp button (mobile)');
  
  // Header on mobile
  await mobilePage.screenshot({
    path: path.join(screenshotsDir, 'header-mobile.png'),
    clip: { x: 0, y: 0, width: 390, height: 100 }
  });
  console.log('✓ Captured header (mobile)');
  
  // Open mobile menu
  await mobilePage.click('button[aria-label="Toggle menu"]');
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({
    path: path.join(screenshotsDir, 'mobile-menu-with-whatsapp.png')
  });
  console.log('✓ Captured mobile menu with WhatsApp CTA');
  
  await mobileContext.close();

  await browser.close();
  console.log('\n✅ All screenshots saved to /workspace/screenshots-whatsapp/');
}

takeScreenshots().catch(console.error);
