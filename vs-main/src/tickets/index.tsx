'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { listEvents } from 'services/events.service';
import {
  GetOwnedTicketsQuery,
  ListEventsQuery,
  VirtuosoEvents,
  VirtuosoTickets,
} from 'services/types/generated';
import EventCard from 'src/cards/EventCard';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import TicketCardSkeleton from 'src/placeholders/TicketCardSkeleton';
import Ticket from './Ticket';
import { getOwnedTickets } from 'services/ownership.service';

export default function Tickets() {
  const { session } = useSession();

  const onSuccess = (data: any) => {
    // console.log(data, 'data');
  };

  // TODO: Add limit of 4 on event listing here
  const {
    isLoading,
    error,
    data: virtuosoEvents,
  } = useQuery<ListEventsQuery, unknown, VirtuosoEvents[]>(
    'list-events',
    listEvents,
    {
      onSuccess,
      select: (data: any) => data.events.items,
      onError: (err) => {
        // console.log('from errr');
        // console.log(err);
      },
    }
  );

  const {
    isLoading: isTicketsLoading,
    data: tickets,
    error: ticketsError,
  } = useQuery<GetOwnedTicketsQuery, unknown, VirtuosoTickets[]>(
    ['list-tickets', session?.user?.sub],
    getOwnedTickets,
    {
      select: (data) => data?.ownership?.tickets?.items as VirtuosoTickets[],
      onError: (err) => {
        // console.log('from errr');
        // console.log(err);
      },
    }
  );

  return (
    <section className="py-8">
      <div className="grid grid-cols-12 gap-8 px-4 pb-16 c-container">
        <div className="col-span-12">
          <Link href="/tickets" className="text-xl font-bold">
            {/* <MdOutlineChevronLeft className="inline text-2xl" />  */}
            My Tickets
          </Link>
        </div>
        <div className="col-span-12 space-y-8 md:col-span-7">
          {isTicketsLoading &&
            Array.from(Array(4).keys()).map((i) => (
              <TicketCardSkeleton key={i} />
            ))}
          {!isTicketsLoading &&
            tickets?.map((ticket) => (
              <Ticket key={ticket.TicketID} data={ticket} />
            ))}
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="py-5 space-y-5 c-box">
            <div className="flex items-center justify-between px-5">
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
              <HiOutlineDotsVertical className="text-xl" />
            </div>
            <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-2">
              {isLoading &&
                Array.from(Array(4).keys()).map((i) => (
                  <EventCardSkeleton key={i} />
                ))}
              {!isLoading &&
                virtuosoEvents
                  ?.slice(0, 4)
                  .map((i) => <EventCard data={i} key={i.EventID} />)}
            </div>
            <div className="pt-4 border-t border-quarternary dark:border-dark-quarternary">
              <Link
                href="/events"
                className="block text-center transition-all duration-300 hover:text-primary"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
