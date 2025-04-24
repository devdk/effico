import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { HiTrash } from 'react-icons/hi';
import { Contact, Maybe } from 'services/types/generated';
import Loading from 'src/common/Loading';
import { Button } from 'src/components/ui/button';
import ConfirmationModal from 'src/modals/ConfirmationModal';

interface AddressCardProps {
  handleDeleteAddress: (index: number) => void;
  index: number;
  isLoading: boolean;
  contact: Maybe<Contact>;
}

export default function AddressCard({
  contact,
  handleDeleteAddress,
  index,
  isLoading,
}: AddressCardProps) {
  const [isDeleteConfirmationModalOpen, setisDeleteConfirmationModalOpen] =
    useState(false);

  return (
    <div
      className="p-4 px-6 space-y-1 border rounded-xl min-w-48 md:min-w-60 bg-base-200 dark:bg-dark-base-200 border-border"
      key={contact?.address?.postal_code}
    >
      <ConfirmationModal
        title="Are you sure you want to delete this address?"
        description="This action is irreversible."
        icon={<BsTrash className="text-red-400" />}
        isOpen={isDeleteConfirmationModalOpen}
        isLoading={isLoading}
        setIsOpen={setisDeleteConfirmationModalOpen}
        closeOnConfirm={false}
        onConfirm={() => handleDeleteAddress(index)}
      />
      <p>{contact?.name}</p>
      <p>{contact?.phone}</p>
      <p>{contact?.address?.city}</p>
      <p>{contact?.address?.country}</p>
      <p className="text-primary">{contact?.address?.line1}</p>
      <p>{contact?.address?.line2}</p>
      <p>{contact?.address?.postal_code}</p>
      <p className="">{contact?.address?.state}</p>
      <div className="flex justify-end">
        <Button
          onClick={() => setisDeleteConfirmationModalOpen(true)}
          disabled={isLoading}
          type="button"
          variant="error"
          size="icon"
        >
          <Loading alt={<HiTrash className="text-lg" />} isLoading={false} />
        </Button>
      </div>
    </div>
  );
}
