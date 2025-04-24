'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { listPaginatedEventsByCategory } from 'services/events.service';
import { VirtuosoEvents } from 'services/types/generated';
import EventCard from 'src/cards/EventCard';
import { EVENT_CATEGORIES } from 'src/events/create/EventDetails';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';

function capitalizeFirstLetter(string: string) {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function EventCategory() {
  const params = useParams();

  const slug = params?.slug;
  const { ref, inView } = useInView();

  const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        'paginated-events-by-category',
        capitalizeFirstLetter(slug as string),
      ],
      queryFn: listPaginatedEventsByCategory,
      getNextPageParam: (lastPage, pages: any) => lastPage?.events?.nextToken,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      // console.log({ fetching: true });
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <section className="mx-auto bg-[url('/assets/images/event-banner.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/30 backdrop-blur-sm dark:bg-black/40">
          <div className="c-container">
            <div id="intro" className="p-5 py-20 md:p-40 md:py-60">
              <div className="space-y-8">
                <h1 className="text-4xl font-extrabold text-white/90">
                  Forgotten
                </h1>
                <p className="max-w-sm text-white/80">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Autem, unde quas sequi natus accusantium, odio repellat, eius
                  saepe libero quam obcaecati perferendis explicabo vitae fuga
                  facere et dignissimos aut nobis?
                </p>
                <div>
                  <button className="c-btn-primary">Go To Event</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-8 pb-20 space-y-8 c-container">
        <ul id="navigation" className="flex font-semibold gap-x-6">
          <li>
            <Link href={`/events`}>
              <p
                className={`cursor-pointer ${
                  slug === ''
                    ? 'border-b-2 border-primary pb-2 text-primary'
                    : 'text-heading dark:text-dark-heading'
                }`}
              >
                All
              </p>
            </Link>
          </li>
          {EVENT_CATEGORIES.map((i) => (
            <li key={i}>
              <Link href={`/events/category/${i.toLowerCase()}`}>
                <p
                  className={`cursor-pointer ${
                    slug === i.toLowerCase()
                      ? 'border-b-2 border-primary pb-2 text-primary'
                      : 'text-heading dark:text-dark-heading'
                  }`}
                >
                  {i}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {data?.pages?.map((page) =>
              page.events?.items?.map((event) =>
                ref ? (
                  <EventCard
                    ref={ref}
                    key={event?.EventID}
                    data={event as VirtuosoEvents}
                  />
                ) : (
                  <EventCard
                    key={event?.EventID}
                    data={event as VirtuosoEvents}
                  />
                )
              )
            )}
            {(isLoading || isFetchingNextPage) &&
              Array.from(Array(14).keys()).map((i) => (
                <EventCardSkeleton key={i} />
              ))}
          </div>
          {!hasNextPage && !isLoading && (
            <div className="flex items-center justify-center py-20">
              <p>You&apos;ve reached the end!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
