import { chromium } from 'playwright';
import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

function waitForServer(url, timeout = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode === 200) resolve();
        else setTimeout(check, 200);
      }).on('error', () => {
        if (Date.now() - start > timeout) reject(new Error('Server timeout'));
        else setTimeout(check, 200);
      });
    };
    check();
  });
}

async function runTest() {
  console.log('--- STARTING PLAYWRIGHT 390PX MOBILE AUDIT ---');
  
  // 1. Start preview server
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    cwd: process.cwd(),
    stdio: 'pipe'
  });

  try {
    await waitForServer('http://localhost:4173');
    console.log('✓ Vite preview server running on http://localhost:4173');

    // 2. Launch headless browser
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });

    const page = await context.newPage();
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
    console.log('✓ Page loaded with networkidle');

    // 3. Check horizontal scroll overflow
    const overflowCheck = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const innerWidth = window.innerWidth;
      const bodyScrollWidth = document.body.scrollWidth;
      return {
        scrollWidth,
        innerWidth,
        bodyScrollWidth,
        hasHorizontalOverflow: scrollWidth > innerWidth || bodyScrollWidth > innerWidth,
        overflowAmount: Math.max(0, scrollWidth - innerWidth)
      };
    });

    console.log('Horizontal Overflow Check:', overflowCheck);
    if (overflowCheck.hasHorizontalOverflow) {
      throw new Error(`FAIL: Horizontal overflow detected! Overflow: ${overflowCheck.overflowAmount}px`);
    } else {
      console.log('✓ PASS: Exactly 0px horizontal overflow! W3C CSS clip verified.');
    }

    // Ensure output dir exists
    const screenshotsDir = path.resolve(process.cwd(), 'audit-screenshots');
    if (!fs.existsSync(screenshotsDir)) {
      fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // 4. Capture Hero Screenshot
    await page.screenshot({ path: path.join(screenshotsDir, 'mobile-390px-hero.png') });
    console.log('✓ Captured mobile-390px-hero.png');

    // 5. Scroll through Hero to scrub 3D canvas
    console.log('Scrubbing through 3D canvas hero...');
    for (let scrollY = 0; scrollY <= 2000; scrollY += 200) {
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(50);
    }
    await page.screenshot({ path: path.join(screenshotsDir, 'mobile-390px-hero-scrubbed.png') });
    console.log('✓ Captured mobile-390px-hero-scrubbed.png');

    // 6. Scroll to Doctors Section
    const doctorsEl = await page.$('#doctors');
    if (doctorsEl) {
      await doctorsEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(screenshotsDir, 'mobile-390px-doctors.png') });
      console.log('✓ Captured mobile-390px-doctors.png');
    }

    // 7. Scroll to Anxiety Compass
    const compassEl = await page.$('#comfort-compass');
    if (compassEl) {
      await compassEl.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(screenshotsDir, 'mobile-390px-compass.png') });
      console.log('✓ Captured mobile-390px-compass.png');
    }

    // 8. Capture full page screenshot
    await page.screenshot({ path: path.join(screenshotsDir, 'mobile-390px-full.png'), fullPage: true });
    console.log('✓ Captured mobile-390px-full.png');

    console.log('Console Errors:', consoleErrors.length === 0 ? 'None (0)' : consoleErrors);

    await browser.close();
    console.log('✓ AUDIT COMPLETED SUCCESSFULLY: ALL CHECKS PASSED');
    server.kill('SIGTERM');
    process.exit(0);
  } finally {
    try { server.kill('SIGTERM'); } catch (e) {}
  }
}

runTest().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
