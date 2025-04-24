import { expect, Page } from 'playwright/test';

// Helper to create a post
export async function navigateUserProfile(app: Page): Promise<string> {
  // Navigate to home
  await app.goto('/');

  await app.click('[data-testid="navbar-dropdown-btn"]');
  await expect(app.locator('[data-testid="navbar-dropdown"]')).toBeVisible();
  await app.click('[data-testid="profile-link"]');
  await app.waitForURL('/profile/*');
  await expect(app.locator('[data-testid="profile-page"]')).toBeVisible();

  // Extract the venueId from the URL
  const urlParts = app.url().split('/');
  const userId = urlParts.pop() || '';

  await app.goto('/');
  return userId;
}
