import { useSubscription } from 'urql';

export default function _useSubscription(...variables) {
  return useSubscription(...variables);
}
