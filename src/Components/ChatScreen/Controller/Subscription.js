import gql from 'graphql-tag';

export const messageAddedSubscription = gql`
  subscription MessageAddedSubscription($chatId: ID!) {
    messageAdded(chatId: $chatId) {
      id
      content
      contentType
      createdBy {
        id
        firstName
      }
      createdAt
    }
  }
`;
