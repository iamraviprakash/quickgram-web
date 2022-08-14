import React from 'react';
import Header from './Components/Header';
import Feed from './Components/Feed';
import Footer from './Components/Footer';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useMutation, useUserState } from '@/CustomHooks';
import { createMessageMutation } from './Controller/Mutation';

const ChatScreen = ({ chat }) => {
  const [createMessageResult, createMessage] = useMutation({
    query: createMessageMutation,
  });
  const [userState] = useUserState();

  const messages = _.get(chat, 'messages', []);

  return (
    <div className="flex flex-col h-screen bg-neutral-200">
      <Header title={chat.name} />
      <Feed messages={messages} />
      <Footer
        sendMessage={async ({ content }) => {
          await createMessage({
            input: {
              chatId: chat.id,
              content,
              createdBy: userState.id,
              contentType: 'TEXT',
            },
          });
        }}
      />
    </div>
  );
};

ChatScreen.propTypes = {
  chat: PropTypes.object,
};

export default ChatScreen;
