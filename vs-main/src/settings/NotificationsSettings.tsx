'use client';

import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import {
  MdMobileFriendly,
  MdNotificationsOff,
  MdOutlineChevronLeft,
} from 'react-icons/md';

export default function NotificationsSettings() {
  const [tab, setTab] = useState(0);
  const [posts, setPosts] = useState(false);
  const [events, setEvents] = useState(false);
  const [likes, setLikes] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [email, setEmail] = useState(false);

  return (
    <>
      {tab === 0 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <section className="flex items-center justify-between pb-5 border-b border-border">
            <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
              Notification Settings
            </h2>
          </section>
          <section className="flex flex-col gap-10 py-6 md:flex-row">
            <div className="flex-1">
              <div className="py-4 space-y-6">
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(1)}
                >
                  <div>
                    <MdNotificationsOff className="text-3xl" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-bold color-heading">
                      Mute Notifications
                    </div>
                    <div>Mute your notifications for new posts and events</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(2)}
                >
                  <div>
                    <MdMobileFriendly className="text-3xl" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-bold color-heading">
                      Preferences
                    </div>
                    <div>Tell your prefrences of notifications</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm space-y-6">
              <div className="p-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
                <div className="h-40"></div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold color-heading">
                    Help Center
                  </h3>
                  <p>
                    Having Trouble? Please search our Help Center for a quick
                    answer to your problem.
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
                <div className="h-40"></div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold color-heading">
                    24/7 Support
                  </h3>
                  <p>
                    Our Help Center did’t help? Please Contact our 24/7 Coustmer
                    Assistance hotline.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {tab === 1 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <div
            className="flex items-center text-lg font-semibold cursor-pointer color-heading"
            onClick={() => setTab(0)}
          >
            <HiArrowLongLeft className="inline mr-2 text-2xl" /> Notifications
          </div>
          <form className="mt-9">
            <div className="w-full space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label
                    htmlFor=""
                    className="text-base font-bold color-heading"
                  >
                    For New posts
                  </label>
                  <p>Mute Notifications for new posts</p>
                </div>
                <div>
                  <Switch
                    checked={posts}
                    onChange={() => setPosts((v) => !v)}
                    className={`${
                      posts
                        ? 'bg-primary'
                        : 'bg-quarternary dark:bg-dark-quarternary'
                    } relative inline-flex h-7 w-12 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        posts ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label
                    htmlFor=""
                    className="text-base font-bold color-heading"
                  >
                    For New Events
                  </label>
                  <p>Mute Notifications for new events</p>
                </div>
                <div>
                  <Switch
                    checked={events}
                    onChange={() => setEvents((v) => !v)}
                    className={`${
                      events
                        ? 'bg-primary'
                        : 'bg-quarternary dark:bg-dark-quarternary'
                    } relative inline-flex h-7 w-12 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        events ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label
                    htmlFor=""
                    className="text-base font-bold color-heading"
                  >
                    For Likes and comments
                  </label>
                  <p>Mute Notifications for likes,comments</p>
                </div>
                <div>
                  <Switch
                    checked={likes}
                    onChange={() => setLikes((v) => !v)}
                    className={`${
                      likes
                        ? 'bg-primary'
                        : 'bg-quarternary dark:bg-dark-quarternary'
                    } relative inline-flex h-7 w-12 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        likes ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
      {tab === 2 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <div
            className="flex items-center text-lg font-semibold cursor-pointer color-heading"
            onClick={() => setTab(0)}
          >
            <HiArrowLongLeft className="inline mr-2 text-2xl" /> Preferences
          </div>
          <form className="mt-9">
            <div className="w-full space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label
                    htmlFor=""
                    className="text-base font-bold color-heading"
                  >
                    Push Notifications
                  </label>
                  <p>Turn on or off push notifications</p>
                </div>
                <div>
                  <Switch
                    checked={notifications}
                    onChange={() => setNotifications((v) => !v)}
                    className={`${
                      notifications
                        ? 'bg-primary'
                        : 'bg-quarternary dark:bg-dark-quarternary'
                    } relative inline-flex h-7 w-12 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        notifications ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label
                    htmlFor=""
                    className="text-base font-bold color-heading"
                  >
                    Email Notifications
                  </label>
                  <p>Turn on or off Email notifications</p>
                </div>
                <div>
                  <Switch
                    checked={email}
                    onChange={() => setEmail((v) => !v)}
                    className={`${
                      email
                        ? 'bg-primary'
                        : 'bg-quarternary dark:bg-dark-quarternary'
                    } relative inline-flex h-7 w-12 items-center rounded-full`}
                  >
                    <span className="sr-only">Enable notifications</span>
                    <span
                      className={`${
                        email ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-5 w-5 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
