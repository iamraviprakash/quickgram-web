import { useMutation } from 'urql';

export default function _useMutation({ query }) {
  return useMutation(query);
}
