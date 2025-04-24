import { expect, Page } from 'playwright/test';

export async function createLivestream(
  app: Page,
  streamName = `TestStream-${Date.now()}`
): Promise<string> {
  // Navigate to Livestream Settings
  await app.goto('/settings/livestream');

  // Click on "Generate Stream" tab
  await app.click('[data-testid="generate-stream-tab"]');

  // Fill out the form
  await app.fill('[data-testid="stream-name-input"]', streamName);

  await app.click('[data-testid="stream-type-select"]');
  const option = app.getByRole('option', { name: '2D Green Screen' });
  await option.click();

  await app.click('[data-testid="generate-stream-button"]');

  // Verify stream creation success
  await expect(app.locator('text=New stream created!')).toBeVisible();

  return streamName;
}

export async function deleteLivestream(
  app: Page,
  streamName: string
): Promise<void> {
  await app.goto('/settings/livestream');
  await app.click('[data-testid="my-stream-keys-tab"]');

  // Delete the created stream
  const deleteButtonLocator = `[data-testid="stream-${streamName}"] [data-testid="delete-stream-button"]`;
  await app.click(deleteButtonLocator);

  // Handle the confirmation dialog
  await app.click('[data-testid="confirm-button"]');

  await expect(
    app.locator('[data-testid="confirmation-modal"]')
  ).not.toBeVisible();

  // Verify the stream is no longer listed
  await expect(app.locator(streamName)).not.toBeVisible();
}
