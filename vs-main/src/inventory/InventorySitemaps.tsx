'use client';

import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import {
  GetOwnedSitemapsQuery,
  VirtuosoSiteMaps,
} from 'services/types/generated';
import { getOwnedSitemaps } from 'services/ownership.service';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import InventorySitemapItem from 'src/cards/InventorySitemapItem';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function InventorySitemaps() {
  const assetType = 'sitemap';

  const { session, enabled } = useSession();
  const sub = session?.user?.sub;

  const { isLoading, data: sitemaps } = useQuery<
    GetOwnedSitemapsQuery,
    unknown,
    Array<VirtuosoSiteMaps>
  >([`inventory-${assetType}`, sub], getOwnedSitemaps, {
    select: (data) =>
      (data.ownership?.sitemaps?.items?.filter((i) => i) ||
        []) as Array<VirtuosoSiteMaps>,
    enabled,
  });

  return (
    <>
      <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
        <h2 className="flex-1 text-lg font-bold color-heading md:text-xl">
          Sitemaps
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
        {!isLoading && !sitemaps?.length && (
          <NoSearchResults
            label="You don't own any sitemaps yet!"
            filled={false}
          />
        )}
      </div>
      {!isLoading && !!sitemaps?.length && (
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3">
          {sitemaps?.map((sitemap) => (
            <InventorySitemapItem key={sitemap?.SiteMapID} sitemap={sitemap} />
          ))}
        </div>
      )}
    </>
  );
}
