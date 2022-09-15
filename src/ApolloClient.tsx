import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'localhost:3002',
  cache: new InMemoryCache(),
});

export default apolloClient;