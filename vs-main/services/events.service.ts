import { graphQLClient } from './clients/graphql.client';
import {
  CreateEventDocument,
  CreateEventMutation,
  CreateEventMutationVariables,
  DeleteVirtuosoEventDocument,
  DeleteVirtuosoEventMutation,
  DeleteVirtuosoEventMutationVariables,
  GetEventDocument,
  GetEventTicketStatusDocument,
  GetStreamsAndRecordingsDocument,
  GetVenueSitemapsAndStreamsDocument,
  GetVenueSitemapsAndStreamsQuery,
  GetVenueSitemapsAndStreamsQueryVariables,
  ListEventsByCategoryDocument,
  ListEventsDocument,
  ListPaginatedEventsByCategoryDocument,
  UpdateEventDocument,
  UpdateEventMutation,
  UpdateEventMutationVariables,
  VirtuosoEvents,
} from './types/generated';
import { Response } from './auth.service';
import virtuosoServer, { virtuosoServerUnauth } from './clients/axios';

export const listPublicEvents = ({ queryKey, pageParam = '' }: any) => {
  return virtuosoServer.get<Response<VirtuosoEvents[]>>('/api/public/events');
};

export const listRandomEvents = async ({ queryKey, pageParam = '' }: any) => {
  const response = await virtuosoServer.get<Response<VirtuosoEvents[]>>(
    '/api/public/events/random'
  );
  console.log(response);
  return response?.data?.data;
};

export const fetchEventSEO = (id: string) => {
  return virtuosoServerUnauth.get<Response<VirtuosoEvents>>(
    `/api/public/events/metadata/${id}`,
    {
      next: {
        revalidate: 60,
      },
    } as any
  );
};

export const getPublicEvent = ({ queryKey, pageParam = '' }: any) => {
  const id = queryKey[1];
  return virtuosoServer.get<Response<VirtuosoEvents>>(
    `/api/public/events/${id}`
  );
};

export const listEvents = ({ queryKey, pageParam = '' }: any) => {
  return graphQLClient.request(ListEventsDocument, {
    nextToken: pageParam,
  });
};

export const listStreamsAndRecordings = ({ queryKey, pageParam = '' }: any) => {
  return graphQLClient.request(GetStreamsAndRecordingsDocument, {
    eventId: queryKey[1],
    stageId: queryKey[2],
  });
};

export const listPaginatedEventsByCategory = ({
  queryKey,
  pageParam = '',
}: any) => {
  const category = queryKey[1];
  return graphQLClient.request(ListPaginatedEventsByCategoryDocument, {
    category,
    nextToken: pageParam,
  });
};

export const listEventsByCategories = () => {
  return graphQLClient.request(ListEventsByCategoryDocument, {});
};

export const fetchEventById = ({ queryKey }: any) => {
  const id = queryKey[1];
  const user = queryKey[2];
  return graphQLClient.request(GetEventDocument, { eventId: id, sub: user });
};

export const fetchEventTicketStatus = ({ queryKey }: any) => {
  const id = queryKey[1];
  const sub = queryKey[2];
  return graphQLClient.request(GetEventTicketStatusDocument, {
    eventId: id,
    sub,
  });
};

// create-event mutation callback
export const createEvent = (variables: CreateEventMutationVariables) => {
  return graphQLClient.request<CreateEventMutation>(
    CreateEventDocument,
    variables
  );
};

// update-event mutation callback
export const updateEvent = (variables: UpdateEventMutationVariables) => {
  return graphQLClient.request<UpdateEventMutation>(
    UpdateEventDocument,
    variables
  );
};

export const deleteEvent = (
  variables: DeleteVirtuosoEventMutationVariables
) => {
  return graphQLClient.request<DeleteVirtuosoEventMutation>(
    DeleteVirtuosoEventDocument,
    variables
  );
};

export const fetchVenueSitemapsAndStreams = ({ queryKey }: any) => {
  const variables: GetVenueSitemapsAndStreamsQueryVariables = {
    VenueID: queryKey[1],
    CreatorID: queryKey[2],
  };
  return graphQLClient.request<GetVenueSitemapsAndStreamsQuery>(
    GetVenueSitemapsAndStreamsDocument,
    variables
  );
};
