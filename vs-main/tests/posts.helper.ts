import { expect, Page } from '@playwright/test';

// Helper to create a post
export async function createPost(app: Page, postDesc: string): Promise<void> {
  await app.fill('[data-testid="create-post-input"]', postDesc);
  await app.click('[data-testid="create-post-submit-btn"]');
  await expect(app.locator(`text=${postDesc}`)).toBeVisible();
}

// Helper to delete a post
export async function deletePost(app: Page, postDesc: string): Promise<void> {
  await app.click('[data-testid="post-dropdown-btn"]');
  await expect(app.locator('[data-testid="delete-post-btn"]')).toBeVisible();
  await app.click('[data-testid="delete-post-btn"]');
  await expect(app.locator('[data-testid="confirmation-modal"]')).toBeVisible();
  await app.click('[data-testid="confirm-button"]');
  await expect(app.locator(`text=${postDesc}`)).not.toBeVisible();
}
