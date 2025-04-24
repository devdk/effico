import React from 'react';
import { toast, Toaster, ToastBar, Renderable } from 'react-hot-toast';
import { HiOutlineCheck, HiOutlineInbox, HiOutlineX } from 'react-icons/hi';

const icons: Record<string, Renderable> = {
  success: (
    <span className="inline-block rounded-full bg-primary/80 p-0.5">
      <HiOutlineCheck className="rounded-full text-xs text-white" />
    </span>
  ),
  error: (
    <span className="inline-block rounded-full bg-red-500/80 p-0.5">
      <HiOutlineX className="rounded-full text-xs text-white" />
    </span>
  ),
  blank: (
    <span className="inline-block rounded-full bg-quarternary/80 p-0.5 dark:bg-dark-quarternary/60">
      <HiOutlineInbox className="rounded-full text-xs text-white" />
    </span>
  ),
};

export default function VirtuosoToaster() {
  return (
    <Toaster
      reverseOrder={false}
      position="bottom-right"
      toastOptions={{
        className: 'c-toast',
        success: {
          className: 'c-toast-success',
        },
        error: {
          className: 'c-toast-error',
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="flex items-center text-base">
              {t.type === 'blank' ? icon : icons[t.type]}
              {message}
              {t.type !== 'loading' && (
                <button onClick={() => toast.dismiss(t.id)}>
                  <HiOutlineX />
                </button>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
}
