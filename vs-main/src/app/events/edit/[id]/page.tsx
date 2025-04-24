'use client';

import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { fetchEventById } from 'services/events.service';
import { GetEventQuery, VirtuosoEvents } from 'services/types/generated';
import CreateEvent from 'src/events/create/CreateEvent';
import useSession from 'src/hooks/useSession';
import EventPageSkeleton from 'src/placeholders/EventPageSkeleton';

export default function EditEventPage() {
  const { session } = useSession();
  const params = useParams();
  const id = params?.id;

  const { isLoading, data } = useQuery<GetEventQuery, unknown, VirtuosoEvents>(
    [`event-${id}`, id, session?.user?.sub],
    fetchEventById,
    {
      select: (data) => data.getVirtuosoEvents as VirtuosoEvents,
    }
  );
  if (isLoading) return <EventPageSkeleton />;

  return <CreateEvent edit={true} event={data} />;
}
