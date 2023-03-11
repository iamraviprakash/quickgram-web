import gql from 'graphql-tag';
import { userFragment } from '@/controllers/Fragment';

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
        code
        users {
          ...userBasicDetails
        }
        messages {
          id
          content
          createdAt
          createdBy {
            ...userBasicDetails
          }
        }
      }
    }
  }
  ${userFragment.basicDetails}
`;
