import { expect } from 'playwright/test';
import { authenticated } from './fixtures';
import { createLivestream, deleteLivestream } from './livestream.helper';

authenticated.describe('Livestream Settings', () => {
  authenticated(
    'should generate a stream, verify it in My Stream Keys, and delete it',
    async ({ app }) => {
      const streamName = await createLivestream(app);

      // Switch to "My Stream Keys" tab
      await app.click('[data-testid="generate-stream-back-button"]');
      await app.click('[data-testid="my-stream-keys-tab"]');

      // Verify the created stream is listed
      const streamLocator = `[data-testid="stream-${streamName}"]`;
      await expect(app.locator(streamLocator)).toBeVisible();

      // Delete the stream
      await deleteLivestream(app, streamName);
    }
  );
});
