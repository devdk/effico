import { useSession as useNextAuthSession } from 'next-auth/react';

const useSession = () => {
  const { data: session, status, update } = useNextAuthSession();
  console.log({ session, status });
  return {
    session: { user: session?.user, setSession: null, setProfile: null },
    loading: status === 'loading',
    enabled: !!session?.user?.accessToken,
    isProfileLoading: status === 'loading',
    error: null,
  };
};

export default useSession;
