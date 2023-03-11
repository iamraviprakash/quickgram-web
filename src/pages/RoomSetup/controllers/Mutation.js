import gql from 'graphql-tag';
import { userFragment } from '@/controllers/Fragment';

export const createRoomMutation = gql`
  mutation CreateRoomMutation($input: CreateChatInput!) {
    chatMutation {
      createChat(input: $input) {
        id
        name
        code
        users {
          ...userBasicDetails
        }
      }
    }
  }
  ${userFragment.basicDetails}
`;

export const createUserMutation = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    userMutation {
      createUser(input: $input) {
        ...userBasicDetails
      }
    }
  }
  ${userFragment.basicDetails}
`;

export const updateRoomMutation = gql`
  mutation UpdateRoomMutation(
    $id: ID
    $code: String
    $input: UpdateChatInput!
  ) {
    chatMutation {
      updateChat(id: $id, code: $code, input: $input) {
        id
        name
        code
      }
    }
  }
`;
