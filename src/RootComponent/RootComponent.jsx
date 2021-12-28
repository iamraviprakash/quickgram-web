import React, { useState } from 'react';
import { Sidebar, ChatScreen } from '../Components';
import _ from 'lodash';

const SIDEBAR_ITEMS = [
  {
    id: 1,
    name: 'Home',
    messages: [
      {
        id: 1,
        content:
          'I am home!! Lorem Ipsum has been the industrys standard dummy',
        author: 'me',
      },
      {
        id: 2,
        content: 'I am home!!',
        author: 'other',
      },
      {
        id: 3,
        content: 'I am home!!',
        author: 'other',
      },
    ],
  },
  {
    id: 2,
    name: 'Home 2',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 3,
    name: 'Home 3',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'other',
      },
    ],
  },
  {
    id: 4,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'other',
      },
    ],
  },
  {
    id: 5,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 6,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 7,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 8,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 9,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 10,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 11,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
  {
    id: 12,
    name: 'Home',
    messages: [
      {
        id: 1,
        content: 'I am home!!',
        author: 'me',
      },
    ],
  },
];

const RootComponent = () => {
  const [activeChatId, setActiveChatId] = useState(null);

  const chat = _.find(SIDEBAR_ITEMS, { id: activeChatId });

  return (
    <div className="grid grid-cols-[480px_1fr] h-screen font-sans">
      <Sidebar
        itemList={SIDEBAR_ITEMS}
        activeItemId={activeChatId}
        onItemClick={setActiveChatId}
      />
      {!_.isEmpty(chat) ? (
        <ChatScreen chat={chat} />
      ) : (
        <div className="h-screen bg-neutral-100"></div>
      )}
    </div>
  );
};

export default RootComponent;
