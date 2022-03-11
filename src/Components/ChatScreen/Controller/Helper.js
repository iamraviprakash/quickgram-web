import _ from 'lodash';

export const getChatsFromQuery = ({ data }) => {
  return _.get(data, 'chatQuery.chats', []);
};
