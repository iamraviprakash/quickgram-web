import React from 'react';
import _ from 'lodash';
import { useQuery } from 'CustomHooks';
import { getChatsQuery } from './Controller/Query';
import { Sidebar, ChatScreen } from '../Components';
import { getChatsFromQuery } from './Controller/Helper';
import { useQueryParam, StringParam } from 'use-query-params';

const RootComponent = () => {
  const [chatId] = useQueryParam('room_code', StringParam);

  const [{ data, isLoading }] = useQuery({
    query: getChatsQuery,
    variables: {
      filter: {
        ids: [chatId],
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

export default RootComponent;
