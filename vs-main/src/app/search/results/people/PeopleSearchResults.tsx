'use client';

import { useQuery } from 'react-query';
import SearchCategories from 'src/search/SearchCategories';
import SearchListView from 'src/search/SearchListView';
import SearchNavigation from 'src/search/SearchNavigation';
import SearchSuggestions from 'src/search/SearchSuggestions';
import { searchUserQuery } from 'services/search.service';
import { useSearchParams } from 'next/navigation';
import ListCardSkeleton from 'src/placeholders/ListCardSkeleton';

export default function PeopleSearchResults() {
  const params = useSearchParams();
  const q = params?.get('q');

  const { isLoading, data: results } = useQuery(
    ['search-people', 'people', `?q=${q}`],
    searchUserQuery
  );

  return (
    <>
      <SearchNavigation />
      <div className="pt-5 pb-24 c-container">
        <div className="grid grid-cols-12 gap-6">
          <SearchCategories />
          {isLoading && (
            <div className="col-span-12 md:col-span-6">
              <ListCardSkeleton />
            </div>
          )}
          {!isLoading && <SearchListView data={results?.hit} />}
          <SearchSuggestions />
        </div>
      </div>
    </>
  );
}
