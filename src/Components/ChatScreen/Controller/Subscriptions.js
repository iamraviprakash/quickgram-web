import gql from 'graphql-tag';

export const newMessageSubscription = gql`
  subscription NewMessageSubscription {
    newMessage {
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
