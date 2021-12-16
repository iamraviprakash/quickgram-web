import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const SidebarItem = ({ item, isActive }) => {
  const containerClass = classNames(
    'grid grid-cols-5 p-4 rounded-lg',
    {
      'text-white': isActive,
      'bg-sky-500': isActive,
      'text-neutral-800': !isActive,
      'bg-white': !isActive,
      'hover:bg-neutral-100': !isActive,
    },
  );

  return (
    <div className={containerClass}>
      <div className="col-span-1">
        <div
          className="flex justify-center items-center text-xl 
        font-bold h-12 w-12 rounded-full ring-2 ring-white 
        bg-neutral-200 text-neutral-800"
        >
          {_.upperCase(_.first(item.title))}
        </div>
      </div>
      <div className="grid col-span-4 grid-flow-row auto-rows-min">
        <div className="row-span-1 font-bold text-ellipsis whitespace-nowrap overflow-hidden">
          {item.title}
        </div>
        <div className="row-span-1 text-ellipsis whitespace-nowrap overflow-hidden">
          {item.subtitle}
        </div>
      </div>
    </div>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
};

export default SidebarItem;
