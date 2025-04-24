'use client';

import useSession from 'src/hooks/useSession';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiOutlinePencil, HiOutlineTrash, HiOutlineUser } from 'react-icons/hi';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getDirectMessages } from 'services/directmessages.service';
import { deleteChatRoom } from 'services/rooms.service';
import {
  ChatRooms,
  DeleteChatRoomsMutation,
  DeleteChatRoomsMutationVariables,
  GetChatRoomQuery,
  GetProfileQuery,
  User,
} from 'services/types/generated';
import { getProfile } from 'services/user.service';
import Loading from 'src/common/Loading';
import CreateRoomModal from 'src/modals/CreateRoomModal';

const ProfileSidebar = ({
  dmId,
  type,
}: {
  dmId: string;
  type?: 'room' | 'chat';
}) => {
  const [isEditRoomModalOpen, setisEditRoomModalOpen] = useState(false);
  const { session } = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();

  const { isLoading, data } = useQuery<GetProfileQuery, unknown, User>(
    ['get-user', dmId, session?.user?.sub],
    getProfile,
    {
      select: (data) => data.user as User,
      enabled: type != 'room',
    }
  );

  const { isLoading: isRoomLoading, data: roomData } = useQuery<
    GetChatRoomQuery,
    unknown,
    ChatRooms
  >(['room', dmId], getDirectMessages, {
    select: (data) => data.room as ChatRooms,
    enabled: type == 'room',
  });

  const onSuccess = () => {
    queryClient.invalidateQueries(['rooms']);
    router.push('/rooms');
  };

  const { mutate: deleteRoom, isLoading: isDeleteLoading } = useMutation<
    DeleteChatRoomsMutation,
    unknown,
    DeleteChatRoomsMutationVariables
  >(deleteChatRoom, {
    mutationKey: 'delete-chat-room',
    onSuccess,
  });

  if (isLoading || isRoomLoading)
    return (
      <div
        className={`hidden h-full w-96
    border-b-8 bg-base-200 dark:border-b-dark-base-100 dark:bg-dark-base-200 md:block`}
      >
        <div className="flex flex-col gap-6 px-4 pt-16">
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 overflow-hidden rounded-full animate-pulse bg-base-100 dark:bg-dark-base-300"></div>
            <div className="w-40 h-5 mt-4 animate-pulse bg-base-100 dark:bg-dark-base-300"></div>
          </div>

          <div className="mt-4 space-y-4">
            <div className="w-10 h-5 animate-pulse bg-base-100 dark:bg-dark-base-300"></div>

            <div className="w-full border rounded-lg border-quarternary dark:border-dark-quarternary/40">
              <div className="flex flex-col p-4">
                <div className="w-full h-5 animate-pulse bg-base-100 dark:bg-dark-base-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={`${'hidden h-full w-80 xl:block'} border-l border-quarternary bg-base-200 dark:border-dark-quarternary/20 dark:bg-dark-base-200`}
    >
      {data && (
        <div className="flex flex-col gap-6 px-4 pt-16">
          <div className="flex flex-col items-center justify-center">
            <img
              src={data?.avatar || ''}
              alt="Sender Avatar"
              className="w-24 h-24 mr-2 rounded-full"
            />
            <h3 className="pt-4 text-xl font-semibold">{data?.name}</h3>
            <div className="flex items-center justify-center gap-2 pt-6">
              <Link
                className="c-btn-icon-primary"
                href={`/profile/${data.sub}`}
              >
                <HiOutlineUser />
              </Link>
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <p className="mr-auto font-semibold">Bio</p>
            <p className="">{data?.about}</p>
          </div>
        </div>
      )}
      {roomData && (
        <>
          <div className="flex-1 w-full h-24">
            <Image
              height={300}
              width={600}
              src={roomData?.cover || ''}
              alt="avatar"
              className="object-cover w-full h-full mr-2"
            />
          </div>
          <div className="flex flex-col gap-6 px-4 pt-6">
            {isEditRoomModalOpen && (
              <CreateRoomModal
                isOpen={isEditRoomModalOpen}
                setIsOpen={setisEditRoomModalOpen}
                data={roomData}
                editMode={true}
              />
            )}
            <div className="flex flex-col items-center justify-center">
              <Image
                height={200}
                width={200}
                src={roomData?.avatar || ''}
                alt="avatar"
                className="w-24 h-24 mr-2 rounded-full"
              />
              <h3 className="pt-4 text-xl font-semibold">{roomData?.title}</h3>
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  onClick={() => setisEditRoomModalOpen(true)}
                  className="c-btn-icon-primary"
                >
                  <HiOutlinePencil />
                </button>
                <button
                  onClick={() => deleteRoom({ id: roomData.id })}
                  className="c-btn-icon-danger"
                >
                  <Loading
                    alt={<HiOutlineTrash />}
                    isLoading={isDeleteLoading}
                  />
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p className="mr-auto font-semibold">Bio</p>
              <p className="">{roomData?.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileSidebar;
