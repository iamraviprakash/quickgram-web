import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '../Avatar';

const SidebarItem = ({ item, isActive, onItemClick }) => {
  const containerClass = classNames(
    'grid gap-x-4 grid-cols-[min-content_1fr] p-4 rounded-lg cursor-pointer',
    {
      'text-white': isActive,
      'bg-sky-500': isActive,
      'text-neutral-800': !isActive,
      'bg-white': !isActive,
      'hover:bg-neutral-100': !isActive,
    },
  );

  return (
    <div className={containerClass} onClick={onItemClick}>
      <Avatar label={item.title} />
      <div className="grid grid-flow-row auto-rows-min">
        <div className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {item.title}
        </div>
        <div className="text-ellipsis whitespace-nowrap overflow-hidden">
          {item.subtitle}
        </div>
      </div>
    </div>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  onItemClick: PropTypes.func,
};

export default SidebarItem;
