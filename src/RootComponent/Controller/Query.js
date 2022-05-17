import gql from 'graphql-tag';

export const getUsersQuery = gql`
  query getUsersQuery($filter: UserFilterInput) {
    userQuery {
      users(filter: $filter) {
        id
        firstName
        lastName
        chats {
          id
          name
        }
      }
    }
  }
`;

export const getChatsQuery = gql`
  query getChatsQuery($filter: ChatFilterInput) {
    chatQuery {
      chats(filter: $filter) {
        id
        name
        type
        users {
          id
          firstName
          lastName
        }
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
