'use client';

import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import {
  GetOwnedAvatarClothingQuery,
  UserAsset,
} from 'services/types/generated';
import MarketplaceItem from 'src/cards/MarketplaceItem';
import { getOwnedAvatarClothing } from 'services/ownership.service';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function InventoryAvatarClothing() {
  const assetType = 'avatar-clothing';

  const { session, enabled, loading } = useSession();
  const sub = session?.user?.sub;

  const { isLoading, data: avatarClothing } = useQuery<
    GetOwnedAvatarClothingQuery,
    unknown,
    Array<UserAsset>
  >([`inventory-${assetType}`, sub], getOwnedAvatarClothing, {
    select: (data) =>
      (data.ownership?.avatarClothing?.items?.filter((i) => i) ||
        []) as Array<UserAsset>,
    enabled,
  });

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Avatar Items
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
        {!(isLoading || loading) && !avatarClothing?.length && (
          <NoSearchResults
            label="You don't own any Avatar Items yet!"
            filled={false}
          />
        )}
      </div>
      {!(isLoading || loading) && !!avatarClothing?.length && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {avatarClothing?.map((product) => (
            <MarketplaceItem
              assetType={assetType}
              hidePrice={true}
              key={product.id}
              asset={product}
              img="/assets/images/avatar-items.png"
            />
          ))}
        </div>
      )}
    </>
  );
}
