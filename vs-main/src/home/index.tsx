'use client';

import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { PiMusicNoteSimple } from 'react-icons/pi';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useQuery } from 'react-query';
import { listRandomEvents } from 'services/events.service';
import { IPage, listRandomPages } from 'services/pages.service';
import { getFeed } from 'services/post.service';
import {
  GetProfileQuery,
  Post as PostType,
  User,
  VirtuosoEvents,
} from 'services/types/generated';
import { getProfile } from 'services/user.service';
import useSession from 'src/hooks/useSession';
import PostSkeleton from 'src/placeholders/PostSkeleton';
import CreatePost from 'src/post/CreatePost';
import Post from 'src/post';
import { Button } from 'src/components/ui/button';
import { MdOutlineCelebration } from 'react-icons/md';

export default function Home() {
  const { session, loading } = useSession();
  const [loadExtras, setLoadExtras] = useState(false);
  const sub = session?.user?.sub;
  const { ref, inView } = useInView();

  const {
    isLoading,
    data: feed,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [`feed`, sub || 'guest'],
    queryFn: getFeed,
    enabled: !loading,
    onSuccess: () => setLoadExtras(true),
    getNextPageParam: (lastPage, pages: any) => lastPage?.posts?.nextToken,
  });

  const {
    isLoading: isEventsLoading,
    data: randomEvents,
    refetch: refetchEvents,
  } = useQuery<any, unknown, VirtuosoEvents[]>(
    'list-events',
    listRandomEvents,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      enabled: loadExtras,
    }
  );

  const {
    isLoading: isPagesLoading,
    data: randomPages,
    refetch: refetchPages,
  } = useQuery<any, unknown, IPage[]>('list-pages', listRandomPages, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: loadExtras,
  });

  useEffect(() => {
    if (!loadExtras) return;
    if (!randomEvents?.length) {
      refetchEvents();
    }
    if (!randomPages?.length) {
      refetchPages();
    }
  }, [loadExtras, randomPages, randomEvents]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const { isLoading: isUserDataLoading, data } = useQuery<
    GetProfileQuery,
    unknown,
    User
  >(['get-user', sub, sub || 'guest'], getProfile, {
    select: (data) => data.user as User,
    enabled: loadExtras,
  });

  return (
    <>
      <div className="pt-5 c-container">
        <div className="grid grid-cols-12 md:gap-6">
          <section className="hidden md:col-span-3 md:block">
            <div className="sticky space-y-6 top-20">
              <div className="overflow-hidden bg-[url('/assets/images/card-background.png')] bg-center bg-no-repeat rounded-2xl">
                <div className="p-4 py-6 bg-primary/90">
                  <div className="">
                    {data?.subscriptionStatus === 'active' && (
                      <div
                        id="body"
                        className="flex flex-col items-center py-5 pt-6 space-y-6"
                      >
                        <p className="text-5xl font-semibold text-white">71</p>
                        <p className="text-3xl text-white">Sunny</p>
                      </div>
                    )}
                    <div className="pt-12 pb-8 space-y-4">
                      <p className="text-2xl font-bold text-center text-white">
                        {format(new Date(Date.now()), 'EEEE')}
                      </p>
                      <p className="text-center text-white/90">
                        {format(new Date(Date.now()), 'MMMM, do yyyy')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {!isUserDataLoading &&
                !(data?.subscriptionStatus === 'active') && (
                  <div className="bg-[url(/assets/patterns/pattern.svg)] border rounded-2xl my-pattern border-border bg-base-200 dark:bg-dark-base-200 p-0.5">
                    <div className="relative flex flex-col items-start py-6 justify-center w-full h-full gap-4 p-3.5 border dark:border-dark-quarternary/30 border-quarternary rounded-2xl bg-gradient-to-tr from-black/60 to-black/0">
                      <Image
                        src="/assets/images/dj.svg"
                        alt="avatar"
                        width={100}
                        height={100}
                        className="w-24 h-24 fill-rose-500"
                      />
                      <PiMusicNoteSimple className="absolute text-2xl duration-1000 right-10 top-8 animate-bounce" />
                      <PiMusicNoteSimple className="absolute text-2xl duration-1000 delay-100 right-16 top-10 animate-bounce" />
                      <h2 className="font-mono text-2xl font-semibold text-heading dark:text-dark-heading">
                        Monetize your passion!
                      </h2>
                      <p className="text-sm">
                        Become a creator and start publishing events and
                        livestreams by activating an on-demand subscription.
                        Engage your audience, share your content, and monetize
                        your passion effortlessly!
                      </p>
                      <Button asChild className="w-full">
                        <Link href="/subscription">
                          Get Started <MdOutlineCelebration />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )}
            </div>
          </section>
          <section className="col-span-12 pb-24 space-y-3 md:col-span-6 md:space-y-6">
            {sub && (
              <CreatePost
                pageId={sub || ''}
                avatar={session?.user?.avatar}
                type="profile"
              />
            )}
            {(isLoading || loading) &&
              Array.from(Array(4).keys()).map((i) => <PostSkeleton key={i} />)}
            {!isLoading &&
              !loading &&
              feed?.pages.map((page) =>
                page?.posts?.items?.map((post: any, i: any) => {
                  if (page?.posts?.items?.length === i + 1) {
                    return (
                      <Post key={post?.id} data={post as PostType} ref={ref} />
                    );
                  }
                  return <Post key={post?.id} data={post as PostType} />;
                })
              )}
            {isFetchingNextPage &&
              Array.from(Array(2).keys()).map((i) => <PostSkeleton key={i} />)}
            {!hasNextPage && !isLoading && !loading && (
              <>
                <div className="overflow-hidden bg-[url('/assets/images/card-background.png')] bg-center bg-no-repeat md:rounded-xl">
                  <div className="p-4 py-6 bg-primary/80">
                    <div className="">
                      <div
                        id="body"
                        className="flex flex-col items-center py-10 space-y-4"
                      >
                        <p className="text-2xl font-semibold text-white">
                          Wow!
                        </p>
                        <p className="text-white text">
                          You reached the end of this feed!
                        </p>
                        <button
                          className="c-btn-primary"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          Scroll to top!
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
          <section className="sticky hidden md:col-span-3 md:block">
            <div className="sticky space-y-6 top-20">
              <div className="space-y-2">
                <div
                  id="header"
                  className="flex justify-between p-4 border border-border bg-base-200 dark:bg-dark-base-200 rounded-2xl"
                >
                  <h2 className="text-sm font-semibold color-heading font-heading">
                    Upcoming Events
                  </h2>
                </div>
                {isEventsLoading || loading ? (
                  <>
                    <p className="w-full mb-2 rounded-lg h-14 animate-pulse bg-white/10" />
                    <p className="w-full mb-2 rounded-lg h-14 animate-pulse bg-white/10" />
                  </>
                ) : (
                  <>
                    {randomEvents?.map((event) => (
                      <Link
                        href={`/events/${event.EventID}`}
                        key={event.EventID}
                        className="block border gap-x-3 border-border bg-base-200 dark:bg-dark-base-200 rounded-2xl hover:bg-base-300 dark:hover:bg-dark-base-300"
                      >
                        <div
                          key={event.EventID}
                          className="flex px-5 py-4 gap-x-3"
                        >
                          <div className="h-[36px] w-[36px] transform cursor-pointer overflow-hidden rounded-full bg-base-100 outline outline-1 outline-offset-1 outline-base-300 hover:scale-105 dark:bg-dark-base-100 dark:outline-dark-base-300">
                            <Image
                              height={40}
                              width={40}
                              quality={80}
                              className="block object-cover w-full h-full"
                              src={
                                event.EventImages?.[0] ||
                                '/assets/images/post-image.png'
                              }
                              alt=""
                            />
                          </div>
                          <div className="flex-1 text-sm">
                            <h3 className="font-medium color-heading">
                              {event.EventName}
                            </h3>
                            <p className="overflow-hidden text-sm text-gray-400 w-44 text-ellipsis whitespace-nowrap">
                              {event?.EventDescription}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {!(Number(randomEvents?.length) > 0) && (
                      <div className="flex flex-col justify-center h-32 mb-2 text-center rounded-md bg-box">
                        <div> No Events </div>
                      </div>
                    )}
                    <p className="text-xs text-center text-gray-400 cursor-pointer">
                      <Link href={`/events`}>
                        <span className="block p-2 text-xs text-center text-gray-400 cursor-pointer">
                          see more
                        </span>
                      </Link>
                    </p>
                  </>
                )}
              </div>
              <div className="space-y-2">
                <div
                  id="header"
                  className="flex justify-between p-4 border border-border bg-base-200 dark:bg-dark-base-200 rounded-2xl "
                >
                  <h2 className="text-sm font-semibold color-heading font-heading">
                    Suggested Pages
                  </h2>
                </div>

                {isPagesLoading || loading || isLoading ? (
                  <>
                    <p className="w-full mb-2 rounded-lg h-14 animate-pulse bg-white/10" />
                    <p className="w-full mb-2 rounded-lg h-14 animate-pulse bg-white/10" />
                  </>
                ) : (
                  <>
                    {randomPages?.map((page) => (
                      <Link key={page?.url} href={page?.url}>
                        <div className="flex p-4 py-2 my-2 transition-all border gap-x-3 border-border bg-base-200 dark:bg-dark-base-200 rounded-2xl hover:bg-base-300 dark:hover:bg-dark-base-300">
                          <div className="h-[36px] w-[36px] transform cursor-pointer overflow-hidden rounded-full bg-base-100 outline outline-1 outline-offset-1 outline-base-300 hover:scale-105 dark:bg-dark-base-100 dark:outline-dark-base-300">
                            <Image
                              height={40}
                              width={40}
                              quality={80}
                              className="block object-cover w-full h-full"
                              src={
                                page?.avatar || '/assets/images/post-image.png'
                              }
                              alt=""
                            />
                          </div>
                          <div className="flex-1 text-sm">
                            <h3 className="font-medium color-heading">
                              {page?.title}
                            </h3>
                            <p className="overflow-hidden text-sm text-gray-400 w-44 text-ellipsis whitespace-nowrap">
                              {page?.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {!(Number(randomPages?.length) > 0) && (
                      <div className="flex flex-col justify-center h-32 mb-2 text-center rounded-md bg-box">
                        <div> No Pages </div>
                      </div>
                    )}
                    <p className="text-xs text-center text-gray-400 cursor-pointer">
                      <Link href={`/pages`}>
                        <span className="block p-2 text-xs text-center text-gray-400 cursor-pointer">
                          see more
                        </span>
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
