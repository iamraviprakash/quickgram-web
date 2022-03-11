import gql from 'graphql-tag';

export const createMessageMutation = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    messageMutation {
      createMessage(input: $input) {
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
  }
`;
