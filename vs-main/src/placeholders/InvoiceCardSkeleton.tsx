import React from 'react';

const InvoiceCardSkeleton: React.FC = () => {
  return (
    <div className="flex max-w-4xl gap-6">
      <div className="p-6 overflow-hidden text-base shadow-lg w-80 rounded-xl dark:text-white animate-pulse bg-base-200 dark:bg-dark-base-200">
        <div className="mb-8">
          <span className="block w-32 h-8 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
        </div>
        <div className="mb-4">
          <span className="block w-48 h-4 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
        </div>
        <div className="flex mb-4">
          <span className="block w-24 h-6 rounded-full animate-pulse bg-emerald-500"></span>
        </div>
        <div className="mb-4">
          <span className="block w-32 h-4 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
          <span className="block w-24 h-4 mt-1 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-hidden text-base shadow-lg animate-pulse w-80 rounded-xl dark:text-white bg-base-200 dark:bg-dark-base-200">
        <div className="flex w-full h-6 overflow-hidden text-xs text-black rounded-xl bg-base-100 dark:bg-dark-base-100 animate-pulse">
          <div className="flex items-center justify-center h-full px-1 bg-emerald-500"></div>
        </div>
        <div className="py-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-emerald-500 animate-pulse"></span>
            <span className="block w-24 h-4 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-3 h-3 bg-white animate-pulse"></span>
            <span className="block w-24 h-4 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCardSkeleton;
