import test, { Page } from 'playwright/test';

export const authenticated = test.extend<{
  app: Page;
}>({
  app: async ({ page }, use) => {
    await page.goto('/auth/login');
    await page.fill('input[name="username"]', 'alsoamit');
    await page.fill('input[name="password"]', 'Heeeee*2');
    await page.click('button[type="submit"]');
    await page.waitForURL('/');
    await page.waitForResponse(
      (response) =>
        response.url().includes('/session') && response.status() === 200,
      { timeout: 5000 }
    );
    await use(page);
  },
});
