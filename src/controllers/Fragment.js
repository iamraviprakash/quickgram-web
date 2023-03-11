import gql from 'graphql-tag';

export const userFragment = {
  basicDetails: gql`
    fragment userBasicDetails on User {
      id
      firstName
      lastName
    }
  `,
};
