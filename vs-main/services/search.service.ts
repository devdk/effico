import { searchServer } from './clients/axios';

export const searchUserQuery = async ({ queryKey }: any) => {
  const [_, type, query] = queryKey;
  const { data } = await searchServer.get(`/search${query}&type=${type}`);
  return data;
};
