import useSession from './useSession';

export default function useIsPageAdmin(id: string | undefined | null) {
  const { session } = useSession();
  return { isAdmin: session?.user?.sub === id, user: session?.user };
}
