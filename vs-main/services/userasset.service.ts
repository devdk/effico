import { graphQLClient } from './clients/graphql.client';

import {
  CreateUserAssetDocument,
  CreateUserAssetMutation,
  CreateUserAssetMutationVariables,
  DeleteUserAssetDocument,
  DeleteUserAssetMutation,
  DeleteUserAssetMutationVariables,
  GetUserAssetQueryDocument,
  ListUserAssetByAssetTypeDocument,
  ListUserAssetDocument,
  ListUserAssetsForManagementDocument,
  PublishUserAssetDocument,
  PublishUserAssetMutation,
  PublishUserAssetMutationVariables,
  UpdateUserAssetDocument,
  UpdateUserAssetMutation,
  UpdateUserAssetMutationVariables,
} from './types/generated';

export const createUserAsset = (
  variables: CreateUserAssetMutationVariables
) => {
  return graphQLClient.request<CreateUserAssetMutation>(
    CreateUserAssetDocument,
    variables
  );
};

export const updateUserAsset = (
  variables: UpdateUserAssetMutationVariables
) => {
  return graphQLClient.request<UpdateUserAssetMutation>(
    UpdateUserAssetDocument,
    variables
  );
};

export const deleteUserAsset = (
  variables: DeleteUserAssetMutationVariables
) => {
  return graphQLClient.request<DeleteUserAssetMutation>(
    DeleteUserAssetDocument,
    variables
  );
};

export const publishUserAsset = (
  variables: PublishUserAssetMutationVariables
) => {
  return graphQLClient.request<PublishUserAssetMutation>(
    PublishUserAssetDocument,
    variables
  );
};

export const listUserAsset = ({ queryKey }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request(ListUserAssetDocument, {
    creatorId: sub,
  });
};

export const listUserAssetByAssetType = ({ queryKey, pageParam }: any) => {
  const sub = queryKey[1];
  const assetType = queryKey[2];
  // console.log(queryKey);
  return graphQLClient.request(ListUserAssetByAssetTypeDocument, {
    creatorId: sub,
    assetType: assetType,
    nextToken: pageParam,
  });
};

export const getUserAssetForProductPage = ({ queryKey }: any) => {
  const assetId = queryKey[1];
  const sub = queryKey[2];
  return graphQLClient.request(GetUserAssetQueryDocument, {
    id: assetId,
    sub,
  });
};

export const listUserAssetsForManagement = ({ queryKey }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request(ListUserAssetsForManagementDocument, {
    creatorId: sub,
  });
};
