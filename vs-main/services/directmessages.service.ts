import { graphQLClient } from './clients/graphql.client';
import {
  GetChatRoomDocument,
  ListDirectMessagesDocument,
  UpdateDirectMessageDocument,
  UpdateDirectMessageMutation,
  UpdateDirectMessageMutationVariables,
} from './types/generated';

export const listDirectMessages = ({ queryKey }: any) => {
  const dmId = queryKey[1];
  const includeSender = queryKey[2];
  return graphQLClient.request(ListDirectMessagesDocument, {
    dmId: dmId,
    includeSender,
  });
};

export const getDirectMessages = ({ queryKey }: any) => {
  const id = queryKey[1];
  return graphQLClient.request(GetChatRoomDocument, {
    id,
  });
};

export const updateDirectMessage = (
  variables: UpdateDirectMessageMutationVariables
) => {
  return graphQLClient.request<UpdateDirectMessageMutation>(
    UpdateDirectMessageDocument,
    variables
  );
};
