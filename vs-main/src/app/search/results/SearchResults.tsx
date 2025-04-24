'use client';

import { useQuery } from 'react-query';
import { searchUserQuery } from 'services/search.service';
import ListCardSkeleton from 'src/placeholders/ListCardSkeleton';
import SearchCategories from 'src/search/SearchCategories';
import SearchListView from 'src/search/SearchListView';
import SearchNavigation from 'src/search/SearchNavigation';
import SearchSuggestions from 'src/search/SearchSuggestions';
import SearchPagesList from 'src/search/SearchPagesList';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';
import SearchEventsLoading from 'src/placeholders/SearchEventsLoading';
import PostSkeleton from 'src/placeholders/PostSkeleton';
import { useSearchParams } from 'next/navigation';
import { EventsSearchComponent } from 'src/search/EventSearchComponent';
import { PostsList } from 'src/search/PostList';
import { AssetsList } from 'src/search/AssetList';

export default function SearchResults() {
  const params = useSearchParams();
  const q = params?.get('q');

  const { isLoading: isPeopleResultsLoading, data: people } = useQuery(
    ['search', 'people', `?q=${q}`],
    searchUserQuery
  );

  const { isLoading: isPagesResultLoading, data: pages } = useQuery(
    ['search', 'pages', `?q=${q}`],
    searchUserQuery
  );

  const { isLoading: isEventsResultLoading, data: events } = useQuery(
    ['search', 'events', `?q=${q}`],
    searchUserQuery
  );

  const { isLoading: isAssetsLoading, data: assets } = useQuery(
    ['search-marketplace', 'marketplace', `?q=${q}`],
    searchUserQuery
  );

  const { isLoading: isPostsLoading, data: posts } = useQuery(
    ['search-posts', 'posts', `?q=${q}`],
    searchUserQuery
  );

  const found = people?.found + pages?.found + events?.found + assets?.found;

  return (
    <>
      <SearchNavigation />
      <div className="pt-5 pb-24 c-container">
        <div className="grid grid-cols-12 gap-6">
          <SearchCategories />
          <div className="col-span-12 space-y-4 md:col-span-6 md:space-y-6">
            {found < 1 && <NoSearchResults />}
            {isPeopleResultsLoading && <ListCardSkeleton />}
            {!isPeopleResultsLoading && people?.found > 0 && (
              <SearchListView
                link={{ pathname: '/search/results/people', q }}
                data={people?.hit}
              />
            )}
            {events?.found > 0 && (
              <EventsSearchComponent
                isLoading={isEventsResultLoading}
                data={events}
                link={{ pathname: '/search/results/events', q }}
              />
            )}
            {isPagesResultLoading && <ListCardSkeleton />}
            {!isPagesResultLoading && pages?.found > 0 && (
              <SearchPagesList
                link={{ pathname: '/search/results/pages', q }}
                title="Pages"
                data={pages?.hit}
              />
            )}
            {isPostsLoading && (
              <div className="space-y-4">
                {Array.from(Array(4).keys()).map((i) => (
                  <PostSkeleton key={i} />
                ))}
              </div>
            )}
            {!isPostsLoading && posts?.found > 0 && (
              <PostsList
                link={{ pathname: '/search/results/posts', q }}
                data={posts?.hit}
              />
            )}
            {isPagesResultLoading && <SearchEventsLoading />}
            {!isAssetsLoading && assets?.found > 0 && (
              <AssetsList
                link={{ pathname: '/search/results/marketplace', q }}
                data={assets?.hit}
              />
            )}
          </div>
          <SearchSuggestions />
        </div>
      </div>
    </>
  );
}
