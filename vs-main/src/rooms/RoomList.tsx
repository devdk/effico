import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { listChatRooms } from 'services/rooms.service';
import { ChatRooms, ListChatRoomsQuery } from 'services/types/generated';
import CreateRoomModal from 'src/modals/CreateRoomModal';

export default function RoomList() {
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(false);
  const params = useParams();
  const slug = params?.slug;

  // ROOM LIST
  const { isLoading: isChatRoomsLoading, data: chatRooms } = useQuery<
    ListChatRoomsQuery,
    unknown,
    Array<ChatRooms>
  >(['rooms'], listChatRooms, {
    select: (data) => (data?.rooms?.items ?? []) as Array<ChatRooms>,
  });

  return (
    <div
      id="room_list"
      className={`${
        slug ? 'hidden md:block' : 'block'
      } bg-base-300 pt-3 dark:bg-dark-base-300 md:h-full md:w-60 xl:w-80`}
    >
      {isCreateRoomModalOpen && (
        <CreateRoomModal
          isOpen={isCreateRoomModalOpen}
          setIsOpen={setIsCreateRoomModalOpen}
        />
      )}
      <div className="flex items-center justify-between px-5 pb-2">
        <h3 className="font-semibold text-heading dark:text-dark-heading">
          Rooms
        </h3>
        <button
          onClick={() => setIsCreateRoomModalOpen(true)}
          className="c-btn-icon-primary hover:scale-105 transition-all !h-7 !w-7 !rounded-full"
        >
          <HiOutlinePlus className="text-sm" />
        </button>
      </div>
      <div className="space-y-0.5">
        {isChatRoomsLoading &&
          Array.from(Array(8).keys()).map((i) => (
            <div key={i}>
              <div className="flex px-4 py-3 gap-x-3 scroll-auto">
                <div className="w-10 h-10 overflow-hidden rounded-full animate-pulse bg-base-200 dark:bg-dark-base-200"></div>
                <div className="flex-1 space-y-2">
                  <p className="w-1/2 h-5 animate-pulse bg-base-200 dark:bg-dark-base-200"></p>
                  <p className="w-3/4 h-5 animate-pulse bg-base-200 dark:bg-dark-base-200"></p>
                </div>
              </div>
            </div>
          ))}
        {!isChatRoomsLoading &&
          chatRooms?.map((i) => (
            <RoomListTab slug={String(slug)} key={i.id} tab={i} />
          ))}
      </div>
    </div>
  );
}

function RoomListTab({ tab, slug }: { tab: ChatRooms; slug: string }) {
  return (
    <Link
      href={`/rooms/${tab?.id}`}
      key={tab?.id}
      className={`flex gap-x-3 scroll-auto px-4 py-3 hover:bg-base-200
    dark:hover:bg-dark-base-200 ${slug === tab.id ? 'bg-base-200 dark:bg-dark-base-200' : ''}`}
    >
      <div className="w-10 h-10 overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
        <img src={tab?.avatar || ''} alt="" className="block w-full h-full" />
      </div>
      <div className="flex-1 text-sm">
        <h3 className="font-medium text-white">
          {tab?.title || 'Untitled Room'}
        </h3>
        <p className="text-xs">Last seen 8:45</p>
      </div>
    </Link>
  );
}
