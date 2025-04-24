import { graphQLClient } from './clients/graphql.client';
import {
  CommentOnAPostDocument,
  CommentOnAPostMutation,
  CommentOnAPostMutationVariables,
  DeleteACommentDocument,
  DeleteACommentMutation,
  DeleteACommentMutationVariables,
  ListCommentsOnAPostDocument,
  ReplyOnACommentDocument,
  ReplyOnACommentMutation,
  ReplyOnACommentMutationVariables,
} from './types/generated';

// create-event mutation callback
export const commentOnAPost = (variables: CommentOnAPostMutationVariables) => {
  return graphQLClient.request<CommentOnAPostMutation>(
    CommentOnAPostDocument,
    variables
  );
};

// delete a comment
export const deleteAComment = (variables: DeleteACommentMutationVariables) => {
  return graphQLClient.request<DeleteACommentMutation>(
    DeleteACommentDocument,
    variables
  );
};

export const replyOnAComment = (
  variables: ReplyOnACommentMutationVariables
) => {
  return graphQLClient.request<ReplyOnACommentMutation>(
    ReplyOnACommentDocument,
    variables
  );
};

export const listCommentsOnAPost = ({ queryKey }: any) => {
  const postId = queryKey[1];
  return graphQLClient.request(ListCommentsOnAPostDocument, { postId });
};
