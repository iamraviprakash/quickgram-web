import gql from 'graphql-tag';

export const userAddedSubscription = gql`
  subscription UserAddedSubscription($chatId: ID!) {
    userAdded(chatId: $chatId) {
      id
      firstName
      lastName
    }
  }
`;
