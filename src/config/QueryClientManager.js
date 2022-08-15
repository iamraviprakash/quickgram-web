import { Client, defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';

class QueryClientManger {
  static clientCount = 0;

  constructor({ url, subscriptionUrl }) {
    this.url = url;
    this.subscriptionUrl = subscriptionUrl;
    this.client = null;
  }

  createClient = () => {
    if (QueryClientManger.clientCount == 0) {
      const subscriptionClient = new SubscriptionClient(
        this.subscriptionUrl,
        { reconnect: true },
        WebSocket,
      );

      this.client = new Client({
        url: this.url,
        exchanges: [
          ...defaultExchanges,
          subscriptionExchange({
            forwardSubscription: (operation) =>
              subscriptionClient.request(operation),
          }),
        ],
      });

      QueryClientManger.clientCount++;
    }
  };

  getClient = () => {
    return this.client;
  };

  destroyClient = () => {
    this.client = null;
    QueryClientManger.clientCount--;
  };
}

export default QueryClientManger;
