import axios, { AxiosRequestHeaders } from 'axios';
import fetchToken from 'src/utils/fetchToken';

export interface IAuthServerError {
  msg: string;
  status: number;
}

function createAuthClient(baseURL: string) {
  const instance = axios.create({ baseURL });

  instance.interceptors.request.use(
    async (config) => {
      const token = await fetchToken();
      if (token) {
        config.headers = {
          ...(config.headers ?? {}),
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        } as AxiosRequestHeaders;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  return instance;
}

export const virtuosoServer = createAuthClient(
  process.env.NEXT_PUBLIC_AUTH_HOST!
);
export const livestreamServer = createAuthClient(
  process.env.NEXT_PUBLIC_LIVESTREAM_HOST!
);
export const uploadServer = createAuthClient(
  process.env.NEXT_PUBLIC_UPLOAD_HOST!
);

export const virtuosoServerUnauth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AUTH_HOST,
});

export const s3Upload = axios.create();

export const searchServer = axios.create({ baseURL: '/api' });

export default virtuosoServer;
