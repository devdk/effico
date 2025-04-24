import virtuosoServer from './clients/axios';
import { graphQLClient } from './clients/graphql.client';
import {
  CreatePostDocument,
  CreatePostMutation,
  CreatePostMutationVariables,
  DeleteAPostDocument,
  DeleteAPostMutation,
  DeleteAPostMutationVariables,
  GetPostByIdDocument,
  GetPostDocument,
  LikeAPostDocument,
  LikeAPostMutation,
  LikeAPostMutationVariables,
  ListPostsByAuthorDocument,
  ListPostsDocument,
  RemoveLikeOnAPostDocument,
  RemoveLikeOnAPostMutation,
  RemoveLikeOnAPostMutationVariables,
  UpdateSharesDocument,
  UpdateSharesMutation,
  UpdateSharesMutationVariables,
} from './types/generated';

// create-event mutation callback
export const createPost = (variables: CreatePostMutationVariables) => {
  return graphQLClient.request<CreatePostMutation>(
    CreatePostDocument,
    variables
  );
};

export const updateShares = (variables: UpdateSharesMutationVariables) => {
  return graphQLClient.request<UpdateSharesMutation>(
    UpdateSharesDocument,
    variables
  );
};

export const likeAPost = (variables: LikeAPostMutationVariables) => {
  return graphQLClient.request<LikeAPostMutation>(LikeAPostDocument, variables);
};

export const removeLikeOnAPost = (
  variables: RemoveLikeOnAPostMutationVariables
) => {
  return graphQLClient.request<RemoveLikeOnAPostMutation>(
    RemoveLikeOnAPostDocument,
    variables
  );
};

export const deleteAPost = (variables: DeleteAPostMutationVariables) => {
  return graphQLClient.request<DeleteAPostMutation>(
    DeleteAPostDocument,
    variables
  );
};

export const listAuthorPosts = ({ queryKey }: any) => {
  const author = queryKey[1];
  const user = queryKey[2];
  return graphQLClient.request(ListPostsByAuthorDocument, {
    author,
    userId: user,
  });
};

export const listPosts = ({ queryKey, pageParam = '' }: any) => {
  console.log({ graphQLClient });

  const userId = queryKey[1];
  return graphQLClient.request(ListPostsDocument, {
    userId,
    nextToken: pageParam,
  });
};

export const getFeed = async ({ queryKey, pageParam = '' }: any) => {
  const response = await virtuosoServer.get(
    `/api/public/feed?nextToken=${pageParam}`
  );

  console.log({ response });

  return {
    posts: {
      items: response?.data?.data?.items,
      nextToken: response?.data?.data?.nextToken,
    },
  };
};

export const getPost = ({ queryKey }: any) => {
  const id = queryKey[1];
  const pageId = queryKey[2];
  const userId = queryKey[3];
  return graphQLClient.request(GetPostDocument, {
    id,
    userId,
    pageId,
  });
};

export const getPostById = ({ queryKey }: any) => {
  const id = queryKey[1];
  const userId = queryKey[2];
  return graphQLClient.request(GetPostByIdDocument, {
    id,
    userId,
  });
};
