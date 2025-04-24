import { useRouter } from 'next/navigation';
import useSession from './useSession';

export default function useIsLoggedIn() {
  const { session } = useSession();
  const router = useRouter();

  const navigateToLogin = (e: any) => {
    router.push('/auth/login');
  };

  return {
    loggedIn: !!session?.user?.accessToken || false,
    user: session.user,
    navigateToLogin: navigateToLogin,
  };
}
