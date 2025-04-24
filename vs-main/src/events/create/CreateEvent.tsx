'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineChevronLeft } from 'react-icons/md';
import { useMutation } from 'react-query';
import { createEvent, updateEvent } from 'services/events.service';
import {
  CreateEventMutation,
  CreateEventMutationVariables,
  UpdateEventMutation,
  UpdateEventMutationVariables,
  VirtuosoEvents,
} from 'services/types/generated';
import { toast } from 'react-hot-toast';
import { useParams, useRouter } from 'next/navigation';

import EventDetails from './EventDetails';
import VenueDetails from './VenueDetails';
import StreamingDetails from './StreamingDetails';
import { EventDetailsFormInputs } from 'src/validators/event.validator';

interface ICreateEventProp {
  edit?: boolean;
  event?: VirtuosoEvents;
}

export default function CreateEvent({ edit, event }: ICreateEventProp) {
  const [step, setStep] = useState<number>(0);
  const [data, setData] = useState<EventDetailsFormInputs | {}>({});

  const { session } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  // CREATE EVENT MUTATION
  const onSuccess = (data: CreateEventMutation) => {
    const created = data.createVirtuosoEvents as VirtuosoEvents;
    toast.success('Event Created!');
    router.push(`/events/${created?.EventID}`);
  };
  const onError = (err: any) => {
    toast.error('An error occurred!');
  };
  const { mutate, isLoading } = useMutation<
    CreateEventMutation,
    unknown,
    CreateEventMutationVariables
  >(createEvent, {
    mutationKey: 'create-event',
    onSuccess,
    onError,
  });

  // UPDATE EVENT MUTATION
  const onUpdateSuccess = (data: UpdateEventMutation) => {
    const updated = data.updateVirtuosoEvents as VirtuosoEvents;
    toast.success('Event Updated!');
    router.push(`/events/${updated?.EventID}`);
  };
  const onUpdateError = (err: any) => {
    toast.error('An error occurred!');
  };
  const { mutate: update, isLoading: isUpdateLoading } = useMutation<
    UpdateEventMutation,
    unknown,
    UpdateEventMutationVariables
  >(updateEvent, {
    mutationKey: 'update-event',
    onSuccess: onUpdateSuccess,
    onError: onUpdateError,
  });

  // HANDLERS
  const handleSetData = (formData: EventDetailsFormInputs) => {
    // Merge new step data into the existing partial data
    setData((prev) => ({ ...prev, ...formData }));
  };

  const handleCreateEvent = (finalStepData: EventDetailsFormInputs) => {
    const additionalFields = {
      EventTimeCreated: `${Date.now()}`,
      EventCreatorID: session?.user?.sub,
      EventCreatorPageId: id,
      EventOwnerID: session?.user?.sub,
    } as any as EventDetailsFormInputs;

    const finalFormData = {
      ...data,
      ...finalStepData,
      ...additionalFields,
    } as CreateEventMutationVariables;

    mutate(finalFormData);
  };

  const handleUpdateEvent = (finalStepData: EventDetailsFormInputs) => {
    const finalFormData = {
      ...data,
      ...finalStepData,
    } as UpdateEventMutationVariables;

    // console.log(finalFormData);
    update(finalFormData);
  };

  const handleSetStep = (i: number) => {
    setStep(i);
  };

  return (
    <div data-testid="create-event-form" className="pt-8 pb-10 c-container-sm">
      {step < 3 && (
        <Link
          className="text-lg font-bold"
          href={edit ? `/events/${event?.EventID}` : `/creator/${id}`}
        >
          <MdOutlineChevronLeft className="inline text-2xl" /> Back to{' '}
          {edit ? 'Event' : 'Page'}
        </Link>
      )}

      {step === 0 && (
        <EventDetails
          event={event}
          existingData={data as EventDetailsFormInputs}
          handleSetStep={handleSetStep}
          handleSetData={handleSetData}
        />
      )}

      {step === 1 && (
        <VenueDetails
          event={event}
          existingData={data as EventDetailsFormInputs}
          handleSetStep={handleSetStep}
          handleSetData={handleSetData}
        />
      )}

      {step === 2 && (
        <StreamingDetails
          edit={edit}
          event={event}
          existingData={data as EventDetailsFormInputs}
          VenueID={(data as EventDetailsFormInputs)?.VenueID}
          isLoading={false} // placeholder
          handleSetStep={handleSetStep}
          handleCreateEvent={handleCreateEvent}
          handleUpdateEvent={handleUpdateEvent}
        />
      )}
    </div>
  );
}
