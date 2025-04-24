import React, { createContext, useContext, useState } from 'react';
import { pagesFilter, TPagesFilter } from 'src/config/pages.config';
import useSession from 'src/hooks/useSession';

export type PageFilterType = 'all' | 'venue' | 'creator' | 'vendor';

type IPagesContext = {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  filter: PageFilterType;
  setFilter: React.Dispatch<React.SetStateAction<PageFilterType>>;
  filters: TPagesFilter;
  setFilters: React.Dispatch<React.SetStateAction<TPagesFilter>>;
  sub: string;
  tabQuery: {
    vendorFilter: {
      VendorCreatorID: {
        ne?: string;
        eq?: string;
      };
    };
    creatorFilter: {
      CreatorOwnerID: {
        eq?: string;
        ne?: string;
      };
    };
    venueFilter: {
      VenueCreatorID: {
        eq?: string;
        ne?: string;
      };
    };
  };
  pvtPublicQuery: {
    ne?: string;
    eq?: string;
  };
};

const PagesContext = createContext<IPagesContext>({
  activeTab: 0,
  setActiveTab: () => {},
  filter: 'all',
  setFilter: () => {},
  filters: pagesFilter,
  setFilters: () => {},
  sub: 'guest',
  tabQuery: {
    vendorFilter: {
      VendorCreatorID: {
        ne: 'guest',
      },
    },
    creatorFilter: {
      CreatorOwnerID: {
        ne: 'guest',
      },
    },
    venueFilter: {
      VenueCreatorID: {
        ne: 'guest',
      },
    },
  },
  pvtPublicQuery: {
    ne: 'guest',
  },
});

export function PagesProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);
  const [filters, setFilters] = useState<TPagesFilter>(pagesFilter);
  const [filter, setFilter] = useState<PageFilterType>('all');
  const { session } = useSession();
  const sub = session?.user?.sub || 'guest';

  const pvtPublicQuery = activeTab === 0 ? { eq: sub } : { ne: sub };

  const tabQuery = {
    vendorFilter: {
      VendorCreatorID: pvtPublicQuery,
    },
    creatorFilter: {
      CreatorOwnerID: pvtPublicQuery,
    },
    venueFilter: {
      VenueCreatorID: pvtPublicQuery,
    },
  };

  return (
    <PagesContext.Provider
      value={{
        activeTab,
        setActiveTab,
        filter,
        setFilter,
        filters,
        setFilters,
        sub,
        tabQuery,
        pvtPublicQuery,
      }}
    >
      {children}
    </PagesContext.Provider>
  );
}

export function usePagesContext() {
  return useContext(PagesContext);
}
