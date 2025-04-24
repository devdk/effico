'use client';

import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import { GetVenuesQuery, VirtuosoVenues } from 'services/types/generated';
import { getOwnedVenues } from 'services/ownership.service';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import MarketplaceVenueItem from 'src/cards/MarketplaceVenueItem';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function InventoryVenues() {
  const assetType = 'venue';

  const { session, enabled } = useSession();
  const sub = session?.user?.sub;

  const { isLoading, data: venues } = useQuery<
    GetVenuesQuery,
    unknown,
    Array<VirtuosoVenues>
  >([`inventory-${assetType}`, sub], getOwnedVenues, {
    select: (data) =>
      (data.ownership?.venues?.items?.filter((i) => i) ||
        []) as Array<VirtuosoVenues>,
    enabled,
  });

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Venues
        </h2>
      </section>
      {isLoading && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {Array.from(Array(7).keys()).map((i) => (
            <EventCardSkeleton key={i} />
          ))}
        </div>
      )}
      <div>
        {!isLoading && !venues?.length && (
          <NoSearchResults
            label="You don't own any venues yet!"
            filled={false}
          />
        )}
      </div>
      {!isLoading && !!venues?.length && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {venues?.map((venue) => (
            <MarketplaceVenueItem
              hidePrice={true}
              key={venue?.VenueID}
              venue={venue}
            />
          ))}
        </div>
      )}
    </>
  );
}
