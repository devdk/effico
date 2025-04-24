export interface INavDropDown {
  id: number;
  identifier: string;
  link: string;
  description: string;
}

export const dropdownItems: INavDropDown[] = [
  {
    id: 0,
    identifier: 'My Tickets',
    link: '/tickets',
    description: 'See tickets you ordered',
  },
  {
    id: 4,
    identifier: 'Inventory',
    link: '/inventory/avatar-clothing',
    description: 'See Purchased Assets',
  },
  {
    id: 1,
    identifier: 'Pages',
    link: '/pages',
    description: 'Create and see pages you made',
  },
  {
    id: 2,
    identifier: 'Chat',
    link: '/chat',
    description: 'Chat with your friends',
  },
  {
    id: 3,
    identifier: 'Settings',
    link: '/settings/account',
    description: 'Access account info and widgets',
  },
  // {
  //   id: 4,
  //   identifier: 'Help',
  //   link: '#',
  //   description: 'Contact for our support',
  // },
];
