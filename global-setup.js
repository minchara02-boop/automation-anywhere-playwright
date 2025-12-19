const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Open Automation Anywhere Community Edition
  await page.goto('https://community.cloud.automationanywhere.digital', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  console.log('=================================================');
  console.log('MANUAL STEP REQUIRED');
  console.log('1. Accept cookies if shown');
  console.log('2. Click Login');
  console.log('3. Enter email & password');
  console.log('4. Complete MFA if any');
  console.log('5. WAIT until dashboard is fully loaded');
  console.log('6. THEN come back to terminal and press ENTER');
  console.log('=================================================');

  // ⛔ DO NOT AUTOMATE LOGIN ⛔
  await new Promise(resolve => process.stdin.once('data', resolve));

  // Save authenticated state
  await context.storageState({ path: 'auth.json' });

  await browser.close();
};
