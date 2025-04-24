import Image from 'next/image';
import { format } from 'date-fns';
import {
  DirectMessage,
  UpdateDirectMessageMutation,
  UpdateDirectMessageMutationVariables,
} from 'services/types/generated';
import ReactionModal from 'src/modals/ReactionModal';
import { useMutation } from 'react-query';
import { updateDirectMessage } from 'services/directmessages.service';
import { Socket } from 'socket.io-client';

interface IMessageProps {
  socket: Socket;
  payload: DirectMessage;
  user: {
    avatar: string;
    sub: string;
  };
  adjacentSender: boolean;
  receiverProfilePic: string;
}

export default function Message({
  socket,
  payload,
  user,
  adjacentSender,
  receiverProfilePic,
}: IMessageProps) {
  // const queryClient = useQueryClient();
  const { content, senderId, sender, images } = payload;
  const regex =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
  const isSingleEmoji = content.length === 2 ? content.match(regex) : false;

  // const onSuccess = () => {
  //   queryClient.invalidateQueries(['dm', payload.dmId]);
  // };

  const { mutate, isLoading } = useMutation<
    UpdateDirectMessageMutation,
    unknown,
    UpdateDirectMessageMutationVariables
  >(updateDirectMessage, {
    mutationKey: 'add-reaction',
    // onSuccess,
  });

  const handleAddReaction = (emoji: string) => {
    socket.emit('c2s_reaction', {
      room: payload.dmId,
      payload: {
        emoji,
        messageId: payload.id,
      },
    });
    mutate({
      id: payload.id,
      dmId: payload.dmId,
      reactions: [...(payload.reactions || []), emoji],
    });
  };

  return (
    <div className={`flex gap-2 group md:gap-4`}>
      {!adjacentSender ? (
        <>
          <Image
            height={30}
            width={30}
            src={
              senderId === user.sub
                ? user.avatar
                : sender
                  ? sender?.avatar || ''
                  : receiverProfilePic
            }
            alt="Sender Avatar"
            className="rounded-full h-7 w-7 md:h-8 md:w-8"
          />
        </>
      ) : (
        <span className="block rounded-full h-7 w-7 md:h-8 md:w-8" />
      )}
      <div className="relative flex items-center flex-1 gap-2">
        <div
          className={`inline-block min-w-[200px] rounded-md rounded-tl-sm bg-base-200 p-2 pb-0 dark:bg-dark-base-200`}
        >
          <div
            className={`max-w-2xl rounded-lg px-1 text-base-content dark:text-dark-base-content`}
          >
            {images && (
              <div
                className={`grid gap-2 pb-2 ${
                  images.length === 1
                    ? 'grid-cols-1'
                    : 'grid-cols-1 md:grid-cols-2'
                }`}
              >
                {images.map((i) => (
                  <Image
                    height={400}
                    width={400}
                    quality={80}
                    className={`h-36 w-64 rounded-lg`}
                    key={i}
                    src={i}
                    alt="image"
                  />
                ))}
              </div>
            )}
            {isSingleEmoji ? (
              <p className="pt-2 text-5xl">{content}</p>
            ) : (
              <p className="font-normal">{content}</p>
            )}
            {payload?.createdAt && (
              <p className="w-full text-right text-[10px] opacity-40 pt-2">
                {format(new Date(payload?.createdAt), 'MMM d HH:mm')}
              </p>
            )}
            {Number(payload.reactions?.length) > 0 ? (
              <p className="absolute p-0.5 px-2 backdrop-blur-sm flex gap-0.5 text-sm left-1 rounded-full bg-base-300/60 dark:bg-dark-base-300/60 -bottom-2 border border-quarternary dark:border-dark-quarternary/20">
                {payload.reactions?.map((i) => (
                  <span key={i} className="block">
                    {i}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>
        <div className="relative z-30">
          <ReactionModal handleReaction={handleAddReaction} />
        </div>
      </div>
    </div>
  );
}
