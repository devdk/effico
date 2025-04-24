export interface IMarketplaceSidebarLink {
  id: number;
  identifier: string;
  link: string;
  separate?: boolean;
}

export const marketplaceSidebarLinks: IMarketplaceSidebarLink[] = [
  {
    id: 0,
    identifier: 'Stages',
    link: '/marketplace/stages',
  },
  {
    id: 1,
    identifier: 'Venues',
    link: '/marketplace/venues',
  },
  {
    id: 2,
    identifier: 'Sitemaps',
    link: '/marketplace/sitemaps',
  },
  {
    id: 3,
    identifier: 'Avatar Clothing',
    link: '/marketplace/avatar-clothing',
  },
  {
    id: 4,
    identifier: 'In Game Items',
    link: '/marketplace/in-game-items',
  },
  {
    id: 5,
    identifier: 'Manage Assets',
    link: '/marketplace/manage-assets',
    separate: true,
  },
];
