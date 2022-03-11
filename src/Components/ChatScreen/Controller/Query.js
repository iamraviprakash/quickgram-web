import gql from 'graphql-tag';

export const getChatQuery = gql`
  query getChatQuery($filter: ChatFilterInput) {
    chatQuery {
      chats(filter: $filter) {
        id
        name
        type
        messages {
          id
          content
          createdAt
          createdBy {
            id
          }
        }
      }
    }
  }
`;
