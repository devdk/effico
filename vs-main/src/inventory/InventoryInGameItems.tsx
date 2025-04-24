'use client';

import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import { GetOwnedInGameItemsQuery, UserAsset } from 'services/types/generated';
import MarketplaceItem from 'src/cards/MarketplaceItem';
import { getOwnedInGameItems } from 'services/ownership.service';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function InventoryInGameItems() {
  const assetType = 'in-game-item';

  const { session, enabled, loading } = useSession();
  const sub = session?.user?.sub;

  const { isLoading, data: inGameItems } = useQuery<
    GetOwnedInGameItemsQuery,
    unknown,
    Array<UserAsset>
  >([`inventory-${assetType}`, sub], getOwnedInGameItems, {
    select: (data) =>
      (data.ownership?.inGameItems?.items?.filter((i) => i) ||
        []) as Array<UserAsset>,
    enabled,
  });

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-border">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          In Game Items
        </h2>
      </section>
      {(isLoading || loading) && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {Array.from(Array(7).keys()).map((i) => (
            <EventCardSkeleton key={i} />
          ))}
        </div>
      )}
      <div>
        {!(isLoading || loading) && !inGameItems?.length && (
          <NoSearchResults
            label="You don't own any In-Game-Items yet!"
            filled={false}
          />
        )}
      </div>
      {!(isLoading || loading) && !inGameItems?.length && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {inGameItems?.map((product) => (
            <MarketplaceItem
              assetType={assetType}
              hidePrice={true}
              key={product?.id}
              asset={product}
              img="/assets/images/avatar-items.png"
            />
          ))}
        </div>
      )}
    </>
  );
}
