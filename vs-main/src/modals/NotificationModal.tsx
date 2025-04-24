import { Menu } from '@headlessui/react';
import NotificationItem from 'src/fragments/NotificationItem';
import useSession from 'src/hooks/useSession';
import { RiNotification3Line } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { listUserNotifications } from 'services/notifications.service';
import {
  ListUserNotificationsQuery,
  NotificationConnection,
} from 'services/types/generated';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';

export default function NotificationModal() {
  const { session } = useSession();
  const { loggedIn } = useIsLoggedIn();
  let { isLoading, data } = useQuery<
    ListUserNotificationsQuery,
    unknown,
    NotificationConnection
  >(['notifications', session?.user?.sub], listUserNotifications, {
    select: (data) => data.notifications as NotificationConnection,
    enabled: loggedIn,
  });

  return (
    <Menu>
      <div className="relative">
        <Menu.Button>
          <div className="relative">
            <div className="hover:text-color-heading flex flex-col items-center justify-center gap-y-0.5">
              <span>
                <MdOutlineNotificationsNone className="text-2xl md:text-xl" />
              </span>
              <span className="hidden text-xs font-normal md:block">
                Notifications
              </span>
            </div>
          </div>
        </Menu.Button>
        <Menu.Items className="max-w-lg">
          <div className="fixed top-12 right-2 left-2 mt-4 divide-y divide-base-100/50 rounded-xl bg-base-300 p-4 py-2 shadow-2xl dark:divide-dark-base-100/50 dark:bg-dark-base-300 md:absolute md:left-auto md:top-full md:w-[600px]">
            {loggedIn && isLoading && <p className="py-8">loading...</p>}
            {loggedIn && data?.items?.length ? (
              data?.items?.map((i) => <NotificationItem key={i?.id} data={i} />)
            ) : (
              <div className="flex flex-col items-center gap-y-6 py-20">
                <RiNotification3Line className="text-7xl text-white/20" />
                <p className="text-white/60">No notifications yet!</p>
              </div>
            )}
          </div>
        </Menu.Items>
      </div>
    </Menu>
  );
}
