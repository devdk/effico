import React, { useState } from 'react';
import { HiCheck, HiClipboard } from 'react-icons/hi';
import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

type TShareCardProps = {
  title?: string;
  description?: string;
  details?: any;
  whatsappShare?: any;
};

export default function ShareCard({
  description,
  title,
  details,
  whatsappShare,
}: TShareCardProps) {
  const [copied, setCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(details['url']);
    setCopied(true);
  }

  return (
    <div className="rounded-xl bg-base-200 p-5 dark:bg-dark-base-200">
      <h2 className="text-base font-bold">{title}</h2>
      <p className="p text-center">{description}</p>
      <div className="flex flex-wrap gap-4 pt-4">
        <TwitterShareButton {...details} className="h-8">
          <TwitterIcon className="h-full w-full rounded-full" />
        </TwitterShareButton>
        <WhatsappShareButton {...details} className="h-8">
          <WhatsappIcon className="h-full w-full rounded-full" />
        </WhatsappShareButton>
        <LinkedinShareButton {...details} className="h-8">
          <LinkedinIcon className="h-full w-full rounded-full" />
        </LinkedinShareButton>
        <FacebookShareButton {...details} className="h-8">
          <FacebookIcon className="h-full w-full rounded-full" />
        </FacebookShareButton>
        <RedditShareButton {...details} className="h-8">
          <RedditIcon className="h-full w-full rounded-full" />
        </RedditShareButton>
        <EmailShareButton {...details} className="h-8">
          <EmailIcon className="h-full w-full rounded-full" />
        </EmailShareButton>
      </div>
      <div className="space-y-4 pt-4">
        <h3 className="text-xs font-bold">Or copy the URL</h3>
        <div className="flex gap-4">
          <input
            type="text"
            value={details['url']}
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
    </div>
  );
}
