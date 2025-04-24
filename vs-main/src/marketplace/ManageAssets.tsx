'use client';

import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import {
  ListUserAssetsForManagementQuery,
  UserAsset,
} from 'services/types/generated';
import { listUserAssetsForManagement } from 'services/userasset.service';
import AssetCard from 'src/cards/AssetCard';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';

export default function ManageAssets() {
  const { session } = useSession();
  const sub = session?.user?.sub;

  const { isLoading, data: products } = useQuery<
    ListUserAssetsForManagementQuery,
    unknown,
    Array<UserAsset>
  >(['market-place', sub], listUserAssetsForManagement, {
    select: (data) => (data.listUserAssets?.items || []) as Array<UserAsset>,
  });

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Manage Assets
        </h2>
      </section>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
        {isLoading &&
          Array.from(Array(7).keys()).map((i) => <EventCardSkeleton key={i} />)}
        {!isLoading &&
          products?.map((product) => (
            <AssetCard
              asset={product}
              key={product.id}
              img="/assets/images/avatar-items.png"
            />
          ))}
      </div>
    </>
  );
}
