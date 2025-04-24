'use client';

import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { searchUserQuery } from 'services/search.service';
import PostSkeleton from 'src/placeholders/PostSkeleton';
import SearchCategories from 'src/search/SearchCategories';
import SearchNavigation from 'src/search/SearchNavigation';
import SearchSuggestions from 'src/search/SearchSuggestions';
import { useSearchParams } from 'next/navigation';
import { SelfFetchedPost } from 'src/search/SelfFetchedPost';

export default function PostSearchResults() {
  const params = useSearchParams();
  const q = params?.get('q');

  const { isLoading, data } = useQuery(
    ['search-posts', 'posts', `?q=${q}`],
    searchUserQuery
  );

  return (
    <>
      <SearchNavigation />
      <div className="pt-5 pb-24 c-container">
        <div className="grid grid-cols-12 gap-6">
          <SearchCategories />
          <div className="col-span-12 space-y-4 md:col-span-6">
            <div className="c-box !rounded-none md:!rounded-xl">
              <div id="header" className="flex justify-between p-5 pb-4">
                <h2 className="text-sm font-bold color-heading font-heading">
                  Posts
                </h2>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            {isLoading &&
              Array.from(Array(4).keys()).map((i) => <PostSkeleton key={i} />)}
            {!isLoading &&
              data?.hit?.map((i: any) => (
                <SelfFetchedPost
                  key={i?.id}
                  id={i?.id}
                  pageId={i?.fields?.pageid?.[0]}
                />
              ))}
          </div>
          <SearchSuggestions />
        </div>
      </div>
    </>
  );
}
