import { graphQLClient } from './clients/graphql.client';
import {
  CreateCreatorPageDocument,
  CreateCreatorPageMutation,
  CreateCreatorPageMutationVariables,
  GetCreatorPageDocument,
  ListVirtuosoCreatorsDocument,
  UpdateCreatorBioDocument,
  UpdateCreatorBioMutation,
  UpdateCreatorBioMutationVariables,
  UpdateCreatorDeactivatedDocument,
  UpdateCreatorDeactivatedMutationVariables,
  UpdateCreatorDisabilityDocument,
  UpdateCreatorDisabilityMutation,
  UpdateCreatorDisabilityMutationVariables,
  UpdateCreatorHeaderDocument,
  UpdateCreatorHeaderMutation,
  UpdateCreatorHeaderMutationVariables,
} from './types/generated';

export const createCreator = (
  variables: CreateCreatorPageMutationVariables
) => {
  return graphQLClient.request<CreateCreatorPageMutation>(
    CreateCreatorPageDocument,
    variables
  );
};

export const getCreatorPage = ({ queryKey }: any) => {
  const CreatorID = queryKey[1];
  const userId = queryKey[2];
  return graphQLClient.request(GetCreatorPageDocument, { CreatorID, userId });
};

export const listCreatorPages = ({ queryKey, pageParams }: any) => {
  const filter = queryKey[1];
  return graphQLClient.request(ListVirtuosoCreatorsDocument, {
    filter,
    nextToken: pageParams,
  });
};

export const updateBio = (variables: UpdateCreatorBioMutationVariables) => {
  return graphQLClient.request<UpdateCreatorBioMutation>(
    UpdateCreatorBioDocument,
    variables
  );
};

export const updateCreatorHeader = (
  variables: UpdateCreatorHeaderMutationVariables
) => {
  return graphQLClient.request<UpdateCreatorHeaderMutation>(
    UpdateCreatorHeaderDocument,
    variables
  );
};

export const updateCreatorDisabilityStatus = (
  variables: UpdateCreatorDisabilityMutationVariables
) => {
  return graphQLClient.request<UpdateCreatorDisabilityMutation>(
    UpdateCreatorDisabilityDocument,
    variables
  );
};

export const updateCreatorDeactivatedStatus = (
  variables: UpdateCreatorDeactivatedMutationVariables
) => {
  return graphQLClient.request<UpdateCreatorDisabilityMutation>(
    UpdateCreatorDeactivatedDocument,
    variables
  );
};
