import { z } from 'zod';

export const generateStreamSchema = z.object({
  streamName: z
    .string()
    .nonempty('This Field is Required')
    .max(50, 'Max 50 characters'),
  streamType: z.string().nonempty('This Field is Required'),
});

export type GenerateStreamSchema = z.infer<typeof generateStreamSchema>;
