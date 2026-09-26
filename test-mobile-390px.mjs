import { chromium } from '@playwright/test';

async function testMobileViewport() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();
  console.log('Navigating to local preview server on port 4182...');
  await page.goto('http://localhost:4182', { waitUntil: 'networkidle' });

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  const bodyOverflowX = await page.evaluate(() => window.getComputedStyle(document.body).overflowX);
  const htmlOverflowX = await page.evaluate(() => window.getComputedStyle(document.documentElement).overflowX);

  console.log(`Viewport check: clientWidth=${clientWidth}, scrollWidth=${scrollWidth}`);
  console.log(`CSS overflow-x: html=${htmlOverflowX}, body=${bodyOverflowX}`);

  if (scrollWidth > clientWidth) {
    console.error(`❌ FAILURE: Horizontal scroll detected! Overflow: ${scrollWidth - clientWidth}px`);
    process.exit(1);
  } else {
    console.log('✅ SUCCESS: Exactly 0px horizontal overflow on 390px mobile viewport!');
  }

  await browser.close();
}

testMobileViewport().catch((err) => {
  console.error('Error during mobile audit:', err);
  process.exit(1);
});
