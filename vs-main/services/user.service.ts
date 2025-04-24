import { graphQLClient } from './clients/graphql.client';

import {
  GetProfileDocument,
  GetUserAddressDocument,
  GetUserDocument,
  UpdateUserDocument,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from './types/generated';

export const getUser = ({ queryKey }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request(GetUserDocument, { sub });
};

export const getUserAddress = ({ queryKey }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request(GetUserAddressDocument, { sub });
};

export const getProfile = ({ queryKey }: any) => {
  const sub = queryKey[1];
  const friendId = queryKey[2];
  return graphQLClient.request(GetProfileDocument, { sub, friendId });
};

export const updateUser = (variables: UpdateUserMutationVariables) => {
  return graphQLClient.request<UpdateUserMutation>(
    UpdateUserDocument,
    variables
  );
};
