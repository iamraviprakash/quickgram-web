import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Feed = ({ messages }) => {
  return (
    <div className="flex flex-col py-4 px-48 grow overflow-y-scroll gap-y-2">
      {_.map(messages, (message) => {
        const messageClass = classNames('flex', {
          'justify-start': message.author !== 'me',
          'justify-end': message.author === 'me',
        });

        return (
          <div key={message.id} className={messageClass}>
            <div className="flex flex-col p-4 bg-white rounded-lg max-w-xs">
              <div className="self-start">{message.content}</div>
              <div className="self-end text-neutral-600 text-sm">
                {'11:49'}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Feed.propTypes = {
  messages: PropTypes.array,
};

export default Feed;
