import { authenticated } from './fixtures';
import { editProfile } from './helpers';
import {
  createProduct,
  createVendorPage,
  deleteProduct,
  deleteVendorPage,
} from './vendor.helper';
import { navigateUserProfile } from './profile.helper';

authenticated.describe('vendor flow', () => {
  let vendorId: string;
  let productId: string;
  let vendorName: string;
  let userId: string;

  authenticated(
    'should create, update and delete a vendor page',
    async ({ app }) => {
      // Step 1: Navigate user profile & get user sub
      userId = await navigateUserProfile(app);

      // Step 2: Create a Vendor Page
      const { vendorId: id, vendorName: name } = await createVendorPage(app);
      vendorId = id;
      vendorName = name;

      // Step 3: Update vendor page profile
      const updatedPageName = `TestVendor-${Date.now()}`;
      const updatedPageBio = `updated autogen vendor page`;
      await editProfile(app, updatedPageName, updatedPageBio);
      const { productId: pid } = await createProduct(app, vendorId);
      productId = pid;
    }
  );

  authenticated.afterAll(async () => {
    // Clean up test data
    await deleteVendorPage(vendorId);
    await deleteProduct(productId, userId);
  });
});
