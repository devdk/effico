'use client';

import { format } from 'date-fns';
import Link from 'next/link';
import { useState } from 'react';
import {
  HiOutlineShare,
  HiOutlineTicket,
  HiOutlineTrash,
  HiPencil,
} from 'react-icons/hi';
import { MdOutlineChevronLeft } from 'react-icons/md';
import {
  DeleteVirtuosoEventMutation,
  DeleteVirtuosoEventMutationVariables,
  VirtuosoEvents,
} from 'services/types/generated';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import ImageModal from 'src/modals/ImageModal';
import ShareModal from 'src/modals/ShareModal';
import Player from './Player';
import { useMutation, useQueryClient } from 'react-query';
import { deleteEvent } from 'services/events.service';
import useIsPageAdmin from 'src/hooks/useIsPageAdmin';
import { useRouter } from 'next/navigation';
import { price } from 'src/utils/formatting';
import { Button } from 'src/components/ui/button';
import ConfirmationModal from 'src/modals/ConfirmationModal';
import { BsTrash } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { Avatar } from 'src/components/custom/avatar';
import { ClipboardBox } from 'src/settings/StreamDetail';

// 1) Helper: safely parse timestamps -> Date
function safeToDate(val?: number | string | null): Date | null {
  if (!val) return null;
  const ms = typeof val === 'number' ? val : parseInt(val, 10);
  if (isNaN(ms)) return null;
  const d = new Date(ms);
  return isNaN(d.getTime()) ? null : d;
}

// 2) Helper: conditionally format the start/end date range
// e.g. If same day -> "Mar 25th 2025, 10:00am - 2:00pm"
//      Else       -> "Mar 25th 2025, 10:00am - Mar 26th 2025, 2:00pm"
function formatEventRange(start: Date | null, end: Date | null): string {
  if (!start && !end) return '';
  // If only start is valid
  if (start && !end) {
    return format(start, 'MMM do yyyy, h:mma');
  }
  // If only end is valid
  if (!start && end) {
    return format(end, 'MMM do yyyy, h:mma');
  }

  // Both are valid
  const sameDay = start?.toDateString() === end?.toDateString();
  if (sameDay) {
    // show date once, then the two times
    return `${format(start as any, 'MMM do yyyy, h:mma')} - ${format(end as any, 'h:mma')}`;
  } else {
    // Different days
    return `${format(start as any, 'MMM do yyyy, h:mma')} - ${format(
      end as any,
      'MMM do yyyy, h:mma'
    )}`;
  }
}

