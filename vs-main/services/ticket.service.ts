import { graphQLClient } from './clients/graphql.client';
import { GetUserOwnedTicketsDocument } from './types/generated';

export const listTickets = ({ queryKey }: any) => {
  const userId = queryKey[1];
  return graphQLClient.request(GetUserOwnedTicketsDocument, {
    UserID: userId,
  });
};
