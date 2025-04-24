import React from 'react';
import { Maybe, Post as PostType } from 'services/types/generated';
import Post from 'src/post';

interface ITimelineProps {
  post: Maybe<PostType>;
  pageProfileImg?: string | null | undefined;
}

export default function Timeline({ post, pageProfileImg }: ITimelineProps) {
  return (
    <div className="flex gap-x-4">
      <div className="relative hidden w-[46px] md:block">
        <div className="z-10 h-[46px] w-[46px] overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary">
          <img
            src={pageProfileImg || '/assets/images/page-card-avatar.png'}
            className="block object-cover w-full h-full"
            alt=""
          />
        </div>
        <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
      </div>
      <div className="flex-1 py-2">
        <Post data={post} />
      </div>
    </div>
  );
}
