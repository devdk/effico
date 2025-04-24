'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { searchUserQuery } from 'services/search.service';
import ListCardSkeleton from 'src/placeholders/ListCardSkeleton';
import SearchCategories from 'src/search/SearchCategories';
import SearchNavigation from 'src/search/SearchNavigation';
import SearchPagesList from 'src/search/SearchPagesList';
import SearchSuggestions from 'src/search/SearchSuggestions';

export default function PagesSearchResults() {
  const params = useSearchParams();
  const q = params?.get('q');

  const { isLoading, data: results } = useQuery(
    ['search-pages', 'pages', `?q=${q}`],
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
          {!isLoading && <SearchPagesList data={results?.hit} />}
          <SearchSuggestions />
        </div>
      </div>
    </>
  );
}
