'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiOutlineHome } from 'react-icons/hi';
import {
  MdOutlineFileCopy,
  MdOutlineOndemandVideo,
  MdOutlineShoppingBag,
} from 'react-icons/md';

export default function NavLinks() {
  const path = usePathname();
  return (
    <ul className="flex items-center justify-evenly gap-x-10">
      <li className="flex-1">
        <Link
          href="/"
          className="hover:text-color-heading flex flex-col items-center justify-center gap-y-0.5"
        >
          <span>
            <HiOutlineHome className="text-xl" />
          </span>
          <span className="text-xs font-normal">Home</span>
        </Link>
      </li>
      <li className="flex-1">
        <Link
          href="/events"
          className="hover:text-color-heading flex flex-col items-center justify-center gap-y-0.5"
        >
          <span>
            <MdOutlineOndemandVideo className="text-xl" />
          </span>
          <span className="text-xs font-normal">Events</span>
        </Link>
      </li>
      <li className="flex-1">
        <Link
          href="/pages"
          className="hover:text-color-heading flex flex-col items-center justify-center gap-y-0.5"
        >
          <span>
            <MdOutlineFileCopy className="text-xl" />
          </span>
          <span className="text-xs font-normal">Pages</span>
        </Link>
      </li>
      <li className="relative flex-1">
        <div className="md:hidden">
          <Menu>
            <Menu.Button className="">
              <p className="hover:text-color-heading flex flex-col items-center justify-center gap-y-0.5">
                <span>
                  <MdOutlineShoppingBag className="text-xl" />
                </span>
                <span className="text-xs font-normal">Marketplace</span>
              </p>
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="fixed right-0 bottom-16 w-60 space-y-3 rounded-xl bg-base-300 p-3 shadow-xl dark:bg-dark-base-200">
                <Menu.Item>
                  <Link
                    href="/marketplace/stages"
                    className={`-left ${
                      path === '/marketplace/stages'
                        ? 'c-btn-left-primary'
                        : 'c-btn-left'
                    } w-full`}
                  >
                    Stages
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/marketplace/venues"
                    className={`-left ${
                      path === '/marketplace/venues'
                        ? 'c-btn-left-primary'
                        : 'c-btn-left'
                    } w-full`}
                  >
                    Venues
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/marketplace/sitemaps"
                    className={`-left ${
                      path === '/marketplace/sitemaps'
                        ? 'c-btn-left-primary'
                        : 'c-btn-left'
                    } w-full`}
                  >
                    Sitemaps
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/marketplace/avatar-clothing"
                    className={`-left ${
                      path === '/marketplace/avatar-clothing'
                        ? 'c-btn-left-primary'
                        : 'c-btn-left'
                    } w-full`}
                  >
                    Avatar Clothing
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/marketplace/in-game-items"
                    className={`-left ${
                      path === '/marketplace/in-game-items'
                        ? 'c-btn-left-primary'
                        : 'c-btn-left'
                    } w-full`}
                  >
                    In Game Items
                  </Link>
                </Menu.Item>
                <div className="border-t border-quarternary/20 pt-2 dark:border-quarternary/20">
                  <Menu.Item>
                    <Link
                      href="/marketplace/manage-assets"
                      className={`-left ${
                        path === '/marketplace/manage-assets'
                          ? 'c-btn-left-primary'
                          : 'c-btn-left'
                      } w-full`}
                    >
                      Manage Assets
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <Link
          href="/marketplace/stages"
          className="hover:text-color-heading hidden flex-col items-center justify-center gap-y-0.5 md:flex"
        >
          <span>
            <MdOutlineShoppingBag className="text-xl" />
          </span>
          <span className="text-xs font-normal">Marketplace</span>
        </Link>
      </li>
    </ul>
  );
}
