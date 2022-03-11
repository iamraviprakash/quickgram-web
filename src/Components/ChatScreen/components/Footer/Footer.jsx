import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const { sendMessage } = props;
  const [content, setContent] = useState('');

  const handleSendMessage = () => {
    sendMessage({ content }).then(() => {
      setContent('');
    });
  };

  return (
    <div className="flex py-4 px-48 mb-8 gap-2">
      <input
        type="text"
        placeholder="Message"
        value={content}
        className="flex grow rounded-lg p-4 focus:outline-none"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-neutral-500 text-white px-4 py-2 rounded-full"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  );
};

Footer.propTypes = {
  sendMessage: PropTypes.func,
};

export default Footer;
