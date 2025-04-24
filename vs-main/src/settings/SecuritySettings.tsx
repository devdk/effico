'use client';

import { useState } from 'react';
import { HiOutlineLink } from 'react-icons/hi';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { RiArrowLeftRightLine } from 'react-icons/ri';

export default function SecuritySettings() {
  const [tab, setTab] = useState(0);

  return (
    <>
      {tab === 0 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <section className="flex items-center justify-between pb-5 border-b border-border">
            <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
              Security and Privacy
            </h2>
          </section>
          <section className="flex gap-10 py-6">
            <div className="flex-1">
              <div className="py-4 space-y-6">
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(1)}
                >
                  <div>
                    <HiOutlineLink className="text-3xl" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-bold color-heading">
                      Two-factor Authentication
                    </div>
                    <div>Protect account using two-factor authentication</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(2)}
                >
                  <div>
                    <RiArrowLeftRightLine className="text-3xl" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-bold color-heading">
                      Connected apps, accounts and premissions
                    </div>
                    <div>
                      Information about the apps you connected and devices you
                      login
                    </div>
                  </div>
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
            <HiArrowLongLeft className="inline mr-2 text-2xl" /> Two-Factor
            Authentication
          </div>
        </div>
      )}
      {tab === 2 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <div className="flex justify-between">
            <div
              className="flex items-center text-lg font-semibold cursor-pointer color-heading"
              onClick={() => setTab(0)}
            >
              <HiArrowLongLeft className="inline mr-2 text-2xl" /> Connected
              Apps
            </div>
            <div>
              <button className="c-btn-primary">Add Account</button>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col p-4 rounded-lg gap-x-8 gap-y-2 bg-base-200 dark:bg-dark-base-200">
              <div className="flex gap-4">
                <img
                  src="/assets/logo/google.png"
                  alt="google"
                  className="block w-8 h-8"
                />
                <div className="flex-1">
                  <h3 className="font-semibold h2">Google</h3>
                  <p className="text-xs text-emerald-500">Connected</p>
                </div>
              </div>
              <div className="space-y-2">
                <p>wadewarren@gmail.com</p>
                <button className="c-btn-danger-sm">Disconnect</button>
              </div>
            </div>
            <div className="flex flex-col p-4 rounded-lg gap-x-8 gap-y-2 bg-base-200 dark:bg-dark-base-200">
              <div className="flex gap-4">
                <img
                  src="/assets/logo/metamask.png"
                  alt="google"
                  className="block w-8 h-8"
                />
                <div className="flex-1">
                  <h3 className="font-semibold h2">Metamask</h3>
                  <p className="text-xs text-emerald-500">Connected</p>
                </div>
              </div>
              <div className="space-y-2">
                <p>wadewarren@gmail.com</p>
                <button className="c-btn-danger-sm">Disconnect</button>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
