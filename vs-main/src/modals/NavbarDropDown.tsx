'use client';

import { Menu, Switch, Transition } from '@headlessui/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Avatar } from 'src/components/custom/avatar';
import { dropdownItems, INavDropDown } from 'src/config/navbar.config';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import useSession from 'src/hooks/useSession';

export default function NavbarDropDown() {
  const [lightModeEnabled, setLightModeEnabled] = useState(false);
  const { session } = useSession();

  const { loggedIn, navigateToLogin } = useIsLoggedIn();

  useEffect(() => {
    const changeThemeOnLoad = () => {
      if (!localStorage) return;
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('light');
          setLightModeEnabled(true);
        } else {
          document.documentElement.classList.add('dark');
          setLightModeEnabled(false);
        }
      }
    };
    changeThemeOnLoad();
  }, []);

  const handleThemeChange = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setLightModeEnabled(false);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setLightModeEnabled(true);
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setLightModeEnabled(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setLightModeEnabled(true);
      }
    }
  };

  return (
    <Menu as="div">
      {({ open }) => (
        <div className="relative" id="menu">
          <Menu.Button className="flex flex-col items-center justify-center">
            <Avatar
              size="xxs"
              name={session?.user?.name}
              src={session?.user?.avatar}
            />
            <span
              data-testid="navbar-dropdown-btn"
              className="items-center hidden gap-x-1 md:flex"
            >
              <span className="text-xs font-normal">
                {session?.user?.name?.split(' ')[0] ?? 'Guest'}
              </span>
              <span>
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </span>
            </span>
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* Mark this component as `static` */}
            <Menu.Items
              static
              className="c-divide c-box absolute top-full right-0 mt-4 w-full min-w-[300px] rounded-xl border border-base-300 shadow-2xl dark:border-dark-base-300"
            >
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer rounded-t-xl">
                <h3 className="font-bold color-heading">Light Mode</h3>
                <Switch
                  checked={lightModeEnabled}
                  onChange={handleThemeChange}
                  className={`${
                    lightModeEnabled
                      ? 'bg-primary'
                      : 'bg-quarternary dark:bg-dark-quarternary'
                  } relative inline-flex h-7 w-12 items-center rounded-full`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      lightModeEnabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>
              <Menu.Item as="div">
                <div
                  data-testid="navbar-dropdown"
                  className="px-5 py-3 cursor-pointer hover:bg-base-100 dark:hover:bg-dark-base-300"
                >
                  <Link
                    className="flex w-full gap-x-3"
                    data-testid="profile-link"
                    href={
                      loggedIn
                        ? `/profile/${session?.user?.sub}`
                        : '/auth/login'
                    }
                  >
                    {session?.user?.avatar ? (
                      <span className="block h-[46px] w-[46px] overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary">
                        <Image
                          height={60}
                          width={60}
                          quality={80}
                          src={session?.user?.avatar}
                          alt="avatar"
                          className="block w-full h-full"
                        />
                      </span>
                    ) : (
                      <span className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                        <AiOutlineUser className="text-xl" />
                      </span>
                    )}
                    <span className="flex-1 block text-sm">
                      <span className="block font-medium color-heading">
                        {session?.user?.name || 'Guest'}
                      </span>
                      <span className="block">
                        {session?.user?.email || 'Login to view your Profile'}
                      </span>
                    </span>
                  </Link>
                </div>
              </Menu.Item>
              {loggedIn &&
                dropdownItems.map((i: INavDropDown) => (
                  <Menu.Item as="div" key={i.id}>
                    <Link
                      href={i.link}
                      className="block px-5 py-3 cursor-pointer hover:bg-base-100 dark:hover:bg-dark-base-300"
                    >
                      <span className="block font-medium color-heading ">
                        {i.identifier}
                      </span>
                      <span>{i.description}</span>
                    </Link>
                  </Menu.Item>
                ))}
              <button
                className="flex flex-col items-start w-full px-5 py-3 cursor-pointer rounded-b-xl hover:bg-base-100 dark:hover:bg-dark-base-300"
                onClick={
                  loggedIn
                    ? async (e) => {
                        await signOut();
                        navigateToLogin(e);
                      }
                    : navigateToLogin
                }
              >
                <span className="block font-medium color-heading ">
                  {loggedIn ? 'Logout' : 'Login'}
                </span>
                <span>{loggedIn ? 'Logout of' : 'Login to'} your account</span>
              </button>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
