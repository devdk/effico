import { graphQLClient } from './clients/graphql.client';
import {
  CreateVendorPageDocument,
  CreateVendorPageMutation,
  CreateVendorPageMutationVariables,
  GetVendorPageDocument,
  GetVendorProductsDocument,
  GetVendorProductsQuery,
  ListVirtuosoVendorsDocument,
  UpdateVendorBioDocument,
  UpdateVendorBioMutation,
  UpdateVendorBioMutationVariables,
  UpdateVendorDeactivatedDocument,
  UpdateVendorDeactivatedMutation,
  UpdateVendorDeactivatedMutationVariables,
  UpdateVendorHeaderDocument,
  UpdateVendorHeaderMutation,
  UpdateVendorHeaderMutationVariables,
} from './types/generated';

export const createVendor = (variables: CreateVendorPageMutationVariables) => {
  return graphQLClient.request<CreateVendorPageMutation>(
    CreateVendorPageDocument,
    variables
  );
};

export const getVendorPage = ({ queryKey }: any) => {
  const id = queryKey[1];
  const userId = queryKey[2];
  return graphQLClient.request(GetVendorPageDocument, { VendorID: id, userId });
};

export const listVendorPages = ({ queryKey, pageParams }: any) => {
  const filter = queryKey[1];
  return graphQLClient.request(ListVirtuosoVendorsDocument, {
    filter,
    nextToken: pageParams,
  });
};

export const updateVendorHeader = (
  variables: UpdateVendorHeaderMutationVariables
) => {
  return graphQLClient.request<UpdateVendorHeaderMutation>(
    UpdateVendorHeaderDocument,
    variables
  );
};

export const updateVendorBio = (
  variables: UpdateVendorBioMutationVariables
) => {
  return graphQLClient.request<UpdateVendorBioMutation>(
    UpdateVendorBioDocument,
    variables
  );
};

export const getVendorProducts = ({ queryKey }: any) => {
  const id = queryKey[1];
  return graphQLClient.request<GetVendorProductsQuery>(
    GetVendorProductsDocument,
    {
      vendorPageId: id,
    }
  );
};

export const updateVendorDeactivatedStatus = (
  variables: UpdateVendorDeactivatedMutationVariables
) => {
  return graphQLClient.request<UpdateVendorDeactivatedMutation>(
    UpdateVendorDeactivatedDocument,
    variables
  );
};
