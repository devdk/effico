import { graphQLClient } from './clients/graphql.client';
import {
  DeleteNotificationDocument,
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables,
  ListUserNotificationsDocument,
} from './types/generated';

export const listUserNotifications = ({ queryKey }: any) => {
  const sub = queryKey[1];
  return graphQLClient.request(ListUserNotificationsDocument, {
    sub,
  });
};

export const deleteNotification = (
  variables: DeleteNotificationMutationVariables
) => {
  return graphQLClient.request<DeleteNotificationMutation>(
    DeleteNotificationDocument,
    variables
  );
};
