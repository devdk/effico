import { Dialog } from '@headlessui/react';
import React from 'react';
import Loading from 'src/common/Loading';

type ModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  setIsOpen: (e: boolean) => void;
  icon: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
  closeOnConfirm?: boolean;
};

const ConfirmationModal = ({
  isOpen,
  setIsOpen,
  icon,
  description,
  title,
  onCancel,
  onConfirm,
  isLoading = false,
  closeOnConfirm = true,
}: ModalProps) => {
  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    onCancel && onCancel();
    setIsOpen(false);
  };

  const handleConfirm = (e: React.MouseEvent) => {
    e.preventDefault();
    onConfirm && onConfirm();
    closeOnConfirm && setIsOpen(false);
  };

  const modifyChildren = (child: any) => {
    const className = child.props.className + ' h-28 w-28';

    const props = {
      className,
    };

    return React.cloneElement(child, props);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/20"
        aria-hidden="true"
      />
      <div
        data-testid="confirmation-modal"
        className="fixed inset-0 flex items-center justify-center p-4 shadow-2xl"
      >
        <Dialog.Panel className="w-full max-w-md p-6 space-y-4 c-box">
          <div className="relative mx-auto my-10 h-28 w-28">
            {modifyChildren(icon)}
          </div>
          <h2 className="font-semibold text-center">{title}</h2>
          <p className="pb-8 text-center">{description}</p>

          <div className="flex justify-end gap-x-4">
            <button
              onClick={handleCancel}
              data-testid="cancel-button"
              className="c-btn "
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              data-testid="confirm-button"
              className="c-btn-primary btn-error"
            >
              <Loading alt="Confirm" isLoading={isLoading} />
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;
