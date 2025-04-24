'use client';

import Link from 'next/link';
import { Button } from 'src/components/ui/button';
import { HiOutlineTicket } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { listPublicEvents } from 'services/events.service';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import { VirtuosoEvents } from 'services/types/generated';
import EventCard from 'src/cards/EventCard';

export default function Events() {
  const { data, isLoading, error } = useQuery<any>(
    ['events'],
    listPublicEvents
  );

  return (
    <>
      <section className="mx-auto bg-[url('/assets/images/pixel-terror.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gradient-to-t from-black/60 to-black/30 backdrop-blur-[4px]">
          <div className="c-container">
            <div id="intro" className="p-5 py-20 md:p-40 md:py-60">
              <div className="space-y-8">
                <h1 className="text-4xl font-extrabold text-white/90">
                  Pixel Terror, BLUPILL, SkySky, ATHRS
                </h1>
                <p className="max-w-sm text-white/80">
                  <span className="font-semibold">W.O.R.M. X Virtuoso</span> are
                  bringing Bass & Technology together for a one-of-a-kind
                  showcase. Featuring Pixel Terror, BLUPILL, Sky Sky, ATHRS, and
                  local support TBA. Don’t miss out on multiple Virtuoso live
                  workshops, where we’ll be unveiling the newest app. Expect
                  LiDAR, Virtual Reality, Livestreams, Lasers, and so much more!
                </p>
                <p>
                  Get ready for an epic night on{' '}
                  <span className="text-lg font-semibold text-white">
                    March 14th
                  </span>
                  !!
                </p>
                <div>
                  <Link
                    href={`/buy?id=3ed4f4bd-2e79-4b60-84db-7d7acca1aa09&type=event`}
                  >
                    <Button>
                      Get Tickets <HiOutlineTicket />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-8 pb-20 space-y-8 c-container">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {data?.data?.data?.map((event: any) => (
              <EventCard key={event?.EventID} data={event as VirtuosoEvents} />
            ))}
            {isLoading &&
              Array.from(Array(14).keys()).map((i) => (
                <EventCardSkeleton key={i} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
