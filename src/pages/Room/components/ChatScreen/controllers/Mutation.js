import gql from 'graphql-tag';
import { userFragment } from '@/controllers/Fragment';

export const createMessageMutation = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    messageMutation {
      createMessage(input: $input) {
        id
        content
        contentType
        createdBy {
          ...userBasicDetails
        }
        createdAt
      }
    }
  }
  ${userFragment.basicDetails}
`;
