import { Menu, Transition } from '@headlessui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useMutation, useQueryClient } from 'react-query';
import { deleteNotification } from 'services/notifications.service';
import {
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables,
  Maybe,
  Notification,
} from 'services/types/generated';

interface INotificationOptionsDropdownProps {
  notification: Maybe<Notification>;
}

export default function NotificationOptionsDropdown({
  notification,
}: INotificationOptionsDropdownProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteN } = useMutation<
    DeleteNotificationMutation,
    unknown,
    DeleteNotificationMutationVariables
  >(deleteNotification, {
    mutationKey: 'delete-notification',
    onSettled: () => {
      queryClient.invalidateQueries(['notifications']);
    },
  });

  const handleDelete = () => {
    deleteN({
      id: notification?.id || '',
    });
  };

  return (
    <Menu>
      {({ open }) => (
        <div className="relative z-20">
          <Menu.Button className="">
            <HiOutlineDotsVertical className="text-xl" />
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
              className="c-divide-300 c-box absolute top-full right-0 w-full min-w-[180px] overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-2xl dark:border-dark-base-200 dark:bg-dark-base-200"
            >
              <Menu.Item>
                <button
                  onClick={handleDelete}
                  className="block w-full cursor-pointer px-5 py-3 text-left hover:bg-base-300 dark:hover:bg-dark-base-300"
                >
                  <span className="color-heading font-medium ">
                    Delete this Notification
                  </span>
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
