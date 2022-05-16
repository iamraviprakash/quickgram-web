import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useQuery } from 'CustomHooks';
import { getUsersQuery } from './Controller/Query';
import { Sidebar, ChatScreen } from '../Components';
import { getUsersFromQuery } from './Controller/Helper';

const RootComponent = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [{ data, isLoading }] = useQuery({
    query: getUsersQuery,
    variables: {
      filter: {
        ids: ['3'],
      },
    },
  });
  const users = getUsersFromQuery({ data });
  const chats = _.get(users, '0.chats', []);

  useEffect(() => {
    const initialChatId = _.get(chats, '0.id', null);
    setActiveChatId(initialChatId);
  }, [chats]);

  const chat = _.find(chats, { id: activeChatId });

  return isLoading ? (
    'Loading...'
  ) : (
    <div className="grid grid-cols-[480px_1fr] h-screen font-sans">
      <Sidebar
        itemList={chats}
        activeItemId={activeChatId}
        onItemClick={setActiveChatId}
      />
      {!_.isEmpty(chat) ? (
        <ChatScreen chatId={chat.id} />
      ) : (
        <div className="h-screen bg-neutral-100"></div>
      )}
    </div>
  );
};

export default RootComponent;
