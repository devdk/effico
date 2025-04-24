import { graphQLClient } from './clients/graphql.client';
import {
  GetOwnedAvatarClothingDocument,
  GetOwnedAvatarClothingQuery,
  GetOwnedInGameItemsDocument,
  GetOwnedInGameItemsQuery,
  GetOwnedSitemapsDocument,
  GetOwnedSitemapsQuery,
  GetOwnedTicketsDocument,
  GetOwnedTicketsQuery,
  GetStagesDocument,
  GetStagesQuery,
  GetVenuesDocument,
  GetVenuesQuery,
} from './types/generated';

export const getOwnedStages = ({ queryKey }: any) => {
  const sub = queryKey[1];

  return graphQLClient.request<GetStagesQuery>(GetStagesDocument, { sub });
};

export const getOwnedVenues = ({ queryKey }: any) => {
  const sub = queryKey[1];

  return graphQLClient.request<GetVenuesQuery>(GetVenuesDocument, { sub });
};

export const getOwnedTickets = ({ queryKey }: any) => {
  const sub = queryKey[1];

  return graphQLClient.request<GetOwnedTicketsQuery>(GetOwnedTicketsDocument, {
    sub,
  });
};

export const getOwnedSitemaps = ({ queryKey }: any) => {
  const sub = queryKey[1];

  return graphQLClient.request<GetOwnedSitemapsQuery>(
    GetOwnedSitemapsDocument,
    { sub }
  );
};

export const getOwnedInGameItems = ({ queryKey }: any) => {
  const sub = queryKey[1];

  return graphQLClient.request<GetOwnedInGameItemsQuery>(
    GetOwnedInGameItemsDocument,
    { sub }
  );
};

export const getOwnedAvatarClothing = ({ queryKey }: any) => {
  const sub = queryKey[1];

  return graphQLClient.request<GetOwnedAvatarClothingQuery>(
    GetOwnedAvatarClothingDocument,
    { sub }
  );
};
