import { TPagesFilter } from 'src/config/pages.config';
import { graphQLClient } from './clients/graphql.client';
import {
  FollowPageDocument,
  FollowPageMutation,
  FollowPageMutationVariables,
  ListVirtuosoPagesDocument,
  UnfollowPageDocument,
  UnfollowPageMutation,
  UnfollowPageMutationVariables,
} from './types/generated';
import { Response } from './auth.service';
import virtuosoServer from './clients/axios';

export const listPages = ({ queryKey }: any) => {
  let filter = queryKey[1] as TPagesFilter;
  if (filter.all) {
    filter = { ...filter, creator: true, venue: true, vendor: true };
  }
  return graphQLClient.request(ListVirtuosoPagesDocument, {
    showCreators: filter.creator,
    showVenues: filter.venue,
    showVendors: filter.vendor,
    creatorFilter: filter.creatorFilter || {},
    venueFilter: filter.venueFilter || {},
    vendorFilter: filter.vendorFilter || {},
  });
};

export interface IPage {
  title: string;
  description: string;
  url: string;
  avatar: string;
}

export const listRandomPages = async ({ queryKey, pageParam = '' }: any) => {
  const response = await virtuosoServer.get<Response<IPage[]>>(
    '/api/public/pages/random'
  );
  console.log(response);
  return response?.data?.data;
};

export const followPage = (variables: FollowPageMutationVariables) => {
  return graphQLClient.request<FollowPageMutation>(
    FollowPageDocument,
    variables
  );
};

export const unfollowPage = (variables: UnfollowPageMutationVariables) => {
  return graphQLClient.request<UnfollowPageMutation>(
    UnfollowPageDocument,
    variables
  );
};
