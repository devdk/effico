'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { TbFaceIdError } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { VirtuosoPageFollowConnection } from 'services/types/generated';
import { listVendorPages } from 'services/vendor.service';
import PageCard from 'src/cards/PageCard';
import PageListHeader from 'src/common/PageListHeader';
import PageCardSkeleton from 'src/placeholders/PageCardSkeleton';
import { usePagesContext } from 'src/providers/PagesContextProvider';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

export default function PageList() {
  const { activeTab, pvtPublicQuery, sub } = usePagesContext();
  const { loggedIn } = useIsLoggedIn();
  const { inView } = useInView();

  const { isLoading, data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [`vendors-${sub}`, { VendorCreatorID: pvtPublicQuery }],
    queryFn: listVendorPages,
    getNextPageParam: (lastPage) => lastPage?.vendors?.nextToken,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      // console.log({ fetching: true });
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <div className="px-4 py-6 c-container">
        <PageListHeader />
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
          {!isLoading && !data?.pages?.[0].vendors?.items?.length && (
            <div className="col-span-full">
              <NoSearchResults
                filled={false}
                label="You don't have any Vendor pages yet!"
              />
            </div>
          )}
          {!isLoading &&
            data?.pages?.map((i) => (
              <>
                {i?.vendors?.items?.map((pageDetail) => {
                  return (
                    <PageCard
                      id={pageDetail?.VendorID}
                      key={pageDetail?.VendorID}
                      pageType="vendor"
                      description={pageDetail?.VendorBio || ''}
                      cover={pageDetail?.VendorCover || ''}
                      avatar={pageDetail?.VendorImage || ''}
                      title={pageDetail?.VendorName || ''}
                      followerCount={pageDetail?.followerCount || 0}
                      followers={
                        pageDetail?.followers as VirtuosoPageFollowConnection
                      }
                    />
                  );
                })}
              </>
            ))}
        </section>
      </div>
    </>
  );
}
