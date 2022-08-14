import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { BsCheckAll } from 'react-icons/bs';

const Feed = ({ messages }) => {
  return (
    <div className="flex flex-col py-4 px-48 grow overflow-y-scroll gap-y-2">
      {_.map(messages, (message) => {
        const messageClass = classNames('flex', {
          'justify-start': message.createdBy.id !== '3',
          'justify-end': message.createdBy.id === '3',
        });

        const messageDateTime = new Date(parseInt(message.createdAt));

        return (
          <div key={message.id} className={messageClass}>
            <div className="flex flex-col p-4 bg-white rounded-lg max-w-xs">
              <div className="self-start">{message.content}</div>
              <div className="flex self-end items-center gap-1">
                <div className="text-neutral-600 text-sm">
                  {messageDateTime.getHours()}:
                  {messageDateTime.getMinutes()}
                </div>
                <BsCheckAll />
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
