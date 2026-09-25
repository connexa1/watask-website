const { chromium } = require('@playwright/test');

function rgbToHex(rgb) {
  const match = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return rgb;
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);
  return { r, g, b, string: `rgb(${r}, ${g}, ${b})` };
}

function relativeLuminance(rgb) {
  const { r, g, b } = rgb;
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;
  
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
  
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

function contrastRatio(rgb1, rgb2) {
  const l1 = relativeLuminance(rgb1);
  const l2 = relativeLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

async function measureContrast(page, selector, description) {
  const element = await page.locator(selector).first();
  await element.waitFor({ timeout: 5000 });
  const color = await element.evaluate(el => window.getComputedStyle(el).color);
  const bgColor = await element.evaluate(el => {
    let elem = el;
    while (elem) {
      const bg = window.getComputedStyle(elem).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        return bg;
      }
      elem = elem.parentElement;
    }
    return 'rgb(255, 255, 255)';
  });
  
  const textRgb = rgbToHex(color);
  const bgRgb = rgbToHex(bgColor);
  const ratio = contrastRatio(textRgb, bgRgb);
  
  console.log(`\n${description}:`);
  console.log(`  Text color: ${textRgb.string}`);
  console.log(`  Background: ${bgRgb.string}`);
  console.log(`  Contrast ratio: ${ratio.toFixed(2)}:1`);
  console.log(`  WCAG AA (4.5:1): ${ratio >= 4.5 ? '✓ PASS' : '✗ FAIL'}`);
  
  return ratio;
}

(async () => {
  const browser = await chromium.launch();
  
  console.log('\n=== DESKTOP (1280px) ===');
  let page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  
  // Test /guides/does-whatsapp-business-api-support-groups
  await page.goto('http://localhost:3000/guides/does-whatsapp-business-api-support-groups');
  await page.waitForLoadState('networkidle');
  
  console.log('\n--- /guides/does-whatsapp-business-api-support-groups ---');
  await measureContrast(page, '.not-prose h2', 'Short Answer box heading');
  await measureContrast(page, '.not-prose p', 'Short Answer box text');
  await measureContrast(page, '.prose p', 'Normal paragraph text');
  
  // Test /glossary
  await page.goto('http://localhost:3000/glossary');
  await page.waitForLoadState('networkidle');
  
  console.log('\n--- /glossary ---');
  try {
    await measureContrast(page, 'h1', 'Page heading');
    await measureContrast(page, 'section p.text-text-secondary', 'Body text first paragraph');
  } catch (e) {
    console.log('Error measuring glossary:', e.message);
  }
  
  // Test /compare/whatsapp-group-sending-alternatives
  await page.goto('http://localhost:3000/compare/whatsapp-group-sending-alternatives');
  await page.waitForLoadState('networkidle');
  
  console.log('\n--- /compare/whatsapp-group-sending-alternatives ---');
  try {
    await measureContrast(page, 'h1', 'Page heading');
    await measureContrast(page, 'section p.text-text-secondary', 'Body text');
  } catch (e) {
    console.log('Error measuring compare page:', e.message);
  }
  
  await page.close();
  
  console.log('\n\n=== MOBILE (390px) ===');
  page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  
  // Test mobile view of same pages
  await page.goto('http://localhost:3000/guides/does-whatsapp-business-api-support-groups');
  await page.waitForLoadState('networkidle');
  
  console.log('\n--- /guides/does-whatsapp-business-api-support-groups (mobile) ---');
  await measureContrast(page, '.not-prose h2', 'Short Answer box heading');
  await measureContrast(page, '.not-prose p', 'Short Answer box text');
  
  await page.close();
  await browser.close();
  
  console.log('\n\nDone!');
})();
