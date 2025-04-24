import React, { Suspense } from 'react';
import MarketplaceSearchResults from './MarketplaceSearchResults';

export default function Page() {
  return (
    <Suspense>
      <MarketplaceSearchResults />
    </Suspense>
  );
}
