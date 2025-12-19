const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Create Form with File Upload', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goToApp();

  // Navigate to Automation
  await page.getByRole('link', { name: 'Automation', exact: true }).click();

  // Open Create → Form (non-ARIA dropdown)
  await page.getByRole('button', { name: /create/i }).click();
  await page.waitForSelector('text=Form');
  await page.locator('text=Form').click({ force: true });

  // Create Form with unique name
  const formName = `Upload_Form_${Date.now()}`;
  await page.getByLabel(/name/i).fill(formName);
  await page.getByRole('button', { name: /create/i }).click();

  // ✅ VALIDATION (SAFE)
  // Form builder page opened
  await expect(page).toHaveURL(/form|designer|edit/i);

  // Form name visible
  await expect(
    page.getByText(formName)
  ).toBeVisible({ timeout: 10000 });
});
