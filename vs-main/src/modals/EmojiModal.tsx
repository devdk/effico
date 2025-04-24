import { Dialog } from '@headlessui/react';
import EmojiPicker, { Theme } from 'emoji-picker-react';
import React from 'react';
import useTheme from 'src/hooks/useTheme';

type TEmojiModalProps = {
  handleOnEmojiClick: any;
  isOpen: boolean;
  setIsOpen: any;
};

export default function EmojiModal({
  handleOnEmojiClick,
  isOpen,
  setIsOpen,
}: TEmojiModalProps) {
  const theme = useTheme();

  return (
    <div className="">
      {isOpen && (
        <Dialog
          className="absolute left-4 bottom-16 md:left-96"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Panel className="c-scrollbar rounded-lg bg-base-200 shadow-2xl dark:bg-dark-base-200">
            <div id="vs-emojis">
              <EmojiPicker
                height={345}
                autoFocusSearch={false}
                className="!max-w-[280px] !bg-transparent md:!max-w-xs"
                previewConfig={{
                  showPreview: false,
                }}
                onEmojiClick={handleOnEmojiClick}
                theme={theme as Theme}
              />
            </div>
          </Dialog.Panel>
        </Dialog>
      )}
    </div>
  );
}
