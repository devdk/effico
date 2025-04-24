import { format, isAfter, isToday } from 'date-fns';
import Link from 'next/link';
import {
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { VirtuosoTickets } from 'services/types/generated';
import { price } from 'src/utils/formatting';

interface ITicketCardProps {
  data: VirtuosoTickets;
}

export default function Ticket({ data }: ITicketCardProps) {
  return (
    <div>
      <div className="relative grid grid-cols-12 shadow rounded-xl bg-gray-50 dark:bg-dark-base-200">
        <div
          className={`col-span-12 px-10 py-12 space-y-5 border-b-2 border-dashed rounded-t-xl  bg-base-300  dark:bg-dark-base-300 md:col-span-7 md:rounded-l-xl md:rounded-t-none md:border-b-0 md:border-r-2 ${data.Type === 'vip' ? 'border-green-500/60 dark:border-green-500/60' : 'border-quarternary dark:border-dark-quarternary/80'}`}
        >
          <div className="space-y-1">
            <h3 className="">TICKET ID</h3>
            <p className="uppercase color-heading">{data.TicketID}</p>
          </div>
          <div>
            <div className="flex flex-row items-center text-3xl font-semibold capitalize text-heading dark:text-dark-heading">
              {data.Event?.EventName}
              {data?.Type === 'vip' && (
                <div className="p-1 px-3 ml-2 text-xs text-white bg-green-700 rounded-full h-fit dark:text-white">
                  VIP
                </div>
              )}
            </div>
            <p className="mt-2 text-base">
              Price{' '}
              <span className="font-bold text-green-500">
                {price(
                  (data.Type === 'vip'
                    ? data.Event?.vipPrice
                    : data.Event?.Price) || 0
                )}
              </span>
            </p>
          </div>
          <div className="">
            <Link href={`/events/${data.EventID}`} className="c-btn-outline">
              Event Details
            </Link>
          </div>
        </div>
        <div className="col-span-12 px-10 py-12 space-y-6 md:col-span-5">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="flex items-center">
                <HiOutlineCalendar className="inline-block mr-2 text-lg text-primary" />
                Scheduled on
              </h3>
              <div className="space-y-4">
                {/* Date Column */}
                <div className="space-y-4 color-heading">
                  {data.Event?.EventDate
                    ? format(new Date(data.Event.EventDate as string), 'PPPP')
                    : 'No date available'}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="flex items-center">
                <HiOutlineClock className="inline-block mr-2 text-lg text-primary" />
                Time
              </h3>
              {/* Time Column */}
              <div className="text-lg text-primary">
                {data.Event?.StartTime} - {data.Event?.EndTime}
              </div>
            </div>

            {/* Status Column */}
            <div className="space-y-2">
              {data.Event?.EventDate ? (
                isToday(new Date(data.Event.EventDate as string)) ? (
                  <p className="inline p-1 px-3 text-white bg-blue-500 rounded-full">
                    Today
                  </p>
                ) : isAfter(
                    new Date(),
                    new Date(data.Event.EventDate as string)
                  ) ? (
                  <p className="inline p-1 px-3 text-white bg-red-500 rounded-full">
                    Expired
                  </p>
                ) : (
                  <p className="inline p-1 px-3 text-white bg-green-500 rounded-full">
                    Upcoming
                  </p>
                )
              ) : (
                <p>No status available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
