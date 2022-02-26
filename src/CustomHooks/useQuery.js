import { useQuery } from 'react-query';
import { graphQLClient } from '../apiConfig';

export default function _useQuery(query, variables = {}) {
  return useQuery([query, variables], async () => {
    const data = await graphQLClient
      .request(query, variables)
      .catch((error) => {
        console.error(error);
      });

    return data;
  });
}
