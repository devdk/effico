import { Popover } from '@headlessui/react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import React from 'react';
import { HiOutlineFaceSmile } from 'react-icons/hi2';
import useTheme from 'src/hooks/useTheme';

type TEmojiModalProps = {
  handleReaction: any;
};

export default function ReactionModal({ handleReaction }: TEmojiModalProps) {
  const theme = useTheme();

  const handleReactionClick = (data: any, close: any) => {
    // console.log(data.emoji);
    handleReaction(data.emoji);
    close();
  };

  return (
    <Popover className="">
      {({ open, close }) => (
        <>
          <Popover.Button>
            <HiOutlineFaceSmile className="text-lg transition-all opacity-30 md:opacity-0 group-hover:opacity-100" />
          </Popover.Button>
          {open && (
            <Popover.Panel>
              <div id="vs-emojis" className="absolute right-0 md:left-0">
                <EmojiPicker
                  searchDisabled={true}
                  previewConfig={{
                    showPreview: false,
                  }}
                  reactionsDefaultOpen={true}
                  onReactionClick={(data) => handleReactionClick(data, close)}
                  className="!max-w-[280px] !bg-transparent md:!max-w-xs"
                  theme={theme as Theme}
                />
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
  );
}
