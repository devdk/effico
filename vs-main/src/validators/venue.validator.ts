import { z } from 'zod';

export const editVenueSchema = z.object({
  images: z
    .array(z.string().url())
    .max(5, "You can't have more than 5 images."),
  stageNames: z.array(z.string().nonempty('Stage name cannot be empty.')),
  umapname: z.string().nonempty('UMAP Name is required.'),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(0, 'Price must be at least 0')
  ),
});

export type EditVenueSchema = z.infer<typeof editVenueSchema>;
