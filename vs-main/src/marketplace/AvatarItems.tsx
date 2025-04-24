'use client';

import useSession from 'src/hooks/useSession';
import { useInfiniteQuery } from 'react-query';
import { ListUserAssetByAssetTypeQuery } from 'services/types/generated';
import { listUserAssetByAssetType } from 'services/userasset.service';
import MarketplaceItem from 'src/cards/MarketplaceItem';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function AvatarItems() {
  const assetType = 'avatar-clothing';

  const { ref, inView } = useInView();
  const { session } = useSession();
  const sub = session?.user?.sub || 'guest';

  const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<ListUserAssetByAssetTypeQuery, unknown>(
      [`market-place-${assetType}`, sub, assetType],
      listUserAssetByAssetType,
      {
        getNextPageParam: (lastPage, pages: any) =>
          lastPage?.listUserAssets?.nextToken,
      }
    );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Avatar Items
        </h2>
      </section>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
        {!isLoading &&
          data?.pages?.map((page) =>
            page?.listUserAssets?.items?.map((asset, i) => {
              if (page?.listUserAssets?.items?.length === i + 1) {
                return (
                  <MarketplaceItem
                    assetType={assetType}
                    asset={asset || undefined}
                    key={asset?.id}
                    ref={ref}
                  />
                );
              }
              return (
                <MarketplaceItem
                  assetType={assetType}
                  asset={asset || undefined}
                  key={asset?.id}
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
