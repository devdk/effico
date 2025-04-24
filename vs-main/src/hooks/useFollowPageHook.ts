import { useMutation } from 'react-query';
import { followPage } from 'services/pages.service';
import {
  FollowPageMutation,
  FollowPageMutationVariables,
} from 'services/types/generated';

type TFollowPageHookProp = {
  onSettled: (data: any, error: any) => any;
};

export default function useFollowPageHook({ onSettled }: TFollowPageHookProp) {
  const { mutate, isLoading } = useMutation<
    FollowPageMutation,
    unknown,
    FollowPageMutationVariables
  >(followPage, {
    mutationKey: 'follow page',
    onSettled,
  });

  return { mutate, isLoading };
}
