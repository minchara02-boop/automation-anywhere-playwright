const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Create Message Box Task', async ({ page }) => {
  const login = new LoginPage(page);

  // Open app (already authenticated via global-setup)
  await login.goToApp();

  // Navigate to Automation
  await page.getByRole('link', { name: 'Automation', exact: true }).click();

  // Open Create → Task Bot (non-ARIA dropdown)
  await page.getByRole('button', { name: /create/i }).click();
  await page.waitForSelector('text=Task Bot');
  await page.locator('text=Task Bot').click({ force: true });

  // Create Task Bot with unique name
  const taskName = `MessageBox_Task_${Date.now()}`;
  await page.getByLabel(/name/i).fill(taskName);
  await page.getByRole('button', { name: /create/i }).click();

  // ✅ VALIDATION (SAFE)
  // Editor opened
  await expect(page).toHaveURL(/edit/);

  // Task name visible in editor header
  await expect(
    page.getByText(taskName)
  ).toBeVisible({ timeout: 10000 });
});
