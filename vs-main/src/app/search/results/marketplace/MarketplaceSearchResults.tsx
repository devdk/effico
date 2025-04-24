'use client';

import { useQuery } from 'react-query';
import { searchUserQuery } from 'services/search.service';
import SearchCategories from 'src/search/SearchCategories';
import SearchNavigation from 'src/search/SearchNavigation';
import SearchSuggestions from 'src/search/SearchSuggestions';
import { useSearchParams } from 'next/navigation';
import { AssetsList } from 'src/search/AssetList';

export default function MarketplaceSearchResults() {
  const params = useSearchParams();
  const q = params?.get('q');

  const { isLoading, data: results } = useQuery(
    ['search-marketplace', 'marketplace', `?q=${q}`],
    searchUserQuery
  );

  return (
    <>
      <SearchNavigation />
      <div className="pt-5 pb-24 c-container">
        <div className="grid grid-cols-12 gap-6">
          <SearchCategories />
          <AssetsList data={results?.hit} isLoading={isLoading} />
          <SearchSuggestions />
        </div>
      </div>
    </>
  );
}
