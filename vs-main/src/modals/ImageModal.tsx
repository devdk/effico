import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import React, { useState } from 'react';

type TImageModalProps = {
  src: string;
  className: string;
  alt: string;
  height?: number;
  width?: number;
};

export default function ImageModal({
  src,
  className,
  alt,
  height = 500,
  width = 900,
}: TImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Image
        quality={100}
        height={height}
        width={width}
        src={src}
        className={className}
        alt={alt}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Dialog className="" open={isOpen} onClose={() => setIsOpen(false)}>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <Dialog.Panel className="rounded- mx-auto max-w-2xl bg-base-300 dark:bg-dark-base-300 md:max-w-4xl">
              <img
                src={src}
                className="block h-full w-full object-cover"
                alt=""
                onClick={() => setIsOpen(true)}
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
}
