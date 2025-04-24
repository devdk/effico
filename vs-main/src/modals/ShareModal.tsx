import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { HiCheck, HiClipboard } from 'react-icons/hi';
import { useMutation, useQueryClient } from 'react-query';
import {
  UpdateSharesMutation,
  UpdateSharesMutationVariables,
} from 'services/types/generated';
import { updateShares } from 'services/post.service';

type TModalProps = {
  isOpen: boolean;
  title?: string;
  description?: string;
  setIsOpen: (e: boolean) => void;
  icon?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  isLoading?: boolean;
  closeOnConfirm?: boolean;
  twitterShare?: any;
  whatsappShare?: any;
  shares?: number;
  sharesData?: any;
};

const ShareModal = ({
  isOpen,
  setIsOpen,
  description,
  title,
  twitterShare,
  sharesData,
}: TModalProps) => {
  const [copied, setCopied] = useState(false);
  const queryClient = useQueryClient();

  const onUpdateShareSuccess = (newData: any) => {
    // console.log({ newData });

    // queryClient.setQueryData(['comments', data?.id], (old: any) => {
    //   const oldItems = old?.comments?.items || [];
    //   const items = [{ ...newData.newComment }, ...oldItems];
    //   // console.log({ newData, oldItems, items });
    //   return {
    //     ...old,
    //     comments: {
    //       ...old?.comments,
    //       items,
    //     },
    //   };
    // });

    // TODO
    queryClient.invalidateQueries('author-posts');
    queryClient.invalidateQueries('feed');
    queryClient.invalidateQueries('venue');
    queryClient.invalidateQueries('creator');
    sharesData?.id && queryClient.invalidateQueries(`post-${sharesData?.id}`);
  };

  const onUpdateShareError = (err: any) => {
    // console.log({ err });
  };

  const { mutate } = useMutation<
    UpdateSharesMutation,
    unknown,
    UpdateSharesMutationVariables
  >(updateShares, {
    mutationKey: 'update-shares',
    onSuccess: onUpdateShareSuccess,
    onError: onUpdateShareError,
  });

  function copyToClipboard() {
    navigator.clipboard.writeText(twitterShare['url']);
    setCopied(true);
  }

  const handleClose = () => {
    // console.log(sharesData);

    setIsOpen(false);
    sharesData?.id &&
      mutate({
        ...sharesData,
        shares: sharesData.shares + 1,
      });
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/60"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4 shadow-2xl">
        <Dialog.Panel className="w-full max-w-lg p-6 space-y-4 c-box">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-center p">{description}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <TwitterShareButton {...twitterShare} className="h-10 md:h-auto">
              <TwitterIcon className="w-full h-full rounded-full" />
            </TwitterShareButton>
            <WhatsappShareButton {...twitterShare} className="h-10 md:h-auto">
              <WhatsappIcon className="w-full h-full rounded-full" />
            </WhatsappShareButton>
            <LinkedinShareButton {...twitterShare} className="h-10 md:h-auto">
              <LinkedinIcon className="w-full h-full rounded-full" />
            </LinkedinShareButton>
            <FacebookShareButton {...twitterShare} className="h-10 md:h-auto">
              <FacebookIcon className="w-full h-full rounded-full" />
            </FacebookShareButton>
            <RedditShareButton {...twitterShare} className="h-10 md:h-auto">
              <RedditIcon className="w-full h-full rounded-full" />
            </RedditShareButton>
            <EmailShareButton {...twitterShare} className="h-10 md:h-auto">
              <EmailIcon className="w-full h-full rounded-full" />
            </EmailShareButton>
          </div>
          <div className="pt-4 space-y-4">
            <h3 className="font-bold">Or copy the URL</h3>
            <div className="flex gap-4">
              <input
                type="text"
                value={twitterShare['url']}
                className="c-input"
                readOnly
              />
              <button onClick={copyToClipboard} className="c-btn-primary !px-4">
                {copied ? (
                  <HiCheck className="text-xl" />
                ) : (
                  <HiClipboard className="text-xl" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-x-4">
            <button onClick={handleClose} className="c-btn ">
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ShareModal;
