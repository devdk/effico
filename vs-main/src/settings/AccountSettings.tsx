'use client';

import { useState } from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineVpnKey } from 'react-icons/md';
import AddressManagement from './AddressManagement';
import ChangePassword from './ChangePassword';
import { HiArrowLongLeft } from 'react-icons/hi2';

export default function AccountSettings() {
  const [tab, setTab] = useState(0);

  return (
    <>
      {tab === 0 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
            <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
              Account Settings
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
                    <HiOutlineUser className="text-3xl" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-semibold color-heading">
                      Address
                    </div>
                    <div>Add, delete or update your addresses.</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(2)}
                >
                  <div>
                    <MdOutlineVpnKey className="text-3xl" />
                  </div>
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-semibold color-heading">
                      Change Password
                    </div>
                    <div>Change password at any time</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {tab === 1 && <AddressManagement setTab={setTab} />}
      {tab === 2 && <ChangePassword setTab={setTab} />}
      {tab === 3 && (
        <div className="flex-1 py-8 mx-auto max-w-7xl">
          <div
            className="flex items-center text-lg font-semibold cursor-pointer color-heading"
            onClick={() => setTab(0)}
          >
            <HiArrowLongLeft className="inline mr-2 text-2xl" /> Deactivate your
            account
          </div>
          <form className="mt-9">
            <div className="max-w-xl space-y-2">
              <h2 className="text-xl font-bold color-heading">
                Are you sure you really want to deactivate your account ?
              </h2>
              <p className="text-base">
                Note: This action cannot be undone once confirm the task
              </p>
            </div>
            <div className="w-full max-w-lg gap-8 mt-8">
              <div className="mb-4">
                <label
                  htmlFor="currentPassword"
                  className="block mb-2 text-sm font-medium text-gray-300 uppercase"
                >
                  enter password
                </label>
                <input
                  type="password"
                  className="c-input"
                  placeholder="******"
                />
              </div>
              <div className="flex justify-end gap-x-4">
                <button className="c-btn">Cancel</button>
                <button className="c-btn-primary">Confirm</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
