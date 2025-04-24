import Link from 'next/link';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';
import { EventsSearchCard } from './EventSearchCard';

interface EventsSearchComponentProps {
  isLoading: boolean;
  data: any;
  link?: any;
}

export function EventsSearchComponent({
  isLoading,
  data,
  link,
}: EventsSearchComponentProps) {
  // console.log({ isLoading, length: data?.length });

  if (!isLoading && !(data?.found > 0)) return <NoSearchResults />;

  return (
    <div className="col-span-12 space-y-6 md:col-span-6">
      <div className="c-box space-y-5 !rounded-none py-5 pb-2 md:!rounded-xl">
        <div id="header" className="flex justify-between px-5">
          <h2 className="text-sm font-bold color-heading font-heading">
            Events
          </h2>
          <HiOutlineDotsVertical className="text-xl" />
        </div>
        <div className="grid grid-cols-1 px-5 gap-x-5 gap-y-4 md:grid-cols-2">
          {isLoading &&
            Array.from(Array(4).keys()).map((i) => (
              <EventCardSkeleton key={i} />
            ))}
          {!isLoading &&
            data?.hit?.map((i: any) => (
              <EventsSearchCard key={i?.id} data={i} />
            ))}
        </div>
        {link && (
          <div className="flex items-center justify-center flex-1 p-4 text-sm">
            <h3 className="text-sm font-medium color-heading">
              <Link href={link}>See All</Link>
            </h3>
          </div>
        )}
        {!link && (
          <div className="flex items-center justify-center flex-1 p-4 text-sm">
            <h3 className="text-sm font-medium color-heading">
              <button>See more</button>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
