import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { HiOutlineClipboard } from 'react-icons/hi';
import { StreamConfigurations } from 'services/types/generated';
import ConfirmationModal from 'src/modals/ConfirmationModal';
import { clipboard } from 'src/utils/clipboard';

type ClipboardBoxProps = {
  label: string;
  value: string;
  confidential?: boolean;
};

export function ClipboardBox({
  label,
  value,
  confidential = false,
}: ClipboardBoxProps) {
  const [showValue, setShowValue] = useState(!confidential);
  const toggleShowValue = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowValue((prev) => !prev);
  };
  return (
    <div className="flex-1 space-y-2">
      <p className="font-semibold">{label}</p>
      <div className="flex flex-row gap-2">
        <div className="relative flex-1">
          <input
            readOnly
            className="c-input"
            value={showValue ? value : '**** **** **** ****'}
          />
          {confidential && (
            <span className="absolute -translate-y-1/2 top-1/2 right-1">
              <button onClick={toggleShowValue}>
                {showValue ? (
                  <AiOutlineEyeInvisible className="text-xl text-red-400" />
                ) : (
                  <AiOutlineEye className="text-xl text-primary" />
                )}
              </button>
            </span>
          )}
        </div>
        <button
          onClick={() => clipboard(value)}
          className="flex items-center justify-center w-8 h-8 rounded cursor-pointer hover:bg-white/10"
        >
          <HiOutlineClipboard className="text-xl text-primary" />
        </button>
      </div>
    </div>
  );
}

type StreamDetailProps = {
  stream: StreamConfigurations;
  isDeleteStreamLoading: boolean;
  onDeleteStream: () => void;
};

export default function StreamDetail({
  stream,
  isDeleteStreamLoading,
  onDeleteStream,
}: StreamDetailProps) {
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] =
    useState(false);
  return (
    <div
      className="relative flex flex-col p-4 c-box gap-y-4"
      data-testid={`stream-${stream?.streamName}`}
    >
      <ConfirmationModal
        title="Are you sure you want to delete your stream key?"
        description="This action is irreversible."
        icon={<BsTrash className="text-red-400" />}
        isOpen={isDeleteConfirmationModalOpen}
        isLoading={isDeleteStreamLoading}
        setIsOpen={setIsDeleteConfirmationModalOpen}
        closeOnConfirm={false}
        onConfirm={onDeleteStream}
      />
      <div className="flex-1">
        <p className="text-lg font-semibold text-primary">
          {stream?.streamName}
        </p>
        <p>{stream?.streamType}</p>
      </div>
      <ClipboardBox
        label="RTMP URL"
        value="rtmp://stream.virtuoso.live/app"
        confidential={false}
      />
      <ClipboardBox
        label="Stream Token"
        value={stream?.streamKey || ''}
        confidential
      />
      {stream.event && (
        <Link href={`/events/${stream.event?.EventID}`}>
          <div className="flex items-center gap-2">
            <div className="h-8 overflow-hidden duration-200 transform rounded cursor-pointer w-14 hover:scale-105">
              <Image
                quality={100}
                height={30}
                width={60}
                src={
                  stream.event?.EventImages?.[0] ||
                  '/assets/images/temp-event.png'
                }
                alt="event"
                className="block object-cover w-full"
              />
            </div>
            <span>Pointing to {stream.event?.EventName}</span>
          </div>
        </Link>
      )}
      <div className="absolute top-4 right-4">
        <button
          data-testid="delete-stream-button"
          onClick={() => setIsDeleteConfirmationModalOpen(true)}
          className="flex items-center justify-center w-8 h-8 rounded cursor-pointer hover:bg-white/10"
        >
          <AiOutlineDelete className="text-lg text-red-300" />
        </button>
      </div>
    </div>
  );
}
