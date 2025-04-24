import React, { useEffect, useId, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm,
  useFieldArray,
  SubmitHandler,
  useWatch,
} from 'react-hook-form';
import { useMutation, useQueries } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

import useSession from 'src/hooks/useSession';
import { getStagesOfUser } from 'services/asset.service';
import { fetchVenueSitemapsAndStreams } from 'services/events.service';
import { updateStream } from 'services/livestream.service';
import {
  GetOrderedAndCreatedStagesQuery,
  GetVenueSitemapsAndStreamsQuery,
  StreamConfigurations,
  UpdateStreamConfigurationsMutation,
  UpdateStreamConfigurationsMutationVariables,
  VirtuosoEvents,
} from 'services/types/generated';

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

import {
  EventDetailsFormInputs,
  StreamingDetailsFormInputs,
  streamingDetailsSchema,
} from 'src/validators/event.validator';
import toast from 'react-hot-toast';

function getDefaultStreamingValues(
  event: VirtuosoEvents | undefined,
  existingData: EventDetailsFormInputs,
  stageNames: string[]
): StreamingDetailsFormInputs {
  // If either event or existing data has StageStreamMaps,
  // map them; otherwise create placeholders from stageNames
  const defaultStageMap =
    existingData.StageStreamMaps ??
    event?.StageStreamMaps?.map((m) => ({
      stageName: m?.stageName ?? '',
      streamID: m?.streamID ?? '',
      stageID: m?.stageID ?? '',
    })) ??
    [];

  // If we have stageNames but no stage map, create placeholders:
  if (defaultStageMap.length === 0 && stageNames?.length > 0) {
    return {
      SitemapID: existingData?.SitemapID ?? event?.sitemap?.SiteMapID ?? '',
      StageStreamMaps: stageNames.map((sn) => ({
        stageName: sn,
        streamID: '',
        stageID: '',
      })),
    };
  }

  console.log({ ds: event?.SitemapID });

  return {
    SitemapID: existingData?.SitemapID ?? event?.sitemap?.SiteMapID ?? '',
    StageStreamMaps: defaultStageMap,
  };
}

type IStreamingDetailsProps = {
  edit?: boolean;
  event?: VirtuosoEvents;
  existingData: EventDetailsFormInputs;
  isLoading: boolean;
  VenueID?: string | null;
  handleSetStep: (i: number) => void;
  handleCreateEvent: (data: EventDetailsFormInputs) => void;
  handleUpdateEvent: (data: EventDetailsFormInputs) => void;
};

