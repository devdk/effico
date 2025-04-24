import { useQuery } from 'react-query';
import { getPost } from 'services/post.service';
import { GetPostQuery, Post as PostType } from 'services/types/generated';
import useSession from 'src/hooks/useSession';
import PostSkeleton from 'src/placeholders/PostSkeleton';
import Post from 'src/post';

interface ISelfFetchedPostProps {
  id: string;
  pageId: string;
  rounded?: boolean;
}

export function SelfFetchedPost({
  id,
  pageId,
  rounded = true,
}: ISelfFetchedPostProps) {
  const { session } = useSession();

  const { isLoading, data } = useQuery<GetPostQuery, unknown, PostType>(
    [`post-${id}`, id, pageId, session?.user?.sub],
    getPost,
    {
      select: (data: any) => data.post as PostType,
    }
  );

  if (!pageId) return <></>;

  if (isLoading) return <PostSkeleton />;

  return <Post rounded={rounded} key={data?.id} data={data} />;
}
