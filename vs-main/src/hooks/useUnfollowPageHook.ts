import { useMutation } from 'react-query';
import { unfollowPage } from 'services/pages.service';
import {
  UnfollowPageMutation,
  UnfollowPageMutationVariables,
} from 'services/types/generated';

type TUnfollowPageHookProp = {
  onSettled: (data: any, error: any) => any;
};

export default function useUnfollowPageHook({
  onSettled,
}: TUnfollowPageHookProp) {
  const { mutate, isLoading } = useMutation<
    UnfollowPageMutation,
    unknown,
    UnfollowPageMutationVariables
  >(unfollowPage, {
    mutationKey: 'follow page',
    onSettled,
  });

  return { mutate, isLoading };
}
