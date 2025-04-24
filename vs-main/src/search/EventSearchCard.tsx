import Link from 'next/link';

export function EventsSearchCard({ data }: any) {
  return (
    <div key={data?.id} className="" id="event_card">
      <Link href={`/events/${data?.id}`}>
        <div className="overflow-hidden aspect-h-10 aspect-w-16 rounded-xl">
          <img
            src={
              data?.fields?.event_image?.[0] || '/assets/images/temp-event.png'
            }
            alt="event"
            className="block w-full duration-200 transform cursor-pointer hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex py-2 gap-x-3">
        <Link
          className="block h-[46px] w-[46px] overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary"
          href={`/events/${data?.id}`}
        >
          <img
            src={
              data?.fields?.venue_profile_image?.[0] ||
              '/assets/images/page-card-avatar.png'
            }
            alt="venue"
            className="block w-full h-full"
          />
        </Link>
        <div className="flex-1 text-sm">
          <Link
            href={`/events/${data?.id}`}
            className="block font-medium capitalize text-heading dark:text-dark-heading"
          >
            {data?.fields?.eventname?.[0]}
          </Link>
          <Link href={`/events`} className="block">
            {data?.fields?.eventcategory?.[0]}
          </Link>
        </div>
      </div>
    </div>
  );
}
