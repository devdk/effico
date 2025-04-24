import { graphQLClient } from './clients/graphql.client';
import {
  CreateVenueSiteMapDocument,
  CreateVenueSiteMapMutation,
  CreateVenueSiteMapMutationVariables,
  GetVirtuosoSitemapDocument,
  ListMarketplaceSitemapsDocument,
  UpdateVirtuosoSiteMapDocument,
  UpdateVirtuosoSiteMapMutation,
  UpdateVirtuosoSiteMapMutationVariables,
} from './types/generated';

export const createVenueSiteMap = (
  variables: CreateVenueSiteMapMutationVariables
) => {
  return graphQLClient.request<CreateVenueSiteMapMutation>(
    CreateVenueSiteMapDocument,
    variables
  );
};

export const updateSitemap = (
  variables: UpdateVirtuosoSiteMapMutationVariables
) => {
  return graphQLClient.request<UpdateVirtuosoSiteMapMutation>(
    UpdateVirtuosoSiteMapDocument,
    variables
  );
};

export const listMarketplaceSitemaps = ({ queryKey, pageParam = '' }: any) => {
  const userId = queryKey[1];
  return graphQLClient.request(ListMarketplaceSitemapsDocument, {
    userId,
    nextToken: pageParam,
  });
};

export const getSitemap = ({ queryKey }: any) => {
  const id = queryKey[1];
  const sub = queryKey[2];
  return graphQLClient.request(GetVirtuosoSitemapDocument, {
    SiteMapID: id,
    sub,
  });
};
