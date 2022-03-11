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
