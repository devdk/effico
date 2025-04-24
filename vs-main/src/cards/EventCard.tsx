import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { VirtuosoEvents } from 'services/types/generated';

interface IEventCardProps {
  data: VirtuosoEvents;
}

const EventCard = React.forwardRef(function EventCard(
  { data }: IEventCardProps,
  ref
) {
  return (
    <div key={data.EventID} className="relative" id="event_card">
      {data.isLive && (
        <p className="absolute z-20 px-4 text-xs font-medium text-white bg-green-600 rounded-full shadow-lg top-2 left-2">
          Live
        </p>
      )}
      <Link href={`/events/${data.EventID}`}>
        <div className="overflow-hidden duration-200 transform cursor-pointer aspect-h-10 aspect-w-16 rounded-xl hover:scale-105">
          <Image
            quality={100}
            height={300}
            width={400}
            src={data.EventImages?.[0] || '/assets/images/temp-event.png'}
            alt="event"
            className="block object-cover w-full"
          />
        </div>
      </Link>
      <div className="flex py-2 gap-x-3">
        <Link
          className="block h-[46px] w-[46px] overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary"
          href={`/venue/${data?.venue?.VenueID}`}
        >
          <Image
            height={100}
            width={100}
            quality={80}
            src={
              data?.venue?.VenueProfileImage ||
              '/assets/images/page-card-avatar.png'
            }
            alt="venue"
            className="block w-full h-full"
          />
        </Link>
        {ref ? (
          <div ref={ref as any} className="flex-1 text-sm">
            <Link
              href={`/events/${data.EventID}`}
              className="block font-medium capitalize text-heading dark:text-dark-heading"
            >
              {data.EventName}
            </Link>
            <Link href={`/venue/${data?.venue?.VenueID}`} className="block">
              {data?.venue?.VenueName}
            </Link>
          </div>
        ) : (
          <div className="flex-1 text-sm">
            <Link
              href={`/events/${data.EventID}`}
              className="block font-medium capitalize text-heading dark:text-dark-heading"
            >
              {data.EventName}
            </Link>
            <Link href={`/venue/${data?.venue?.VenueID}`} className="block">
              {data?.venue?.VenueName}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
});

export default EventCard;
