import { Dialog } from '@headlessui/react';
import React from 'react';
import ProfileSidebar from './ProfileSidebar';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ProfileModal({ isOpen, setIsOpen }: ModalProps) {
  return (
    // <Dialog
    //   open={isOpen}
    //   onClose={() => setIsOpen && setIsOpen(false)}
    //   className="relative z-50"
    // >
    //   {/* The backdrop, rendered as a fixed sibling to the panel container */}
    //   <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

    //   {/* Full-screen container to center the panel */}
    //   <div className="fixed inset-0 p-4">
    //     {/* The actual dialog panel  */}
    //     <Dialog.Panel className="w-full h-full rounded">
    //       <ProfileSidebar setIsOpen={setIsOpen} isInModal={true} />

    //       {/* ... */}
    //     </Dialog.Panel>
    //   </div>
    // </Dialog>
    <></>
  );
}
