import { useMutation } from 'react-query';
import { graphQLClient } from '../apiConfig';

export default function _useMutation(query) {
  return useMutation(async (variables) => {
    return graphQLClient.request(query, {
      input: variables,
    });
  });
}
