import React from 'react';
import Header from './Components/Header';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useQuery, useMutation } from 'CustomHooks';
import { getChatsFromQuery } from './Controller/Helper';
import { createMessageMutation } from './Controller/Mutation';
import { getChatQuery } from './Controller/Query';

const ChatScreen = ({ chatId }) => {
  const { data, isLoading } = useQuery(getChatQuery, {
    filter: { ids: [chatId] },
  });
  const createMessage = useMutation(createMessageMutation);

  const chats = getChatsFromQuery({ data });
  const chat = _.find(chats, { id: chatId }) ?? {};
  const messages = _.get(chat, 'messages', []);

  return (
    <div className="flex flex-col h-screen bg-neutral-200">
      <Header title={chat.name} />
      {isLoading ? 'Loading...' : <Feed messages={messages} />}
      <Footer
        sendMessage={async ({ content }) => {
          await createMessage.mutate({
            chatId: chat.id,
            content,
            createdBy: '3',
            contentType: 'TEXT',
          });
        }}
      />
    </div>
  );
};

ChatScreen.propTypes = {
  chatId: PropTypes.string,
};

export default ChatScreen;
