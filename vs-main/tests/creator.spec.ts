import { expect } from '@playwright/test';
import { authenticated } from './fixtures';
import { createCreatorPage, deleteCreatorPage, editProfile } from './helpers';
import { createPost, deletePost } from './posts.helper';

authenticated.describe('creator flow', () => {
  let creatorId: string;

  authenticated(
    'should create, update and delete a creator page',
    async ({ app }) => {
      creatorId = await createCreatorPage(app);

      // Step 9: Check if page is followed
      await expect(app.locator('[data-testid="unfollowed"]')).toBeVisible();
      await app.locator('[data-testid="unfollowed"]').click();
      await expect(app.locator('[data-testid="followed"]')).toBeVisible();

      // Step 10: Fill out the Update form
      const updatedPageName = `TestCreator-${Date.now()}`;
      const updatedPageBio = `updated autogen test page`;
      await editProfile(app, updatedPageName, updatedPageBio);

      // Step 11: Verify the update success
      await expect(
        app.locator('[data-testid="edit-creator-page-modal"]')
      ).not.toBeVisible();

      await expect(app.locator('[data-testid="profile-name"]')).toHaveText(
        updatedPageName
      );
      await expect(app.locator('[data-testid="profile-bio"]')).toHaveText(
        updatedPageBio
      );

      // Step 14: Verify post creation
      // const postDesc = `TestCreator-${Date.now()}`;
      // await createPost(app, postDesc);

      // Step 15: Delete the created post
      // await deletePost(app, postDesc);
    }
  );

  authenticated.afterAll(async () => {
    await deleteCreatorPage(creatorId);
  });
});
