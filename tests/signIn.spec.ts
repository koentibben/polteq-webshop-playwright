import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://techblog.polteq.com/testshop/index.php');
    await page.getByText('Sign in').click();
    await expect(page).toHaveURL(/.*controller=authentication/);
  })

test('Sign in page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Authentication - Polteq's TestShop/);
});

test('Sign in with specific credentials', async ({ page }) => {
    await page.locator('#email').fill('test@polteq.com');
    await page.locator('#passwd').fill('test12345!');
    await page.locator("#SubmitLogin").click();
});