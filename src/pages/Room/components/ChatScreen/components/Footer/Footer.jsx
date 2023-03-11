import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';
import { Input } from 'baseui/input';
import { Button, SHAPE } from 'baseui/button';

const Footer = (props) => {
  const { sendMessage } = props;
  const [content, setContent] = useState('');

  const handleSendMessage = () => {
    sendMessage({ content }).then(() => {
      setContent('');
    });
  };

  return (
    <div className="flex py-4 px-48 mb-8 gap-2 items-center">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Message"
        clearOnEscape
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              display: 'flex',
              flexGrow: 1,
              borderRadius: '8px',
            }),
          },
          Input: {
            style: ({ $theme }) => ({
              backgroundColor: 'white',
            }),
          },
        }}
      />
      <Button
        onClick={handleSendMessage}
        shape={SHAPE.circle}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              width: '48px',
              height: '48px',
            }),
          },
        }}
      >
        <FiSend size={'16'} />
      </Button>
    </div>
  );
};

Footer.propTypes = {
  sendMessage: PropTypes.func,
};

export default Footer;
