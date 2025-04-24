import { format } from 'date-fns';
import React from 'react';

const InvoiceCard: React.FC<any> = ({ invoice }) => {
  const line2 = Math.floor(
    Number(
      invoice.lines.data[1].amount /
        invoice.lines.data.reduce((i: any, j: any) => i + j.amount / 100, 0)
    )
  );

  const line1 = Math.floor(
    Number(
      invoice.lines.data[0].amount /
        invoice.lines.data.reduce((i: any, j: any) => i + j.amount / 100, 0)
    )
  );

  return (
    <div className="flex max-w-4xl gap-6">
      <div className="p-6 overflow-hidden text-base shadow-lg w-80 rounded-xl dark:text-white bg-base-200 dark:bg-dark-base-200">
        <div className="mb-8">
          <p className="text-6xl font-extrabold">
            ${Number(invoice.total) / 100}
          </p>
        </div>
        <div className="mb-4">
          <p className="">{invoice.account_name}</p>
        </div>
        <div className="flex mb-4">
          <p className="flex items-center justify-center p-1 px-4 font-bold text-black rounded-full bg-emerald-500">
            Upcoming
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium opacity-40">
            {format(new Date(invoice.period_start), 'MMM d')} -{' '}
            {format(new Date(invoice.period_end), 'MMM d')}
          </p>
        </div>
      </div>
      <div className="flex-1 p-6 overflow-hidden text-base shadow-lg w-80 rounded-xl dark:text-white bg-base-200 dark:bg-dark-base-200">
        <div className="flex w-full h-6 overflow-hidden text-xs text-black rounded-xl bg-base-100 dark:bg-dark-base-100">
          <div
            style={{
              width: `
                ${line1}%`,
            }}
            className="flex items-center justify-center h-full px-1 bg-emerald-500"
          >
            {!isNaN(line1) && `${line1}%`}
          </div>
          <div
            style={{
              width: `${line2}%`,
            }}
            className="flex items-center justify-center h-full px-1 bg-white"
          >
            {!isNaN(line2) && `${line2}%`}
          </div>
        </div>
        <div className="py-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-emerald-500"></span>
            <p className="">
              <span>Livestream</span>: $
              {Number(invoice.lines.data[0].amount / 100)}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-white"></span>
            <p className="">
              <span>Storage</span>: $
              {Number(invoice.lines.data[1].amount / 100)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
