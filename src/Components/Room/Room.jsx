import React, { useState } from 'react';
import _ from 'lodash';
import { Spinner, SIZE } from 'baseui/spinner';

import { useQuery, useUserState } from '@/CustomHooks';
import { getChatsQuery } from './Controller/Query';
import Sidebar from '../Sidebar';
import ChatScreen from '../ChatScreen';
import { getChatsFromQuery } from './Controller/Helper';

const Room = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [userState] = useUserState({
    id: null,
    roomCode: null,
  });

  const [{ data, fetching }] = useQuery({
    query: getChatsQuery,
    variables: {
      filter: {
        codes: userState.roomCode,
      },
    },
  });

  const chats = getChatsFromQuery({ data });
  const chat = _.get(chats, '0', {});

  return isLoading || fetching || _.isEmpty(chat) ? (
    <div className="grid place-items-center h-screen w-screen">
      <Spinner $size={SIZE.large} />
    </div>
  ) : (
    <div className="grid grid-cols-[1fr_400px] h-screen font-sans">
      <ChatScreen chat={chat} />
      <Sidebar chat={chat} setLoader={setIsLoading} />
    </div>
  );
};

export default Room;
