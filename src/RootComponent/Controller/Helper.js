import _ from 'lodash';

export const getUsersFromQuery = ({ data }) => {
  return _.get(data, 'userQuery.users', []);
};