export default function StreamingDetails({
  edit,
  event,
  existingData,
  handleCreateEvent,
  handleUpdateEvent,
  handleSetStep,
  VenueID,
}: IStreamingDetailsProps) {
  const [newEventID] = useState(uuidv4());
  const [stageNames, setStageNames] = useState<string[]>([]);
  const [stagePakFiles, setStagePakFiles] = useState<
    Array<{ name: string; value: string }>
  >([]);
  const [sitemaps, setSitemaps] = useState<
    Array<{ SiteMapName: string; SiteMapID: string }>
  >([]);
  const [streams, setStreams] = useState<Array<StreamConfigurations>>([]);

  const { session } = useSession();
  const keyId = useId();

  // Query data
  const [
    { data: venueSitemapData, isLoading: isSitemapsLoading },
    { data: ownedAssetData, isLoading: isStagesLoading },
  ] = useQueries([
    {
      queryKey: ['venue-sitemaps', VenueID, session?.user?.sub],
      queryFn: fetchVenueSitemapsAndStreams,
      onSuccess: (data: GetVenueSitemapsAndStreamsQuery) => {
        setStageNames(data.venue?.StageNames || ([] as any));
        setSitemaps(data.sitemaps?.items || ([] as any));
        setStreams(data.livestreams?.items || ([] as any));
      },
    },
    {
      queryKey: ['get-owned-stages', session?.user?.sub],
      queryFn: async () => {
        return getStagesOfUser({
          AssetType: 'stage',
          BuyerID: session?.user?.sub,
          sub: session?.user?.sub || '',
        });
      },
      onSuccess: (ownedAsset: GetOrderedAndCreatedStagesQuery) => {
        const items = ownedAsset?.order?.stages?.items ?? [];
        setStagePakFiles(
          items.filter(Boolean).map((asset) => ({
            name: asset?.productName ?? '',
            value: asset?.id ?? '',
          }))
        );
      },
    },
  ]);

  // Form
  const [formInitialized, setFormInitialized] = useState(false);

  // We only build the default values after stageNames are loaded, so we do:
  const defaultValues = getDefaultStreamingValues(
    event,
    existingData,
    stageNames
  );

  const form = useForm<StreamingDetailsFormInputs>({
    resolver: zodResolver(streamingDetailsSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields } = useFieldArray({
    name: 'StageStreamMaps',
    control: form.control,
  });

  // Because stageNames might come in asynchronously, we reset
  // the form once we have stageNames.
  useEffect(() => {
    if (!formInitialized && stageNames?.length > 0) {
      const newDefaults = getDefaultStreamingValues(
        event,
        existingData,
        stageNames
      );
      form.reset(newDefaults);
      setFormInitialized(true);
    }
  }, [stageNames, formInitialized, form, existingData, event]);

  const onSubmit: SubmitHandler<StreamingDetailsFormInputs> = (formData) => {
    // Ensure each stageName from the stageNames array is mapped
    // back into StageStreamMaps
    const final = {
      ...formData,
      StageStreamMaps: stageNames.map((stageName, i) => ({
        stageName,
        streamID: formData.StageStreamMaps[i]?.streamID || '',
        stageID: formData.StageStreamMaps[i]?.stageID || '',
      })),
    };

    if (edit) {
      handleUpdateEvent({ ...final, EventID: event?.EventID } as any);
    } else {
      handleCreateEvent({ ...final, EventID: newEventID } as any);
    }
  };

  // Auto-update streams on selection
  const stageMapWatch = useWatch({
    control: form.control,
    name: 'StageStreamMaps',
  });

  console.log({ stageMapWatch });

  const { mutate: updateStreamMutation } = useMutation<
    UpdateStreamConfigurationsMutation,
    unknown,
    UpdateStreamConfigurationsMutationVariables
  >(updateStream, {
    mutationKey: 'update-stream',
    onSuccess: (res) => {
      // console.log("Stream updated", res);
    },
    onError: (err) => {
      toast.error('Failed to update stream config');
      console.error('Failed to update stream config', err);
    },
  });

  useEffect(() => {
    if (!stageMapWatch?.length) return;

    stageMapWatch
      .filter((m) => !!m.streamID)
      .forEach((m) => {
        updateStreamMutation({
          streamID: m.streamID!,
          stageId: m.stageID!,
          eventId: event?.EventID ?? newEventID,
          venueId: String(VenueID),
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stageMapWatch]);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    handleSetStep(1);
  };

  return (
    <div className="pt-4 pb-20 md:pt-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6"
        >
          {/* SELECT SITEMAP */}
          <FormField
            control={form.control}
            name="SitemapID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SELECT A SITEMAP</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger data-testid="event-sitemap-select">
                      <SelectValue placeholder="Choose Sitemap" />
                    </SelectTrigger>
                    <SelectContent>
                      {sitemaps.map((sm) => (
                        <SelectItem key={sm.SiteMapID} value={sm.SiteMapID}>
                          {sm.SiteMapName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* PER-STAGE CONFIG */}
          {fields?.map((field, index) => (
            <div
              key={`${keyId}-${index}-stage--key`}
              className="pb-6 space-y-6 border-b border-dashed border-primary/40 md:pb-4"
            >
              <div className="grid grid-cols-1 gap-y-4 gap-x-6 md:grid-cols-3">
                {/* Stage Name (read only) */}
                <FormItem>
                  <FormLabel>Stage Name</FormLabel>
                  <FormControl>
                    <input
                      readOnly
                      className="c-input"
                      value={field.stageName}
                      // Or use a styled input from shadcn if you want
                    />
                  </FormControl>
                </FormItem>

                {/* Select Pak File (stageID) */}
                <FormField
                  control={form.control}
                  name={`StageStreamMaps.${index}.stageID`}
                  render={({ field: stageField }) => (
                    <FormItem>
                      <FormLabel>Select Pak File</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={stageField.onChange}
                          defaultValue={stageField.value}
                        >
                          <SelectTrigger
                            data-testid={`stage-${index}-pak-select`}
                          >
                            <SelectValue placeholder="Select pak file" />
                          </SelectTrigger>
                          <SelectContent>
                            {stagePakFiles.map(({ name, value }) => (
                              <SelectItem key={value} value={value}>
                                {name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Select Stream */}
                <FormField
                  control={form.control}
                  name={`StageStreamMaps.${index}.streamID`}
                  render={({ field: streamField }) => (
                    <FormItem>
                      <FormLabel>Select a Livestream</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={streamField.onChange}
                          defaultValue={streamField.value}
                        >
                          <SelectTrigger
                            data-testid={`stage-${index}-stream-select`}
                          >
                            <SelectValue placeholder="Select stream" />
                          </SelectTrigger>
                          <SelectContent>
                            {streams.map(({ streamID, streamName }) => (
                              <SelectItem key={streamID} value={streamID}>
                                {streamName}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}

          {/* NAV BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
            <Button
              type="submit"
              data-testid={edit ? 'update-event-btn' : 'create-event-btn'}
              className="c-btn-primary"
            >
              {edit ? 'Update Event' : 'Create Event'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
