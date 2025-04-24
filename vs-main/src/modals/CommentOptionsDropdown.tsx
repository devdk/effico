import { Menu, Transition } from '@headlessui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

// interface ICommentOptionsDropdown {}

export default function CommentOptionsDropdown() {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative z-20">
          <Menu.Button className="">
            <HiOutlineDotsVertical className="mt-1 text-lg" />
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
              className="c-divide-300 c-box absolute top-full right-0 mt-4 w-full min-w-[240px] overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-2xl dark:border-dark-base-300 dark:bg-dark-base-100"
            >
              <Menu.Item>
                <div className="block cursor-pointer px-5 py-3 hover:bg-base-300 dark:hover:bg-dark-base-300">
                  <h3 className="color-heading font-medium ">
                    Report this Comment
                  </h3>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
