import gql from 'graphql-tag';

export const createRoomMutation = gql`
  mutation CreateRoomMutation($input: CreateChatInput!) {
    chatMutation {
      createChat(input: $input) {
        id
        name
        code
        users {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const createUserMutation = gql`
  mutation CreateUserMutation($input: CreateUserInput!) {
    userMutation {
      createUser(input: $input) {
        id
        firstName
        lastName
      }
    }
  }
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
