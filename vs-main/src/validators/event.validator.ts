import { z } from 'zod';

export const streamingDetailsSchema = z.object({
  SitemapID: z.string().optional(),
  StageStreamMaps: z.array(
    z.object({
      stageName: z.string(),
      streamID: z.string().optional(),
      stageID: z.string().optional(),
    })
  ),
});

/** Zod schema for step 2: Venue details */
export const venueDetailsSchema = z.object({
  VenueID: z.string().min(1, 'You must select a venue'),
  VenueLocation: z.string().optional(),
  EventImages: z
    .array(
      z.object({
        src: z.string().url('Event image must be a valid URL'),
      })
    )
    .optional(),
});

export const eventDetailsSchema = z
  .object({
    EventName: z
      .string()
      .min(3, 'Event name must be at least 3 characters')
      .max(50, 'Event name must be at most 50 characters'),

    StartTime: z.number().optional(),
    EndTime: z.number().optional(),

    EventDescription: z
      .string()
      .min(10, 'Description must be at least 10 characters')
      .max(1000, 'Description must be at most 1000 characters'),

    Price: z.string().min(1, 'Required'),
    EventCategory: z.string().min(1, 'Required'),

    isVipEntryAllowed: z.boolean().optional(),
    vipPrice: z.string().optional(),

    isRealEvent: z.boolean(),
    RealTicketLink: z.string().url().or(z.literal('')).optional(),

    showOrganizer: z.boolean(),
    showCreator: z.boolean(),
    timezone: z.string(),
  })
  .refine(
    (data) => {
      if (
        typeof data.StartTime === 'number' &&
        typeof data.EndTime === 'number'
      ) {
        return data.EndTime > data.StartTime;
      }
      return true;
    },
    {
      message: 'End time must be strictly after start time',
      path: ['EndTime'],
    }
  );

export type StreamingDetailsFormInputs = z.infer<typeof streamingDetailsSchema>;
export type VenueDetailsFormInputs = z.infer<typeof venueDetailsSchema>;
export type EventDetailsFormInputs = z.infer<typeof eventDetailsSchema> & {
  [key: string]: any;
};
