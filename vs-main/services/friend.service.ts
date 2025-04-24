import { graphQLClient } from './clients/graphql.client';
import {
  CreateFriendDocument,
  CreateFriendMutation,
  CreateFriendMutationVariables,
  DeleteFriendDocument,
  DeleteFriendMutation,
  DeleteFriendMutationVariables,
  ListFriendsDocument,
  ListFriendsQuery,
  ListFriendsQueryVariables,
  RejectFriendRequestDocument,
  RejectFriendRequestMutation,
  RejectFriendRequestMutationVariables,
  SendFriendRequestDocument,
  SendFriendRequestMutation,
  SendFriendRequestMutationVariables,
} from './types/generated';

export const createFriend = (variables: CreateFriendMutationVariables) => {
  return graphQLClient.request<CreateFriendMutation>(
    CreateFriendDocument,
    variables
  );
};

export const sendFriendRequest = (
  variables: SendFriendRequestMutationVariables
) => {
  return graphQLClient.request<SendFriendRequestMutation>(
    SendFriendRequestDocument,
    variables
  );
};

export const deleteFriend = (variables: DeleteFriendMutationVariables) => {
  return graphQLClient.request<DeleteFriendMutation>(
    DeleteFriendDocument,
    variables
  );
};

export const deleteFriendRequest = (
  variables: RejectFriendRequestMutationVariables
) => {
  return graphQLClient.request<RejectFriendRequestMutation>(
    RejectFriendRequestDocument,
    variables
  );
};

export const getFriendsList = ({ queryKey }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request<ListFriendsQuery, ListFriendsQueryVariables>(
    ListFriendsDocument,
    {
      UserID: sub,
    }
  );
};
