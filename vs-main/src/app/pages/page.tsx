'use client';

import Link from 'next/link';
import { TbFaceIdError } from 'react-icons/tb';
import { useQuery } from 'react-query';
import { listPages } from 'services/pages.service';
import {
  ListVirtuosoPagesQuery,
  VirtuosoPageFollowConnection,
} from 'services/types/generated';
import PageCard from 'src/cards/PageCard';
import PageListHeader from 'src/common/PageListHeader';
import { IVirtuosoPages } from 'src/config/pages.config';
import PageCardSkeleton from 'src/placeholders/PageCardSkeleton';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import { usePagesContext } from 'src/providers/PagesContextProvider';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function PageList() {
  const { activeTab, setActiveTab, filter, tabQuery, filters } =
    usePagesContext();
  const { loggedIn } = useIsLoggedIn();
  console.log({ activeTab, filter, tabQuery, filters });

  // list pages based on tab and filters
  const { isLoading, data } = useQuery<
    ListVirtuosoPagesQuery,
    unknown,
    IVirtuosoPages
  >([`pages-${activeTab}-${filter}`, { ...filters, ...tabQuery }], listPages, {
    select: (data) =>
      ({
        creators: data.creators?.items || [],
        venues: data.venues?.items || [],
        vendors: data.vendors?.items || [],
      }) as IVirtuosoPages,
  });

  const noPages =
    !isLoading &&
    !data?.creators?.length &&
    !data?.venues?.length &&
    !data?.vendors.length;

  return (
    <>
      <div className="px-4 py-6 c-container">
        <PageListHeader />
        {noPages && (
          <div>
            <NoSearchResults filled={false} label="No pages created yet!" />
          </div>
        )}
        {!noPages && (
          <section className="grid grid-cols-1 gap-5 py-6 pb-20 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {!isLoading && activeTab === 0 && !loggedIn && (
              <div className="flex flex-col items-center justify-center col-span-1 py-20 gap-y-6 md:col-span-4">
                <TbFaceIdError className="text-8xl md:text-9xl" />
                <h2 className="text-base text-center">
                  Login to view your Pages
                </h2>
                <Link href="/auth/login" className="c-btn-link-primary !w-40">
                  Login
                </Link>
              </div>
            )}
            {isLoading &&
              Array.from(Array(10).keys()).map((i) => (
                <PageCardSkeleton key={i} />
              ))}
            {!isLoading &&
              data?.creators.map((pageDetail) => {
                return (
                  <PageCard
                    id={pageDetail?.CreatorID}
                    key={pageDetail?.CreatorID}
                    pageType="creator"
                    description={pageDetail?.CreatorBio || ''}
                    cover={pageDetail?.CreatorCover || ''}
                    avatar={pageDetail?.CreatorImage || ''}
                    title={pageDetail?.CreatorName || ''}
                    followerCount={pageDetail.followerCount || 0}
                    followers={
                      pageDetail.followers as VirtuosoPageFollowConnection
                    }
                  />
                );
              })}
            {!isLoading &&
              data?.venues.map((pageDetail) => {
                return (
                  <PageCard
                    id={pageDetail?.VenueID}
                    key={pageDetail?.VenueID}
                    pageType="venue"
                    description={pageDetail?.Bio || ''}
                    cover={pageDetail?.VenueProfileCover || ''}
                    avatar={pageDetail?.VenueProfileImage || ''}
                    title={pageDetail?.VenueName || ''}
                    followerCount={pageDetail.followerCount || 0}
                    followers={
                      pageDetail.followers as VirtuosoPageFollowConnection
                    }
                  />
                );
              })}
            {!isLoading &&
              data?.vendors.map((pageDetail) => {
                return (
                  <PageCard
                    id={pageDetail?.VendorID}
                    key={pageDetail?.VendorID}
                    pageType="vendor"
                    description={pageDetail?.VendorBio || ''}
                    cover={pageDetail?.VendorCover || ''}
                    avatar={pageDetail?.VendorImage || ''}
                    title={pageDetail?.VendorName || ''}
                    followerCount={pageDetail.followerCount || 0}
                    followers={
                      pageDetail.followers as VirtuosoPageFollowConnection
                    }
                  />
                );
              })}
          </section>
        )}
      </div>
    </>
  );
}
