import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { VirtuosoPageFollowConnection } from 'services/types/generated';
import { Avatar } from 'src/components/custom/avatar';

interface IPageCardProps {
  id?: string;
  title?: string;
  description?: string;
  cover?: string;
  avatar?: string;
  pageType: string;
  followerCount?: number;
  followers?: VirtuosoPageFollowConnection;
}

const returnFollowerNumberToMap = (followers: number | undefined | null) => {
  // console.log({ followers });
  if (!followers) return 'No Members';
  if (followers === 0) return 'No Members';
  if (followers === 1) return '1 Member';
  if (followers >= 1) return `${followers} Members`;
};

export default function PageCard({
  id,
  title,
  description,
  cover,
  avatar,
  pageType,
  followerCount,
  followers,
}: IPageCardProps) {
  return (
    <>
      <Link
        href={`/${pageType}/${id}`}
        className="overflow-hidden border rounded-xl bg-base-200 dark:bg-dark-base-200 border-border"
      >
        <div className="w-full overflow-hidden aspect-w-4 aspect-h-2 bg-base-300 dark:bg-dark-base-300">
          <Image
            height={400}
            width={600}
            quality={100}
            src={cover || '/assets/images/page-card-cover.png'}
            className="block object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="flex flex-col p-4" id="content">
          <p className="text-xs tracking-wider uppercase">{pageType + ''}</p>
          <div className="flex gap-4 pt-4">
            <div className="relative overflow-hidden rounded-full w-14 h-14 bg-base-300 dark:bg-dark-base-300">
              <Image
                quality={80}
                height={100}
                width={100}
                src={avatar || '/assets/images/page-card-avatar.png'}
                className="block object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-lg capitalize color-heading">
                {title || 'Fast Pizza'}
              </h3>
              <p className="line-clamp-2">
                {description ||
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-base-content dark:text-dark-base-content/60">
              {returnFollowerNumberToMap(followerCount)}
            </p>
            <div className="flex">
              {followers?.items?.slice(0, 4)?.map((i) => (
                <Link
                  key={i?.userId}
                  href={`/profile/${i?.userId}`}
                  className="w-8 h-8 -ml-2 overflow-hidden transform rounded-full cursor-pointer bg-base-100 outline outline-1 outline-offset-1 outline-base-300 hover:scale-105 dark:bg-dark-base-100 dark:outline-dark-base-300"
                >
                  <Avatar
                    size="xs"
                    name={i?.user?.name}
                    link={`/profile/${i?.user?.sub || ''}`}
                    src={i?.user?.avatar}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
