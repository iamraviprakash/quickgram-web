import React from 'react';
import _ from 'lodash';

import { useQuery, useUserState } from '@/CustomHooks';
import { getChatsQuery } from './Controller/Query';
import Sidebar from '../Sidebar';
import ChatScreen from '../ChatScreen';
import { getChatsFromQuery } from './Controller/Helper';

const Room = () => {
  const [userState] = useUserState({
    id: null,
    roomCode: null,
  });

  const [{ data, isLoading }] = useQuery({
    query: getChatsQuery,
    variables: {
      filter: {
        codes: userState.roomCode,
      },
    },
  });

  const chats = getChatsFromQuery({ data });
  const chat = _.get(chats, '0', {});
  const chatUsers = _.get(chat, 'users', []);

  return isLoading ? (
    'Loading...'
  ) : (
    <div className="grid grid-cols-[1fr_400px] h-screen font-sans">
      {!_.isEmpty(chat) ? (
        <ChatScreen chat={chat} />
      ) : (
        <div className="h-screen bg-neutral-100"></div>
      )}
      <Sidebar itemList={chatUsers} />
    </div>
  );
};

export default Room;
