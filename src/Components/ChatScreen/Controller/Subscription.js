import gql from 'graphql-tag';
import { userFragment } from '@/CommonController/Fragment';

export const messageAddedSubscription = gql`
  subscription MessageAddedSubscription($chatId: ID!) {
    messageAdded(chatId: $chatId) {
      id
      content
      contentType
      createdBy {
        ...userBasicDetails
      }
      createdAt
    }
  }
  ${userFragment.basicDetails}
`;
