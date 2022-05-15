import QueryClientManger from './QueryClientManager.js';
import QueryClientProvider from './QueryClientProvider';
import { API_ENDPOINT } from '../constants';

// Instantiate Query Client Manager
const queryClientManager = new QueryClientManger({
  url: API_ENDPOINT,
});

// Create Query Client
queryClientManager.createClient();
const client = queryClientManager.getClient();

export { client as queryClient, QueryClientProvider };
