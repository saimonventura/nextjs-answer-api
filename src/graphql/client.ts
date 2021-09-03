import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URI,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_TOKEN}`,
  },
});

// Setup your client
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
});
