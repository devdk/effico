'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useSession from 'src/hooks/useSession';
import { useQuery } from 'react-query';
import { ListFriendsQuery } from 'services/types/generated';
import { Friend } from 'src/profile';
import { getFriendsList } from 'services/friend.service';
import useSocket from 'src/hooks/useSocket';
import DMPopup from './DMPopup';
import { MdOutlineClose, MdOutlinePushPin, MdPushPin } from 'react-icons/md';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { HiUserPlus } from 'react-icons/hi2';
import { Avatar } from 'src/components/custom/avatar';

export interface IDMInfo {
  id: string;
  avatar?: string;
  name: string;
}

export default function ChatPopup() {
  const [chatListExpanded, setChatListExpanded] = useState(false);
  const [pinnedChat, setPinnedChat] = useState<IDMInfo>();
  const [activeChat, setActiveChat] = useState<IDMInfo>();
  const { session, loading } = useSession();
  const sub = session?.user?.sub;

  const { isLoading: isFriendListLoading, data: friendList } = useQuery<
    ListFriendsQuery,
    unknown,
    Friend[]
  >(['user-friends', sub], getFriendsList, {
    select: (data) => (data?.friends?.items ?? []) as Friend[],
    enabled: !loading,
  });

  return (
    <div className="fixed bottom-0 z-50 hidden gap-4 right-4 md:flex">
      {pinnedChat && (
        <ActiveChat
          dmInfo={pinnedChat}
          isPinned
          onPinToggle={() => setPinnedChat(undefined)}
          onClose={() => setPinnedChat(undefined)}
        />
      )}
      {activeChat && (
        <ActiveChat
          dmInfo={activeChat}
          isPinned={false}
          onPinToggle={() => {
            if (pinnedChat) {
              toast.error(
                'Please unpin the current chat before pinning another.'
              );
            } else {
              setPinnedChat(activeChat);
              setActiveChat(undefined);
            }
          }}
          onClose={() => setActiveChat(undefined)}
        />
      )}
      <div className="flex flex-col justify-end c-scrollbar">
        <div className="p-6 py-4 border shadow-md bg-dark-base-100 rounded-t-2xl min-w-80 border-border">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar
                size="xs"
                name={session?.user?.name}
                src={session?.user?.avatar}
              />
              <span className="font-semibold">Messaging</span>
            </div>
            <button
              className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10"
              onClick={() => setChatListExpanded((o) => !o)}
            >
              {chatListExpanded ? (
                <HiChevronDown className="w-6 h-6" />
              ) : (
                <HiChevronUp className="w-6 h-6" />
              )}
            </button>
          </div>
          {chatListExpanded && (
            <div className="py-2 overflow-y-auto max-h-[500px] c-scrollbar">
              {(isFriendListLoading || loading) &&
                Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex py-3 gap-x-3">
                    <div className="w-10 h-10 rounded-full animate-pulse bg-base-200 dark:bg-dark-base-200" />
                    <div className="flex-1 space-y-2">
                      <div className="w-1/2 h-5 animate-pulse bg-base-200 dark:bg-dark-base-200" />
                      <div className="w-3/4 h-5 animate-pulse bg-base-200 dark:bg-dark-base-200" />
                    </div>
                  </div>
                ))}
              {!isFriendListLoading &&
                !loading &&
                friendList?.map((f) => (
                  <div
                    key={f.friendId}
                    className="flex py-2 rounded-sm cursor-pointer gap-x-3 hover:bg-base-200 dark:hover:bg-dark-base-200"
                    onClick={() =>
                      setActiveChat({
                        id: f.friendId,
                        avatar: f.friendDetails?.avatar,
                        name: f.friendDetails?.name,
                      })
                    }
                  >
                    <Avatar
                      size="xs"
                      name={f.friendDetails?.name}
                      src={f.friendDetails?.avatar}
                    />
                    <div className="flex-1 text-sm">
                      <h3 className="font-medium">
                        {f.friendDetails?.name || 'Unnamed'}
                      </h3>
                      <p className="text-xs">Last msg here</p>
                    </div>
                  </div>
                ))}
              {!isFriendListLoading && !loading && friendList?.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <h3 className="font-semibold text-center">
                    You have no friends yet!
                  </h3>
                  <p className="max-w-xs text-xs text-center">
                    Make friends to start a conversation. Visit their profile
                    and hit the <HiUserPlus className="inline-block text-sm" />{' '}
                    button.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface ActiveChatProps {
  dmInfo: IDMInfo;
  isPinned: boolean;
  onPinToggle: () => void;
  onClose: () => void;
}

export function ActiveChat({
  dmInfo,
  isPinned,
  onPinToggle,
  onClose,
}: ActiveChatProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, [dmInfo.id]);

  const socket = useSocket({ dmId: dmInfo.id, type: 'chat' });

  return (
    <div className="flex flex-col justify-end">
      <div className="border shadow-md bg-dark-base-100 rounded-t-2xl min-w-80 border-border">
        <div className="flex justify-between px-6 py-4">
          <p className="flex items-center gap-2">
            <Avatar size="xs" name={dmInfo.name} src={dmInfo.avatar} />
            <span className="font-semibold">{dmInfo.name}</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10"
              onClick={() => setExpanded((o) => !o)}
            >
              {expanded ? (
                <HiChevronDown className="w-6 h-6" />
              ) : (
                <HiChevronUp className="w-6 h-6" />
              )}
            </button>
            <button
              className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10"
              onClick={onPinToggle}
            >
              {isPinned ? (
                <MdPushPin className="w-5 h-5" />
              ) : (
                <MdOutlinePushPin className="w-5 h-5" />
              )}
            </button>
            <button
              className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10"
              onClick={onClose}
            >
              <MdOutlineClose className="w-4 h-4" />
            </button>
          </div>
        </div>
        {expanded && socket && (
          <div className="min-h-96 flex flex-col relative max-w-[400px] overflow-x-hidden c-scrollbar">
            <DMPopup socket={socket} dmId={dmInfo.id} type="chat" />
          </div>
        )}
      </div>
    </div>
  );
}
