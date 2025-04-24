import { GraphQLClient } from 'graphql-request';

const endpoint = `${process.env.NEXT_PUBLIC_AWS_APPSYNC_API_ENDPOINT}`;

export const graphQLClient = new GraphQLClient(endpoint);

export const gql = async (query: any, variables = {}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AWS_APPSYNC_API_ENDPOINT}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.APPSYNC_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );
  return response.json();
};
