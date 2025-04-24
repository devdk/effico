import { livestreamServer } from './clients/axios';
import { graphQLClient } from './clients/graphql.client';
import {
  ListStreamsDocument,
  UpdateStreamConfigurationsDocument,
  UpdateStreamConfigurationsMutation,
  UpdateStreamConfigurationsMutationVariables,
} from './types/generated';

const endpoints = {
  getStream: '/api/livestream/create',
  deleteStream: '/api/livestream/delete',
};

export type GenerateStreamInputs = {
  streamName: string;
  streamType: string;
  creatorID: string;
};

export interface IResponse<T> {
  status: number;
  msg: string;
  data: T;
}

export interface IStreamPayload {
  streamName: string;
  streamType: string;
  creatorID: string;
}

export interface IStreamData {
  creatorID: string;
  streamUUID: string;
  streamID: string;
  playbackURL: string;
  streamKey: string;
  streamName: string;
  streamType: string;
  timestamp: string;
}

export interface IStreamResponse extends IResponse<IStreamData> {}

// get stream
export const getStream = async (variables: GenerateStreamInputs) => {
  const { data } = await livestreamServer.post<IStreamResponse>(
    endpoints.getStream,
    variables
  );
  return data.data;
};

// delete stream
export const deleteStream = async ({ streamID }: any) => {
  const { data } = await livestreamServer.post<IStreamResponse>(
    endpoints.deleteStream,
    {
      streamID,
    }
  );
  return data.data;
};

// update stream
export const updateStream = async (
  variables: UpdateStreamConfigurationsMutationVariables
) => {
  return graphQLClient.request<UpdateStreamConfigurationsMutation>(
    UpdateStreamConfigurationsDocument,
    variables
  );
};

// list streams from db
export const listStreams = ({ queryKey }: any) => {
  const creatorID = queryKey[1];
  return graphQLClient.request(ListStreamsDocument, { creatorID });
};
