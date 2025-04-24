export const GET_USER = `
  query getUser($sub: String!){
    user: getUser(sub: $sub) {
      sub
      email
      name
      stripeCustomerId
      subscriptionStatus
      subscriptionId
    }
  }`;
