import React from 'react';
import PropTypes from 'prop-types';
import { Badge, SHAPE } from 'baseui/badge';
import { Avatar } from 'baseui/avatar';

const Header = ({ title }) => {
  return (
    <div className="p-4 bg-white grid grid-cols-[min-content_1fr] border-b border-neutral-200 gap-x-4">
      <Avatar name={title} size={'scale1200'} />
      <div className="grid">
        <div className="font-bold">{title}</div>
        <div className="text-neutral-600">
          {'8 members online '}
          <Badge content="TBD" shape={SHAPE.pill} />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
