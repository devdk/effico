'use client';

import useSession from 'src/hooks/useSession';
import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useQuery } from 'react-query';
import { getPostById } from 'services/post.service';
import { GetPostByIdQuery, Post as PostType } from 'services/types/generated';
import ShareCard from 'src/cards/ShareCard';
import FeedPost from 'src/feed/FeedPost';
import PostSkeleton from 'src/placeholders/PostSkeleton';
import { useParams } from 'next/navigation';

export default function FeedPage() {
  const { session } = useSession();
  const params = useParams();
  const id = params?.id;

  const { isLoading, data: post } = useQuery<
    GetPostByIdQuery,
    unknown,
    PostType
  >([`post-${id}`, id, session?.user?.sub], getPostById, {
    select: (data: any) => data.posts?.items?.[0] as PostType,
  });

  if (isLoading)
    return (
      <div className="pt-5 c-container">
        <div className="grid grid-cols-12 md:gap-6">
          <section className="hidden md:col-span-3 md:block"></section>
          <section className="col-span-12 pb-24 space-y-4 md:col-span-6 md:space-y-6">
            <PostSkeleton />
          </section>
          <section className="sticky hidden md:col-span-3 md:block"></section>
        </div>
      </div>
    );

  return (
    <div className="pt-5 c-container">
      <div className="grid grid-cols-12 md:gap-6">
        <section className="hidden md:col-span-3 md:block">
          <div className="sticky space-y-6 top-20">
            <div className="overflow-hidden rounded-xl bg-[url('/assets/images/card-background.png')] bg-center bg-no-repeat">
              <div className="p-4 py-6 bg-primary/90">
                <div className="">
                  <div id="header" className="flex justify-end">
                    <HiOutlineDotsVertical className="text-xl" />
                  </div>
                  <div
                    id="body"
                    className="flex flex-col items-center py-5 pt-10 space-y-6"
                  >
                    <p className="text-5xl font-semibold text-white">71</p>
                    <p className="text-3xl text-white">Sunny</p>
                  </div>
                  <div className="pt-20 space-y-4 pb-14">
                    <p className="text-xl text-center text-white">
                      Sunday, 18th 2018
                    </p>
                    <p className="text-center text-white/80">
                      Sunday, 18th 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-12 pb-24 space-y-4 md:col-span-6 md:space-y-6">
          <FeedPost data={post} />
        </section>
        <section className="sticky hidden md:col-span-3 md:block">
          <ShareCard
            title="Share this Post"
            details={{
              title: post?.content,
              url: `https://app.virtuoso.live/feed/${post?.id}`,
            }}
          />
        </section>
      </div>
    </div>
  );
}
