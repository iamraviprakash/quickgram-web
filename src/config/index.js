import QueryClientManger from './QueryClientManager.js';
import QueryClientProvider from './QueryClientProvider';
import { API_ENDPOINT, SUBSCRIPTION_API_ENDPOINT } from '@/Constants';
import StyleProvider from './StyleProvider';

// Instantiate Query Client Manager
const queryClientManager = new QueryClientManger({
  url: API_ENDPOINT,
  subscriptionUrl: SUBSCRIPTION_API_ENDPOINT,
});

// Create Query Client
queryClientManager.createClient();
const client = queryClientManager.getClient();

export { client as queryClient, QueryClientProvider, StyleProvider };
