import { graphQLClient } from './clients/graphql.client';
import {
  CreateSupportTicketMutation,
  CreateSupportTicketMutationVariables,
  CreateSupportTicketDocument,
} from './types/generated';

export const createSupportTicket = (
  variables: CreateSupportTicketMutationVariables
) => {
  return graphQLClient.request<CreateSupportTicketMutation>(
    CreateSupportTicketDocument,
    variables
  );
};
