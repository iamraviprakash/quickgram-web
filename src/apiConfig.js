import { QueryClient, QueryClientProvider } from 'react-query';
import { GraphQLClient } from 'graphql-request';

// API endpoint
export const API_ENDPOINT =
  'https://glitchgram-server.herokuapp.com/graphql';

// Create DataProvider Context
export const DataProvider = QueryClientProvider;

// Create Data Provider Client
export const dataClient = new QueryClient();

// Create GraphQL Client
export const graphQLClient = new GraphQLClient(API_ENDPOINT);
