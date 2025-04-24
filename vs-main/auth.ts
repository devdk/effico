import { jwtDecode } from 'jwt-decode';
import NextAuth, { CredentialsSignin, DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

class UserNotConfirmedError extends CredentialsSignin {
  code = 'UserNotConfirmedException';
}

class NotAuthorizedException extends CredentialsSignin {
  code = 'NotAuthorizedException';
}

class UserNotFoundException extends CredentialsSignin {
  code = 'UserNotFoundException';
}

async function refreshAccessToken(token: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_HOST}/api/auth/refresh-token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token.refreshToken,
      }),
    }
  );

  const response = await res.json();
  const { data: user } = response;
  console.log({ user });
  if (user) {
    return {
      ...token,
      // sub: token.sub,
      accessToken: user.AuthenticationResult.AccessToken,
      exp: user.AuthenticationResult.ExpiresIn,
    };
  }

  return user || token;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async (credentials) => {
        console.log({ credentials, host: process.env.NEXT_PUBLIC_AUTH_HOST });

        let res = await fetch(
          `${process.env.NEXT_PUBLIC_AUTH_HOST}/api/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          }
        );
        let response = await res.json();
        console.log({ response });

        if (response.errorCode === 'UserNotConfirmedException') {
          throw new UserNotConfirmedError();
        }

        if (response.errorCode === 'NotAuthorizedException') {
          throw new NotAuthorizedException();
        }

        if (response.errorCode === 'UserNotFoundException') {
          throw new UserNotFoundException();
        }

        let { data } = response;
        return data || null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    async authorized({ auth }) {
      return !!auth;
    },
    async jwt({ token, user }: { token: any; user: any }) {
      try {
        if (user) {
          return {
            ...token,
            accessToken: user.AuthenticationResult.AccessToken,
            refreshToken: user.AuthenticationResult.RefreshToken,
            exp: user.AuthenticationResult.ExpiresIn,
          };
        }

        const jwtInfo = jwtDecode(token.accessToken);

        if (!jwtInfo.exp) return null;
        if (jwtInfo && Date.now() < jwtInfo.exp * 1000) {
          return token;
        }

        console.log({ invalid: true });
        return refreshAccessToken(token);
      } catch (e) {
        console.log('jwt err', e);
      }
    },

    async session({ session, token }: { session: any; token: any }) {
      try {
        const jwtInfo = jwtDecode(token.accessToken);

        let getUserResponse = await fetch(
          process.env.NEXT_PUBLIC_AWS_APPSYNC_API_ENDPOINT!,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': process.env.APPSYNC_API_KEY!,
            },
            body: JSON.stringify({
              query: `
              query getUser($sub: String!){
                user: getUser(sub: $sub) {
                  avatar
                  name
                  email
                  sub
                  stripeCustomerId
                  subscriptionStatus
                  subscriptionId
                }
              }`,
              variables: {
                sub: jwtInfo.sub,
              },
            }),
          }
        );

        const getUserResponseJSON = await getUserResponse.json();
        let { data } = getUserResponseJSON;
        session.user.accessToken = token.accessToken as string;
        session.user.refreshToken = token.refreshToken as string;
        session.user.sub = data?.user?.sub;
        session.user.name = data?.user?.name;
        session.user.email = data?.user?.email;
        session.user.username = data?.user?.username;
        session.user.avatar = data?.user?.avatar;
        session.user.stripeCustomerId = process.env.NEXT_PUBLIC_PRODUCTION_MODE
          ? data?.user?.stripeCustomerId
          : 'cus_PEYPxLl91gsI0p'; // extra config for the test mode
        session.user.subscription = data?.user?.subscription;
        return session;
      } catch (error) {
        console.log('Error occured when configuring the session');
        console.log(error);
      }
    },
  },
});

declare module 'next-auth' {
  interface Session {
    user: {
      sub: string;
      username: string;
      avatar: string;
      stripeCustomerId: string;
      subscription: string;
      accessToken: string;
      refreshToken: string;
    } & DefaultSession['user'];
  }
}
