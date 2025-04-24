'use client';

import useSession from 'src/hooks/useSession';
import { useInfiniteQuery } from 'react-query';
import {
  ListMarketplaceSitemapsQuery,
  VirtuosoSiteMaps,
} from 'services/types/generated';
import { listMarketplaceSitemaps } from 'services/sitemap.service';
import MarketplaceSitemapItem from 'src/cards/MarketplaceSitemapItem';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MarketplaceSitemaps() {
  const assetType = 'sitemap';

  const { ref, inView } = useInView();
  const { session } = useSession();
  const sub = session?.user?.sub || 'guest';

  const onSuccess = (data: any) => {
    // console.log(data, 'data');
  };

  const onError = (err: any) => {
    // console.log({ err });
  };
  const { isLoading, data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<ListMarketplaceSitemapsQuery, unknown>(
      [`market-place-${assetType}`, sub, assetType],
      listMarketplaceSitemaps,
      {
        onSuccess,
        onError,
        getNextPageParam: (lastPage, pages: any) =>
          lastPage?.sitemaps?.nextToken,
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
          Sitemaps
        </h2>
      </section>
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
        {isLoading &&
          Array.from(Array(7).keys()).map((i) => <EventCardSkeleton key={i} />)}
        {!isLoading &&
          data?.pages?.map((page) =>
            page?.sitemaps?.items?.map((sitemap, i) => {
              if (page?.sitemaps?.items?.length === i + 1) {
                return (
                  <MarketplaceSitemapItem
                    sitemap={(sitemap as VirtuosoSiteMaps) || null}
                    key={sitemap?.SiteMapID}
                    ref={ref}
                  />
                );
              }
              return (
                <MarketplaceSitemapItem
                  sitemap={(sitemap as VirtuosoSiteMaps) || null}
                  key={sitemap?.SiteMapID}
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
