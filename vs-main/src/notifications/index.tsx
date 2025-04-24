'use client';

import React, { useEffect, useState } from 'react';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import { listUserNotifications } from 'services/notifications.service';
import {
  ListUserNotificationsQuery,
  NotificationConnection,
} from 'services/types/generated';
import NotificationItem from 'src/fragments/NotificationItem';
import NotificationItemSkeleton from 'src/placeholders/NotificationItemSkeleton';
import { RiNotification3Line } from 'react-icons/ri';

export default function Notifications() {
  const { session } = useSession();
  const { loggedIn } = useIsLoggedIn();
  const [permission, setPermission] = useState<
    'default' | 'denied' | 'granted'
  >('default');

  useEffect(() => {
    setPermission(Notification.permission);
  }, []);

  const requestNotificationPermission = async () => {
    try {
      const result = await Notification.requestPermission();
      setPermission(result);
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  let { isLoading, data } = useQuery<
    ListUserNotificationsQuery,
    unknown,
    NotificationConnection
  >(['notifications', session?.user?.sub], listUserNotifications, {
    select: (data) => data.notifications as NotificationConnection,
    enabled: loggedIn,
  });

  return (
    <div className="grid min-h-screen grid-cols-12 pb-20 c-container gap-x-4 gap-y-4 md:py-5">
      <div className="col-span-12 space-y-4 md:col-span-3">
        <section className="hidden md:col-span-3 md:block">
          <div className="sticky space-y-6 top-20">
            <div className="overflow-hidden rounded-xl bg-[url('https://virtuoso-public.s3.amazonaws.com/events/77292838-39dc-4509-a03a-3ea78eaa8d74/images/salvatore-andrea-santacroce-wGICoyAhEs4-unsplash.jpg')] bg-center bg-no-repeat">
              <div className="p-4 py-6 bg-primary/90">
                <div className="">
                  <div id="header" className="flex justify-end"></div>
                  <div
                    id="body"
                    className="flex flex-col items-center py-5 pt-10 space-y-6"
                  >
                    <p className="text-5xl font-semibold text-white">
                      <RiNotification3Line
                        className={`text-6xl ${
                          permission === 'default' ? 'animate-bounce' : ''
                        }`}
                      />
                    </p>
                    <p className="font-bold text-center text-white">
                      {permission === 'default'
                        ? 'Enable Browser Notifications'
                        : 'Browser Notifications enabled'}
                    </p>
                  </div>
                  <div className="flex items-center justify-center pb-14">
                    {permission === 'default' && (
                      <button
                        onClick={requestNotificationPermission}
                        className="c-btn"
                      >
                        Enable
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="hidden p-2 px-2 font-medium bg-white rounded-xl sm:p-4 sm:px-3 md:block">
          Manage your notification settings
          <br />
          <Link href="/profile">
            <a className="text-blue-500">View Settings</a>
          </Link>
        </div> */}
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="p-1 space-y-1 bg-base-300 dark:bg-dark-base-200 md:rounded-xl">
          {!isLoading && Number(data?.items?.length) < 1 && (
            <div className="flex flex-col items-center py-20 gap-y-6 md:py-60">
              <RiNotification3Line className="text-7xl text-white/20" />
              <p className="text-white/60">No notifications yet!</p>
            </div>
          )}
          {isLoading &&
            Array.from(Array(10).keys()).map((i) => (
              <NotificationItemSkeleton key={i} />
            ))}
          {!isLoading &&
            data?.items?.map((i) => <NotificationItem data={i} key={i?.id} />)}
        </div>
      </div>
      <div className="col-span-12 space-y-4 md:col-span-3">
        <div className="p-4 py-8 bg-base-300 dark:bg-dark-base-200 md:rounded-xl">
          <div className="relative flex justify-center py-10 text-3xl font-bold text-primary">
            #INFINITY50
          </div>
          <h2 className="py-4 text-xl font-bold text-center text-yellow-500">
            Get 50% off!
          </h2>
          <p className="text-sm text-center text-gray-500">
            On your first Purchase!
          </p>
        </div>
      </div>
    </div>
  );
}
