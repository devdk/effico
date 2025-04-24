import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { FaCheck, FaCross } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

export default function OptionsMenu({
  markAsRead,
  markAsUnread,
  unread,
  id,
}: any) {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="ml-1 inline-flex h-5 max-h-5 w-5">
          <HiDotsVertical className="h-5 w-5 cursor-pointer" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-secondary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={
                      unread ? () => markAsRead(id) : () => markAsUnread(id)
                    }
                  >
                    {active ? (
                      <FaCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <FaCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    {unread ? 'Mark as Read' : 'Mark as Unread'}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-secondary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FaCross className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <FaCross className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    Cancel
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
