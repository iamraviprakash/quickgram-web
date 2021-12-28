import React from 'react';
import _ from 'lodash';
import SidebarItem from '../SidebarItem';
import PropTypes from 'prop-types';

const Sidebar = ({ itemList, activeItemId, onItemClick }) => {
  return (
    <div
      className={'flex flex-col h-screen border-r border-neutral-200'}
    >
      <div
        className={
          'flex py-8 px-4 font-bold text-2xl flex-none border-b border-neutral-200 p-4'
        }
      >
        Glitchgram
      </div>
      <div
        className={'flex flex-col overflow-y-scroll grow p-4 gap-y-2'}
      >
        {_.map(itemList, (item) => {
          const updateItem = {
            title: item.name,
            subtitle: _.get(item, 'messages[0].content', ''),
          };
          return (
            <SidebarItem
              key={item.id}
              item={updateItem}
              onItemClick={() => onItemClick(item.id)}
              isActive={item.id == activeItemId}
            />
          );
        })}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  itemList: PropTypes.array,
  activeItemId: PropTypes.number,
  onItemClick: PropTypes.func,
};

export default Sidebar;
