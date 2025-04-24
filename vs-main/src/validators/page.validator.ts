import { z } from 'zod';

export const createCreatorSchema = z.object({
  CreatorName: z.string().nonempty('This Field is Required').max(50),
  CreatorBio: z.string().nonempty('This Field is Required').max(200),
});

export type CreateCreatorSchema = z.infer<typeof createCreatorSchema>;

export const createVenueSchema = z.object({
  VenueName: z.string().nonempty('This Field is Required'),
  IsVenueReal: z.string().nonempty('This Field is Required'),
  VenueBio: z.string().nonempty('This Field is Required'),
});

export type CreateVenueSchema = z.infer<typeof createVenueSchema>;

export const createVendorSchema = z.object({
  VendorName: z.string().nonempty('This Field is Required'),
  VendorBio: z.string().nonempty('This Field is Required'),
});

export type CreateVendorSchema = z.infer<typeof createVendorSchema>;
