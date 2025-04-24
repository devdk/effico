'use client';

import { useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { searchUserQuery } from 'services/search.service';
import { EventsSearchComponent } from 'src/search/EventSearchComponent';
import SearchCategories from 'src/search/SearchCategories';
import SearchNavigation from 'src/search/SearchNavigation';
import SearchSuggestions from 'src/search/SearchSuggestions';

export default function EventsSearchResults() {
  const params = useSearchParams();
  const q = params?.get('q');

  const { isLoading, data: eventsHit } = useQuery(
    ['search', 'events', `?q=${q}`],
    searchUserQuery
  );

  return (
    <>
      <SearchNavigation />
      <div className="pt-5 pb-24 c-container">
        <div className="grid grid-cols-12 gap-6">
          <SearchCategories />
          <EventsSearchComponent isLoading={isLoading} data={eventsHit} />
          <SearchSuggestions />
        </div>
      </div>
    </>
  );
}