export default function Event({ data }: { data: VirtuosoEvents }) {
  const [
    isDeleteEventConfirmationModalOpen,
    setIsDeleteEventConfirmationModalOpen,
  ] = useState(false);

  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: deleteVirtuosoEvent, isLoading: isDeleteLoading } =
    useMutation<
      DeleteVirtuosoEventMutation,
      unknown,
      DeleteVirtuosoEventMutationVariables
    >(deleteEvent, {
      mutationKey: 'delete-event',
      onSuccess: () => {
        queryClient.invalidateQueries(['list-all-events']);
        setIsDeleteEventConfirmationModalOpen(false);
        toast.success('Event deleted successfully!');
        router.push('/events');
      },
    });

  const handleDeleteEvent = () => {
    if (!data?.EventID) {
      toast.error('Something went wrong!');
      return;
    }
    deleteVirtuosoEvent({
      EventId: data?.EventID,
    });
  };

  const { isAdmin } = useIsPageAdmin(data?.EventCreatorID);

  return (
    <>
      {isDeleteEventConfirmationModalOpen && (
        <ConfirmationModal
          title="Are you sure you want to delete this event?"
          description="This action is irreversible."
          icon={<BsTrash className="text-red-400" />}
          isOpen={isDeleteEventConfirmationModalOpen}
          isLoading={isDeleteLoading}
          setIsOpen={setIsDeleteEventConfirmationModalOpen}
          closeOnConfirm={false}
          onConfirm={handleDeleteEvent}
        />
      )}
      <section
        className="bg-center bg-no-repeat bg-cover h-60 md:h-96"
        style={{
          backgroundImage: `url(${
            data?.venue?.VenueProfileCover || '/assets/images/event-bg.png'
          })`,
        }}
      >
        <div className="hidden h-full md:block">
          <EventDetails
            isTicketPurchased={!!data?.isTicketOwnedByUser}
            data={data}
          />
        </div>
      </section>
      <div className="c-container md:hidden">
        <EventDetails
          isTicketPurchased={!!data?.isTicketOwnedByUser}
          data={data}
        />
      </div>
      <section className="-my-20 c-container pb-28 md:my-0 md:py-20 md:pt-60">
        <div className="p-6 divide-quarternary dark:divide-dark-quarternary md:grid md:grid-cols-12 md:divide-x md:p-0">
          <div className="space-y-10 md:col-span-6 md:col-start-2 md:pr-20">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-heading dark:text-dark-heading">
                Event Details
              </h2>
              <p className="leading-relaxed">{data?.EventDescription}</p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-heading dark:text-dark-heading">
                Events, Photos and Videos
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {data?.EventImages?.map((i: any) => (
                  <div
                    className="overflow-hidden rounded-xl bg-base-200 dark:bg-dark-base-200"
                    key={i}
                  >
                    <ImageModal
                      height={200}
                      width={400}
                      src={i ?? '/assets/images/temp-photos-tab.png'}
                      alt="photo"
                      className="block object-cover w-full h-full cursor-pointer rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-10 space-y-6 md:col-span-4 md:pt-0 md:pl-20">
            {data?.showCreator && (
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 overflow-hidden rounded-full bg-base-200 dark:bg-dark-base-200">
                  <Link href={`/creator/${data?.EventCreatorPageId}`}>
                    <img
                      src={
                        data?.creatorPage?.CreatorImage ||
                        '/assets/images/temp-event.png'
                      }
                      className="block w-full h-full"
                      alt="creator"
                    />
                  </Link>
                </div>
                <div className="flex-1">
                  <h3>Creator Page</h3>
                  <p className="text-xl color-heading">
                    <Link href={`/creator/${data?.creatorPage?.CreatorID}`}>
                      {data?.creatorPage?.CreatorName}
                    </Link>
                  </p>
                </div>
              </div>
            )}
            {data?.showOrganizer && (
              <div className="flex items-center gap-4">
                <Avatar
                  size="xl"
                  name={data?.eventOwner?.name || 'User'}
                  link={`/profile/${data?.eventOwner?.sub}`}
                  src={data?.eventOwner?.avatar}
                />
                <div className="flex-1">
                  <h3>Organized by</h3>
                  <p className="text-xl color-heading">
                    <Link href={`/profile/${data?.eventOwner?.sub}`}>
                      {data?.eventOwner?.name}
                    </Link>
                  </p>
                </div>
              </div>
            )}
            {data?.isRealEvent && (
              <div className="p-4 space-y-4 border rounded-xl">
                <h3 className="font-semibold">In-Person Event Tickets</h3>
                <Button asChild variant="outline" className="w-full">
                  <a href={data?.RealTicketLink || ''} target="_blank">
                    Get In-Person Ticket
                  </a>
                </Button>
              </div>
            )}
            {isAdmin && (
              <div className="p-4 pb-8 space-y-4 border border-border rounded-xl">
                <h3 className="c-title-sm">Management</h3>
                <div className="flex flex-col gap-4">
                  <Button asChild variant="outline">
                    <Link href={`/events/edit/${data?.EventID}`}>
                      <HiPencil />
                      Edit Event
                    </Link>
                  </Button>
                  <Button
                    onClick={() => setIsDeleteEventConfirmationModalOpen(true)}
                    variant="outline"
                  >
                    <HiOutlineTrash className="text-rose-500" />
                    <span className="text-rose-500">Delete Event</span>
                  </Button>
                </div>
              </div>
            )}
            {isAdmin && (
              <div className="p-4 pb-8 space-y-4 border border-border rounded-xl">
                <h3 className="c-title-sm">Stream Keys</h3>
                <div className="flex flex-col gap-4">
                  {data?.StageStreamMaps?.map((map) => {
                    return (
                      <ClipboardBox
                        confidential
                        label={map?.stageName || ''}
                        key={map?.stageName}
                        value={map?.streamID || ''}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {isAdmin && (
        <section className="grid grid-cols-12 pb-40 c-container">
          <Player
            defaultPlaybackId={data?.defaultPlaybackId || ''}
            eventId={data?.EventID}
          />
        </section>
      )}
    </>
  );
}

interface IEventDetailsProps {
  data: VirtuosoEvents | undefined;
  isTicketPurchased: boolean;
}

function EventDetails({ data, isTicketPurchased }: IEventDetailsProps) {
  const router = useRouter();
  const { loggedIn, navigateToLogin } = useIsLoggedIn();
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const [isVipticket, setIsVipTicket] = useState<boolean>(false);

  const handleBuyTicketClick = () => {
    router.push(
      `/buy?id=${data?.EventID}&type=${isVipticket ? 'event-vip' : 'event'}`
    );
  };

  // Safely parse numeric timestamps
  const startDate = safeToDate(data?.StartTime);
  const endDate = safeToDate(data?.EndTime);

  // Format them conditionally: same day vs different days
  const eventDateRange = formatEventRange(startDate, endDate);

  return (
    <div className="relative h-full c-container">
      <div className="bottom-0 left-0 right-0 grid-cols-12 px-6 -translate-y-28 md:absolute md:grid md:translate-y-1/2 md:px-0">
        <div className="relative grid grid-cols-1 col-span-10 col-start-2 border shadow border-border rounded-xl bg-gray-50 dark:bg-dark-base-200 md:grid-cols-12">
          <div id="back_btn" className="absolute -top-10">
            <Link
              href="/events"
              className="flex items-center justify-center text-base font-bold"
            >
              <MdOutlineChevronLeft className="inline text-2xl" /> Events
            </Link>
          </div>
          <div className="px-10 py-12 space-y-5 border-b-2 border-dashed rounded-t-2xl border-quarternary bg-base-300 dark:border-dark-quarternary/80 dark:bg-dark-base-300 md:col-span-7 md:rounded-l-2xl md:rounded-tr-none md:border-b-0 md:border-r-2">
            <div>
              {data?.isLive && (
                <p className="z-20 inline-block px-4 mb-4 text-xs font-medium text-white bg-green-600 rounded-full shadow-lg top-2 left-2">
                  Live
                </p>
              )}
              <div className="flex flex-row items-center text-3xl font-semibold capitalize text-heading dark:text-dark-heading">
                {data?.EventName}{' '}
                {data?.isVipEntryAllowed && (
                  <div className="p-1 px-2 ml-4 text-xs font-thin text-white bg-green-700 rounded-full dark:text-white">
                    VIP entry allowed
                  </div>
                )}
              </div>
              <p className="mt-2 text-base">
                {eventDateRange} {data?.timezone}
              </p>
            </div>

            {data?.VenueLocation && (
              <div className="space-y-1">
                <h3>Location</h3>
                <p className="color-heading">{data?.VenueLocation}</p>
              </div>
            )}

            <div className="space-y-1">
              <button
                onClick={() => setIsShareModoalOpen(true)}
                className="p-2 border rounded-full border-quarternary hover:scale-105 dark:border-dark-quarternary"
              >
                <HiOutlineShare className="text-lg text-white" />
              </button>
              <ShareModal
                twitterShare={{
                  title: data?.EventName,
                  url: `https://app.virtuoso.live/events/${data?.EventID}`,
                }}
                title="Share this Event"
                isOpen={isShareModoalOpen}
                setIsOpen={setIsShareModoalOpen}
              />
            </div>
          </div>

          {/* Right side */}
          <div className="px-10 py-12 space-y-4 md:col-span-5">
            <div>
              <h2 className="text-3xl font-semibold text-heading dark:text-dark-heading">
                Stream Event
              </h2>
              <p className="mt-2 text-base">
                {eventDateRange} {data?.timezone}
              </p>
            </div>
            <div>
              <p>Buy ticket for this event now</p>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="text-base color-heading">Price:</p>
              <p className="text-2xl font-bold text-primary">
                {price(isVipticket ? data?.vipPrice : data?.Price)}
              </p>
            </div>

            {data?.isVipEntryAllowed && (
              <div className="flex gap-x-6">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="true"
                    id="General"
                    onChange={() => setIsVipTicket(false)}
                    checked={!isVipticket}
                    className="border-border"
                  />
                  <label htmlFor="General" className="text-sm cursor-pointer">
                    General
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="false"
                    onChange={() => setIsVipTicket(true)}
                    checked={isVipticket}
                    id="VIP"
                    className="border-border"
                  />
                  <label htmlFor="VIP" className="text-sm cursor-pointer">
                    VIP
                  </label>
                </div>
              </div>
            )}

            {isTicketPurchased && (
              <button className="inline-flex items-center justify-center c-btn">
                Ticket Purchased
              </button>
            )}
            {!isTicketPurchased && (
              <button
                className="inline-flex items-center justify-center gap-2 c-btn-primary"
                onClick={loggedIn ? handleBuyTicketClick : navigateToLogin}
              >
                <HiOutlineTicket />
                {Number(data?.Price) == 0 ? 'Get' : 'Purchase'} Ticket
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
