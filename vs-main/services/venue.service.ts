import { graphQLClient } from './clients/graphql.client';
import {
  CreateVenuePageDocument,
  CreateVenuePageMutation,
  CreateVenuePageMutationVariables,
  GetVenueDocument,
  GetVenuePageDocument,
  GetVenuesCreatedByUserDocument,
  ListMarketplaceVenuesDocument,
  ListVirtuosoVenuesDocument,
  UpdateVenueBioDocument,
  UpdateVenueBioMutation,
  UpdateVenueBioMutationVariables,
  UpdateVenueDeactivatedDocument,
  UpdateVenueDeactivatedMutation,
  UpdateVenueDeactivatedMutationVariables,
  UpdateVenueHeaderDocument,
  UpdateVenueHeaderMutation,
  UpdateVenueHeaderMutationVariables,
  UpdateVenuePakDocument,
  UpdateVenuePakMutation,
  UpdateVenuePakMutationVariables,
} from './types/generated';

export const createVenue = (variables: CreateVenuePageMutationVariables) => {
  return graphQLClient.request<CreateVenuePageMutation>(
    CreateVenuePageDocument,
    variables
  );
};

export const updateBio = (variables: UpdateVenueBioMutationVariables) => {
  return graphQLClient.request<UpdateVenueBioMutation>(
    UpdateVenueBioDocument,
    variables
  );
};

export const getVenuePage = ({ queryKey }: any) => {
  const VenueID = queryKey[1];
  const userId = queryKey[2];
  return graphQLClient.request(GetVenuePageDocument, { VenueID, userId });
};

export const getVenue = ({ queryKey }: any) => {
  const VenueID = queryKey[1];
  return graphQLClient.request(GetVenueDocument, { VenueID });
};

export const listVenuePages = ({ queryKey, pageParams }: any) => {
  const filter = queryKey[1];
  return graphQLClient.request(ListVirtuosoVenuesDocument, {
    filter,
    nextToken: pageParams,
  });
};

export const updateVenueHeader = (
  variables: UpdateVenueHeaderMutationVariables
) => {
  return graphQLClient.request<UpdateVenueHeaderMutation>(
    UpdateVenueHeaderDocument,
    variables
  );
};

export const updateVenuePAK = (variables: UpdateVenuePakMutationVariables) => {
  return graphQLClient.request<UpdateVenuePakMutation>(
    UpdateVenuePakDocument,
    variables
  );
};

export const listVenuesCreatedByUser = ({ queryKey }: any) => {
  let userID = queryKey[1] as string;
  return graphQLClient.request(GetVenuesCreatedByUserDocument, {
    VenueCreatorID: userID,
  });
};

export const listMarketplaceVenues = ({ queryKey, pageParam = '' }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request(ListMarketplaceVenuesDocument, {
    nextToken: pageParam,
    sub,
  });
};

export const updateVenueDeactivatedStatus = (
  variables: UpdateVenueDeactivatedMutationVariables
) => {
  return graphQLClient.request<UpdateVenueDeactivatedMutation>(
    UpdateVenueDeactivatedDocument,
    variables
  );
};
