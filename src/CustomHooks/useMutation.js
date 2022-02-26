import { useMutation } from 'react-query';
import { graphQLClient } from '../apiConfig';

export default function _useMutation(query) {
  return useMutation(async (variables) => {
    const result = await graphQLClient
      .request(query, { input: variables })
      .catch((error) => {
        console.error(error);
      });

    return result;
  });
}
