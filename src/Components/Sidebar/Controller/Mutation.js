import gql from 'graphql-tag';

export const deleteRoomMutation = gql`
  mutation DeleteRoomMutation($id: ID!) {
    chatMutation {
      deleteChat(id: $id) {
        id
      }
    }
  }
`;
