import { authenticated } from './fixtures';
import { navigateUserProfile } from './profile.helper';
import {
  createVenuePage,
  deleteSitemap,
  deleteVenuePage,
  uploadSitemap,
  uploadVenuePak,
} from './venue.helper';
import { createCreatorPage, deleteCreatorPage } from './helpers';
import { expect } from 'playwright/test';
import { createLivestream, deleteLivestream } from './livestream.helper';
import {
  createProduct,
  createVendorPage,
  deleteProduct,
  deleteVendorPage,
} from './vendor.helper';
import { deleteEvent } from './event.helper';

authenticated.describe('event flow', () => {
  let creatorId: string;
  let venueId: string;
  let sitemapId: string;
  let userId: string;
  let vendorId: string;
  let stageId: string;
  let stage2Id: string;
  let eventId: string;

  authenticated(
    'should create, update and delete a venue page',
    async ({ app }) => {
      //   // Navigate user profile & get user sub
      userId = await navigateUserProfile(app);

      creatorId = await createCreatorPage(app);

      // Step 2: Navigate to pages
      const { venueId: id, venueName } = await createVenuePage(app);
      venueId = id;

      await uploadVenuePak(app, venueId);

      const { sitemapId: sid, sitemapName } = await uploadSitemap(
        app,
        venueId,
        venueName
      );
      sitemapId = sid;

      const { vendorId: vid, vendorName: name } = await createVendorPage(app);
      vendorId = vid;

      const { productId: pid, productName: stageName } = await createProduct(
        app,
        vendorId
      );
      stageId = pid;
      const { productId: pid2, productName: stage2Name } = await createProduct(
        app,
        vendorId
      );
      stage2Id = pid2;

      let streamName = await createLivestream(app);
      let stream2Name = await createLivestream(app);

      await app.goto(`/creator/${creatorId}`);
      await app.waitForURL(`/creator/${creatorId}`);

      // Step 5: Click on "Continue" button for Venue Page
      await app.click('[data-testid="create-event-btn"]');
      await app.waitForURL(`/events/create/${creatorId}`);
      await expect(
        app.locator('[data-testid="create-event-form"]')
      ).toBeVisible();

      const eventName = `TestEvent-${Date.now()}`;
      await app.locator('[data-testid="event-name-input"]').fill(eventName);
      await app.locator('[data-testid="event-date-input"]').fill('2030-12-31');
      await app.locator('[data-testid="event-start-time-input"]').fill('12:00');
      await app.locator('[data-testid="event-end-time-input"]').fill('12:30');
      await app
        .locator('[data-testid="event-description-input"]')
        .fill('Test Description');
      await app.locator('[data-testid="event-price-input"]').fill('2');

      await app.click('[data-testid="event-category-select"]');
      const option = app.getByRole('option', { name: 'Music' });
      await option.click();

      await app.click('[data-testid="event-details-next-btn"]');
      await expect(
        app.locator('[data-testid="event-venue-details"]')
      ).toBeVisible();

      await app.click('[data-testid="event-venue-select"]');
      const venueOption = app.getByRole('option', { name: venueName });
      await venueOption.click();

      await app.click('[data-testid="venue-details-next-btn"]');

      await app.click('[data-testid="event-sitemap-select"]');
      const sitemapOption = app.getByRole('option', { name: sitemapName });
      await sitemapOption.click();

      await app.click('[data-testid="stage-0-pak-select"]');
      const stageNameOption = app.getByRole('option', { name: stageName });
      await stageNameOption.click();

      await app.click('[data-testid="stage-0-stream-select"]');
      const streamNameOption = app.getByRole('option', { name: streamName });
      await streamNameOption.click();

      await app.click('[data-testid="stage-1-pak-select"]');
      const stage2NameOption = app.getByRole('option', { name: stage2Name });
      await stage2NameOption.click();

      await app.click('[data-testid="stage-1-stream-select"]');
      const stream2NameOption = app.getByRole('option', { name: stream2Name });
      await stream2NameOption.click();

      await app.click('[data-testid="create-event-btn"]');
      await expect(app.locator(`text=Event Created!`)).toBeVisible();
      // await expect(app.locator(`text=${eventName}`)).toBeVisible();

      await app.waitForURL('/events/*');
      // Extract the vendorId from the URL
      const urlParts = app.url().split('/');
      eventId = urlParts.pop() || '';

      // cleanup
      await deleteLivestream(app, streamName);
      await deleteLivestream(app, stream2Name);
    }
  );

  authenticated.afterAll(async () => {
    console.log({ eventId });

    await deleteVendorPage(vendorId);
    await deleteCreatorPage(creatorId);
    await deleteVenuePage(venueId, userId);
    await deleteSitemap(sitemapId, userId);
    await deleteProduct(stageId, userId);
    await deleteProduct(stage2Id, userId);
    await deleteEvent(eventId);
  });
});
