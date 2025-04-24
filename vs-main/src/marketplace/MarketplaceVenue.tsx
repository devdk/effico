'use client';

import useSession from 'src/hooks/useSession';
import { useInfiniteQuery } from 'react-query';
import { listMarketplaceVenues } from 'services/venue.service';
import { ListMarketplaceVenuesQuery } from 'services/types/generated';
import MarketplaceVenueItem from 'src/cards/MarketplaceVenueItem';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

export default function MarketplaceVenue() {
  const assetType = 'venue';

  const { ref, inView } = useInView();
  const { session } = useSession();
  const sub = session?.user?.sub || 'guest';

  const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<ListMarketplaceVenuesQuery, unknown>(
      [`market-place-${assetType}`, sub, assetType],
      listMarketplaceVenues,
      {
        getNextPageParam: (lastPage, pages: any) => lastPage?.venues?.nextToken,
      }
    );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <section className="flex items-center justify-between pb-4 border-b border-quarternary dark:border-dark-quarternary">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Venues
        </h2>
      </section>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
        {!isLoading &&
          data?.pages?.map((page) =>
            page?.venues?.items?.map((venue, i) => {
              if (page?.venues?.items?.length === i + 1) {
                return (
                  <MarketplaceVenueItem
                    venue={venue || undefined}
                    key={venue?.VenueID}
                    ref={ref}
                  />
                );
              }
              return (
                <MarketplaceVenueItem
                  venue={venue || undefined}
                  key={venue?.VenueID}
                />
              );
            })
          )}
        {isLoading ||
          (isFetchingNextPage &&
            Array.from(Array(7).keys()).map((i) => (
              <EventCardSkeleton key={i} />
            )))}
      </div>
    </>
  );
}
