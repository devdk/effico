import {
  TableVirtuosoCreatorsFilterInput,
  TableVirtuosoVendorsFilterInput,
  TableVirtuosoVenuesFilterInput,
  VirtuosoCreatorsDatasetFragment,
  VirtuosoVendorsDatasetFragment,
  VirtuosoVenuesDatasetFragment,
} from 'services/types/generated';
import { PageFilterType } from 'src/providers/PagesContextProvider';

export interface IPageListTab {
  identifier: string;
  id: number;
}

export interface IPageFilterTab {
  key: PageFilterType;
  identifier: string;
  link: string;
}

export interface IVirtuosoPages {
  creators: VirtuosoCreatorsDatasetFragment[];
  venues: VirtuosoVenuesDatasetFragment[];
  vendors: VirtuosoVendorsDatasetFragment[];
}

export type TPagesFilter = {
  creator: boolean;
  venue: boolean;
  vendor: boolean;
  all?: boolean;
  creatorFilter?: TableVirtuosoCreatorsFilterInput;
  venueFilter?: TableVirtuosoVenuesFilterInput;
  vendorFilter?: TableVirtuosoVendorsFilterInput;
};

export const pageListTabs: IPageListTab[] = [
  {
    id: 0,
    identifier: 'Your Pages',
  },
  {
    id: 1,
    identifier: 'Suggested Pages',
  },
];

export const pageFilterTabs: IPageFilterTab[] = [
  {
    key: 'all',
    identifier: 'All',
    link: '/pages',
  },
  {
    key: 'creator',
    identifier: 'Creator',
    link: '/creator',
  },
  {
    key: 'venue',
    identifier: 'Venue',
    link: '/venue',
  },
  {
    key: 'vendor',
    identifier: 'Vendor',
    link: '/vendor',
  },
];

export const pagesFilter = {
  creator: false,
  venue: false,
  vendor: false,
  creatorFilter: undefined,
  vendorFilter: undefined,
  venueFilter: undefined,
  all: true,
};
