import { useQuery } from 'urql';

export default function _useQuery({ query, variables = {}, config }) {
  return useQuery({ query, variables, ...config });
}
