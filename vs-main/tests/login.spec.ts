import { test, expect } from '@playwright/test';

test.describe('login', () => {
  test('should login successfully with username', async ({ page }) => {
    await page.goto('/auth/login');

    await page.fill('input[name="username"]', 'alsoamit');
    await page.fill('input[name="password"]', 'Heeeee*2');
    await page.click('button[type="submit"]');
    await page.waitForURL('/');
  });

  test('should login successfully with email', async ({ page }) => {
    await page.goto('/auth/login');

    await page.fill('input[name="username"]', 'alsoamit@gmail.com');
    await page.fill('input[name="password"]', 'Heeeee*2');
    await page.click('button[type="submit"]');
    await page.waitForURL('/');
  });

  test('should fail successfully with random credentials', async ({ page }) => {
    await page.goto('/auth/login');

    const randomUsername = `user${Date.now()}`;
    const randomPassword = `pass${Date.now()}`;
    await page.fill('input[name="username"]', randomUsername);
    await page.fill('input[name="password"]', randomPassword);

    await page.click('button[type="submit"]');

    const errorMessage = await page.waitForSelector(
      'text=User does not exist.',
      {
        timeout: 5000,
      }
    );
    expect(errorMessage).toBeTruthy();
    expect(await errorMessage.textContent()).toContain('User does not exist.');
  });

  test('should fail successfully with random password', async ({ page }) => {
    await page.goto('/auth/login');

    const randomPassword = `pass${Date.now()}`;
    await page.fill('input[name="username"]', 'alsoamit');
    await page.fill('input[name="password"]', randomPassword);

    await page.click('button[type="submit"]');

    const errorMessage = await page.waitForSelector(
      'text=Incorrect username or password.',
      {
        timeout: 5000,
      }
    );
    expect(errorMessage).toBeTruthy();
    expect(await errorMessage.textContent()).toContain(
      'Incorrect username or password.'
    );
  });
});
