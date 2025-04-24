import Link from 'next/link';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import PostSkeleton from 'src/placeholders/PostSkeleton';
import { SelfFetchedPost } from './SelfFetchedPost';

interface IPostsList {
  data?: any;
  link?: any;
  isLoading?: boolean;
}

export function PostsList({ data, link, isLoading }: IPostsList) {
  return (
    <div className="col-span-12 space-y-0 md:col-span-6">
      <div className="c-box c-divide divide-y !rounded-none md:!rounded-xl">
        <div className="c-box !rounded-none md:!rounded-xl">
          <div id="header" className="flex justify-between p-5 pb-4">
            <h2 className="text-sm font-bold color-heading font-heading">
              Posts
            </h2>
            <HiOutlineDotsVertical className="text-xl" />
          </div>
        </div>
        <div className="space-y-4 c-divide">
          {isLoading &&
            Array.from(Array(4).keys()).map((i) => <PostSkeleton key={i} />)}
          {!isLoading &&
            data?.map((i: any) => (
              <SelfFetchedPost
                key={i?.id}
                id={i?.id}
                rounded={false}
                pageId={i?.fields?.pageid?.[0]}
              />
            ))}
        </div>
        {link && (
          <div className="flex items-center justify-center flex-1 p-4 text-sm">
            <h3 className="text-sm font-medium color-heading">
              <Link href={link}>See All</Link>
            </h3>
          </div>
        )}
        {!link && (
          <div className="flex items-center justify-center flex-1 p-4 text-sm">
            <h3 className="text-sm font-medium color-heading">
              <button>See more</button>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
