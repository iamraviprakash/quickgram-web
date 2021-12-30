import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from './components/Footer';

import PropTypes from 'prop-types';

const ChatScreen = ({ chat }) => {
  return (
    <div className="flex flex-col h-screen bg-neutral-200">
      <Header title={chat.name} />
      <Feed messages={chat.messages} />
      <Footer />
    </div>
  );
};

ChatScreen.propTypes = {
  chat: PropTypes.object,
};

export default ChatScreen;
