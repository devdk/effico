'use client';

import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import { GetStagesQuery, UserAsset } from 'services/types/generated';
import MarketplaceItem from 'src/cards/MarketplaceItem';
import { getOwnedStages } from 'services/ownership.service';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function InventoryStages() {
  const assetType = 'stage';

  const { session, enabled, loading } = useSession();
  const sub = session?.user?.sub;

  const { isLoading, data: stages } = useQuery<
    GetStagesQuery,
    unknown,
    Array<UserAsset>
  >([`inventory-${assetType}`, sub], getOwnedStages, {
    select: (data) =>
      (data.ownership?.stages?.items?.filter((i) => i) ||
        []) as Array<UserAsset>,
    enabled,
  });

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-border">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Stages
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
        {!(isLoading || loading) && !stages?.length && (
          <NoSearchResults
            label="You don't own any stages yet!"
            filled={false}
          />
        )}
      </div>
      {!(isLoading || loading) && !!stages?.length && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {stages?.map((product) => (
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
