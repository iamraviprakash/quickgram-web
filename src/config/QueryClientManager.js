import { createClient } from 'urql';

class QueryClientManger {
  static clientCount = 0;

  constructor({ url }) {
    this.url = url;
    this.client = null;
  }

  createClient = () => {
    if (QueryClientManger.clientCount == 0) {
      this.client = createClient({
        url: this.url,
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
