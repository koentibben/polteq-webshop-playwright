import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://techblog.polteq.com/testshop/index.php');
})

test('Homepage has correct title', async ({ page }) => {
  await expect(page).toHaveTitle(/Polteq Mission Critical Testing/);
});

test('User can navigate to sign in page from homepage', async ({ page }) => {
  await page.getByText('Sign in').click();
  await expect(page).toHaveURL(/.*controller=authentication/);
});