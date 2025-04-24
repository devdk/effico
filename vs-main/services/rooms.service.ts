import { graphQLClient } from './clients/graphql.client';
import {
  CreateChatRoomsDocument,
  CreateChatRoomsInput,
  CreateChatRoomsMutation,
  DeleteChatRoomsDocument,
  DeleteChatRoomsInput,
  DeleteChatRoomsMutation,
  ListChatRoomsDocument,
  UpdateChatRoomDocument,
  UpdateChatRoomMutation,
  UpdateChatRoomsInput,
} from './types/generated';

export const listChatRooms = ({ queryKey }: any) => {
  return graphQLClient.request(ListChatRoomsDocument);
};

export const createChatRoom = (variables: CreateChatRoomsInput) => {
  return graphQLClient.request<CreateChatRoomsMutation>(
    CreateChatRoomsDocument,
    variables
  );
};

export const updateChatRoom = (variables: UpdateChatRoomsInput) => {
  return graphQLClient.request<UpdateChatRoomMutation>(
    UpdateChatRoomDocument,
    variables
  );
};

export const deleteChatRoom = (variables: DeleteChatRoomsInput) => {
  return graphQLClient.request<DeleteChatRoomsMutation>(
    DeleteChatRoomsDocument,
    variables
  );
};
