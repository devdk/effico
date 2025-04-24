import { graphQLClient } from './clients/graphql.client';
import {
  GetOrderedAndCreatedStagesDocument,
  GetOrderedAndCreatedStagesQuery,
  GetOrderedAndCreatedStagesQueryVariables,
} from './types/generated';

export const getStagesOfUser = (
  args: GetOrderedAndCreatedStagesQueryVariables
) => {
  return graphQLClient.request<GetOrderedAndCreatedStagesQuery>(
    GetOrderedAndCreatedStagesDocument,
    args
  );
};
