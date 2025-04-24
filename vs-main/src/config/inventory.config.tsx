export interface IInventorySidebarLink {
  id: number;
  identifier: string;
  link: string;
}

export const inventorySidebarLinks: IInventorySidebarLink[] = [
  {
    id: 0,
    identifier: 'Avatar Clothing',
    link: '/inventory/avatar-clothing',
  },
  {
    id: 1,
    identifier: 'Venues',
    link: '/inventory/venues',
  },
  {
    id: 2,
    identifier: 'Sitemaps',
    link: '/inventory/sitemaps',
  },
  {
    id: 3,
    identifier: 'Stages',
    link: '/inventory/stages',
  },
  {
    id: 4,
    identifier: 'In Game Items',
    link: '/inventory/in-game-items',
  },
];
