import React from 'react';
import PropTypes from 'prop-types';
import { BsCheckAll } from 'react-icons/bs';

const MessageBubble = ({ message, showMemberName }) => {
  const messageDateTime = new Date(parseInt(message.createdAt));

  return (
    <div className="flex flex-col py-2 px-4 bg-white rounded-lg max-w-xs min-w-[200px]">
      {showMemberName && (
        <div className="self-start text-xs font-bold text-neutral-800 mb-2">
          {message.createdBy.firstName +
            ' ' +
            message.createdBy.lastName}
        </div>
      )}
      <div className="self-start">{message.content}</div>
      <div className="flex self-end items-center gap-1">
        <div className="text-neutral-600 text-xs">
          {messageDateTime.getHours()}:{messageDateTime.getMinutes()}
        </div>
        <BsCheckAll />
      </div>
    </div>
  );
};

MessageBubble.propTypes = {
  message: PropTypes.object,
  showMemberName: PropTypes.bool,
};

export default MessageBubble;
