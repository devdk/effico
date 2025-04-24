export interface ISearchCategory {
  id: number;
  identifier: string;
  link: string;
}

export const searchCategories: ISearchCategory[] = [
  {
    id: 0,
    identifier: 'All',
    link: '/search/results',
  },
  {
    id: 1,
    identifier: 'Posts',
    link: '/search/results/posts',
  },
  {
    id: 2,
    identifier: 'People',
    link: '/search/results/people',
  },
  {
    id: 3,
    identifier: 'Events',
    link: '/search/results/events',
  },
  {
    id: 4,
    identifier: 'Marketplace',
    link: '/search/results/marketplace',
  },
  {
    id: 5,
    identifier: 'Pages',
    link: '/search/results/pages',
  },
];
