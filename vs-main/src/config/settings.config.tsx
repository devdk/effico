import { FaDollarSign, FaMoneyCheck } from 'react-icons/fa';
import {
  HiOutlineInformationCircle,
  HiOutlineUser,
  HiOutlineVideoCamera,
} from 'react-icons/hi';
import { IconType } from 'react-icons/lib';
import { MdOutlineLiveHelp, MdOutlineNotificationsNone } from 'react-icons/md';

export interface ISidebarLink {
  id: number;
  identifier: string;
  link: string;
  icon: IconType;
}

export const sidebarLinks: ISidebarLink[] = [
  {
    id: 0,
    identifier: 'Account',
    link: '/settings/account',
    icon: HiOutlineUser,
  },
  // {
  //   id: 1,
  //   identifier: 'Security and privacy',
  //   link: '/settings/security',
  //   icon: HiOutlineLockOpen,
  // },
  {
    id: 2,
    identifier: 'Livestream',
    link: '/settings/livestream',
    icon: HiOutlineVideoCamera,
  },
  {
    id: 2,
    identifier: 'Subscription',
    link: '/settings/subscription',
    icon: FaMoneyCheck,
  },
  {
    id: 3,
    identifier: 'Monetization',
    link: '/settings/monetization',
    icon: FaDollarSign,
  },
  {
    id: 4,
    identifier: 'Notifications',
    link: '/settings/notifications',
    icon: MdOutlineNotificationsNone,
  },
  {
    id: 5,
    identifier: 'Additional Information',
    link: '/settings/information',
    icon: HiOutlineInformationCircle,
  },
  {
    id: 6,
    identifier: 'Help',
    link: '/settings/help',
    icon: MdOutlineLiveHelp,
  },
];
