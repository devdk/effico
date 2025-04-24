import { authenticated } from './fixtures';
import { expect } from 'playwright/test';
import { navigateUserProfile } from './profile.helper';
import { createPost, deletePost } from './posts.helper';
import {
  createVenuePage,
  deleteSitemap,
  deleteVenuePage,
  uploadSitemap,
  uploadVenuePak,
} from './venue.helper';
import { editProfile } from './helpers';

authenticated.describe('venue flow', () => {
  let venueId: string;
  let sitemapId: string;
  let userId: string;

  authenticated(
    'should create, update and delete a venue page',
    async ({ app }) => {
      // Navigate user profile & get user sub
      userId = await navigateUserProfile(app);

      // Step 2: Navigate to pages
      const { venueId: id } = await createVenuePage(app);
      venueId = id;

      // Step 9: Check if page is followed
      await expect(app.locator('[data-testid="unfollowed"]')).toBeVisible();
      await app.locator('[data-testid="unfollowed"]').click();
      await expect(app.locator('[data-testid="followed"]')).toBeVisible();

      // Step 10: Test EditProfile
      const updatedPageName = `TestVenue-${Date.now()}`;
      const updatedPageBio = `updated autogen venue page`;
      await editProfile(app, updatedPageName, updatedPageBio);

      // Step 11: Verify post creation
      const postDesc = `TestVenue-${Date.now()}`;
      await createPost(app, postDesc);

      // Step 12: Delete the created post
      await deletePost(app, postDesc);

      await uploadVenuePak(app, venueId);
      const { sitemapId: sid } = await uploadSitemap(
        app,
        venueId,
        updatedPageName
      );
      sitemapId = sid;
    }
  );

  authenticated.afterAll(async () => {
    await deleteVenuePage(venueId, userId);
    await deleteSitemap(sitemapId, userId);
  });
});
