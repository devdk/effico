import React, { ChangeEvent, useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm, SubmitHandler } from 'react-hook-form';

import { VirtuosoEvents, VirtuosoVenues } from 'services/types/generated';
import useSession from 'src/hooks/useSession';
import usePublicUpload from 'src/hooks/usePublicUpload';
import { getOwnedVenues } from 'services/ownership.service';
import { useQuery } from 'react-query';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from 'src/components/ui/select';
import { Button } from 'src/components/ui/button';
import { HiOutlineX } from 'react-icons/hi';
import { MdOutlineFileUpload } from 'react-icons/md';
import { cn } from 'src/lib/utils';

import {
  EventDetailsFormInputs,
  VenueDetailsFormInputs,
  venueDetailsSchema,
} from 'src/validators/event.validator';
import { Textarea } from 'src/components/ui/textarea';

function getDefaultVenueValues(
  event: VirtuosoEvents | undefined,
  existingData: EventDetailsFormInputs
): VenueDetailsFormInputs {
  // Combine any existing data with event’s data
  return {
    VenueID: existingData.VenueID ?? event?.VenueID ?? '',
    VenueLocation: existingData.VenueLocation ?? event?.VenueLocation ?? '',
    EventImages: (existingData.EventImages ?? event?.EventImages ?? []).map(
      (src: any) => ({
        src,
      })
    ),
  };
}

interface IVenueDetailsProps {
  event?: VirtuosoEvents;
  existingData: EventDetailsFormInputs;
  handleSetStep: (i: number) => void;
  handleSetData: (data: EventDetailsFormInputs) => void;
}

export default function VenueDetails({
  event,
  existingData,
  handleSetStep,
  handleSetData,
}: IVenueDetailsProps) {
  const { session } = useSession();
  const sub = session?.user?.sub;
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [availableVenues, setAvailableVenues] = useState<VirtuosoVenues[]>([]);

  // Load owned Venues
  const { isLoading: isVenuesLoading } = useQuery(
    [`inventory-venue`, sub],
    getOwnedVenues,
    {
      onSuccess: (data) => {
        const items = data?.ownership?.venues?.items?.filter(Boolean) ?? [];
        setAvailableVenues(items as VirtuosoVenues[]);
      },
    }
  );

  // We create default values from the merged data
  const defaultValues = getDefaultVenueValues(event, existingData);
  console.log({ dv: event?.VenueID });

  // Setup form
  const form = useForm<VenueDetailsFormInputs>({
    resolver: zodResolver(venueDetailsSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'EventImages',
    control: form.control,
  });

  // Upload event images
  const onEventImageUploadSuccess = (url: string) => {
    append({ src: url });
  };
  const onEventImageUploadError = (error: any) => {
    console.error('Error uploading event image', error);
  };

  const { mutate: mutateEventImage, isLoading: isEventImageUploading } =
    usePublicUpload({
      type: 'EVENT',
      onSuccess: onEventImageUploadSuccess,
      onError: onEventImageUploadError,
    });

  const onSubmit: SubmitHandler<VenueDetailsFormInputs> = (formValues) => {
    const eventImages = formValues.EventImages?.map((img) => img.src) || [];
    handleSetData({
      VenueID: formValues.VenueID,
      VenueLocation: formValues.VenueLocation,
      EventImages: eventImages,
    } as any as EventDetailsFormInputs);
    handleSetStep(2);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSetStep(0);
  };

  // Handle local upload
  const handleEventImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    mutateEventImage(e.target.files[0]);
  };

  return (
    <div className="pt-4 pb-20 md:pt-6">
      <Form {...form}>
        <form
          data-testid="event-venue-details"
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6"
        >
          {/* SELECT A VENUE */}
          <FormField
            control={form.control}
            name="VenueID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SELECT A VENUE</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger data-testid="event-venue-select">
                      <SelectValue placeholder="Choose a venue" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableVenues.map((venue) => (
                        <SelectItem key={venue.VenueID} value={venue.VenueID}>
                          {venue.VenueName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="VenueLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VENUE LOCATION</FormLabel>
                <FormControl>
                  <Textarea className="h-20 resize-none md:h-20" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* UPLOAD EVENT IMAGES */}
          <div className="space-y-2">
            <FormLabel className="block">UPLOAD EVENT IMAGES</FormLabel>

            <div className="grid grid-cols-2 gap-4 pt-2 pb-10 md:flex md:min-h-[400px] md:gap-6 md:pb-0">
              {/* Upload box */}
              <div
                className={cn(
                  'flex flex-col items-center justify-center border border-dashed cursor-pointer h-28 rounded-xl border-primary md:w-36',
                  isEventImageUploading ? 'opacity-50' : ''
                )}
                onClick={() => {
                  if (!isEventImageUploading) {
                    inputFileRef.current?.click();
                  }
                }}
              >
                <input
                  id="cover"
                  className="hidden"
                  type="file"
                  ref={inputFileRef}
                  onChange={handleEventImage}
                />
                <MdOutlineFileUpload className="text-3xl" />
                <span className="text-lg font-medium">Upload</span>
              </div>

              {/* Display uploaded images */}
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="relative w-full overflow-hidden rounded-lg h-28 bg-white/10 md:w-36"
                >
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="absolute flex items-center justify-center w-5 h-5 rounded-full shadow top-1 right-1 bg-white/70 backdrop-blur-md hover:bg-white/80"
                  >
                    <HiOutlineX color="black" />
                  </button>
                  <img
                    src={field.src}
                    className="block object-cover w-full h-full"
                    alt={`event-image-${index}`}
                  />
                </div>
              ))}
            </div>
            {/* We could show a FormMessage if there's a top-level issue for EventImages */}
            {form.formState.errors.EventImages?.[0]?.src && (
              <p className="text-red-500 text-2xs">
                {form.formState.errors.EventImages[0].src?.message}
              </p>
            )}
          </div>

          {/* NAV BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit" data-testid="venue-details-next-btn">
              Confirm & Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
