import { z } from 'zod';

export const postSchema = z
  .object({
    content: z.string(),
    images: z.array(z.string()),
  })
  .refine((data) => data.content.trim().length > 0 || data.images.length > 0, {
    message: 'Post cannot be empty, either add message or photo.',
    path: ['content'],
  });

export type PostFormValues = z.infer<typeof postSchema>;
