import React from 'react';
import _ from 'lodash';
import { Room } from '../Components';

const RootComponent = () => {
  const [chatId] = useQueryParam('room_code', StringParam);

  return !_.isEmpty(chatId) && <Room chatId={chatId} />;
};

export default RootComponent;
