import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'baseui/avatar';

const SidebarItem = ({ item }) => {
  return (
    <div className="grid p-4 rounded-lg grid-cols-[1fr_16px] hover:bg-neutral-100 items-center">
      <div className="grid gap-x-4 grid-cols-[min-content_1fr]">
        <Avatar name={item.title} size={'scale1200'} />
        <div className="grid grid-flow-row auto-rows-min">
          <div className="font-bold text-ellipsis whitespace-nowrap overflow-hidden">
            {item.title}
          </div>
          <div className="text-ellipsis whitespace-nowrap overflow-hidden">
            {item.subtitle}
          </div>
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
