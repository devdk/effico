import { z } from 'zod';

export const createProductSchema = z.object({
  productName: z
    .string()
    .min(1, 'Enter a product name')
    .max(50, 'Maximum 50 characters allowed'),
  images: z
    .array(z.object({ src: z.string() }))
    .max(10, 'You can upload a maximum of 10 images'),
  assetType: z.string().nonempty('Select asset type'),
  price: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .max(1000, 'Price must be less than 1000000')
      .nonnegative('Price must be 0 or more')
  ),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(200, 'Maximum 200 characters allowed'),
  AssetUMAP_Name: z.string().optional(),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
