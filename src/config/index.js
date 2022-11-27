import QueryClientManger from './QueryClientManager.js';
import QueryClientProvider from './QueryClientProvider';
import {
  API_ENDPOINT,
  SUBSCRIPTION_API_ENDPOINT,
  POSTHOG_API_ENDPOINT,
} from '@/Constants';
import StyleProvider from './StyleProvider';
import posthog from 'posthog-js';

// Initiate Post Hog
posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
  api_host: POSTHOG_API_ENDPOINT,
});

// Instantiate Query Client Manager
const queryClientManager = new QueryClientManger({
  url: API_ENDPOINT,
  subscriptionUrl: SUBSCRIPTION_API_ENDPOINT,
});

// Create Query Client
queryClientManager.createClient();
const client = queryClientManager.getClient();

export { client as queryClient, QueryClientProvider, StyleProvider };
