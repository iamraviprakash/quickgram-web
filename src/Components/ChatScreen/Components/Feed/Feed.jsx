import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
import MessageBubble from '../MessageBubble';

const Feed = ({ messages, userId, membersCount }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({
      top: ref.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div
      ref={ref}
      className="flex flex-col py-4 px-48 grow overflow-y-scroll gap-y-2"
    >
      {_.map(messages, (message) => {
        const isMessageByUser = message.createdBy.id === userId;

        const messageClass = classNames('flex', {
          'justify-start': !isMessageByUser,
          'justify-end': isMessageByUser,
        });

        const showMemberName = !isMessageByUser && membersCount > 2;

        return (
          <div key={message.id} className={messageClass}>
            <MessageBubble
              message={message}
              showMemberName={showMemberName}
            />
          </div>
        );
      })}
    </div>
  );
};

Feed.propTypes = {
  messages: PropTypes.array,
  userId: PropTypes.string,
  membersCount: PropTypes.number,
};

export default Feed;
