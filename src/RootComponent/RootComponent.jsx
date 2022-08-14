import React from 'react';
import _ from 'lodash';
import { useSearchParams } from 'react-router-dom';

const RootComponent = () => {
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get('room_code');

  return !_.isEmpty(chatId) && <Room chatId={chatId} />;
};

export default RootComponent;
