import React from 'react';
import _ from 'lodash';
import SidebarItem from '../SidebarItem';

const SIDEBAR_ITEMS = [
  {
    id: 1,
    title: 'Home',
    subtitle:
      'I am home!! Lorem Ipsum has been the industrys standard dummy',
  },
  {
    id: 2,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 3,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 4,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 5,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 6,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 7,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 8,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 9,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 10,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 11,
    title: 'Home',
    subtitle: 'I am home!!',
  },
  {
    id: 12,
    title: 'Home',
    subtitle: 'I am home!!',
  },
];

const Sidebar = () => {
  return (
    <div className={'flex flex-col h-screen'}>
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
        {_.map(SIDEBAR_ITEMS, (item) => {
          return (
            <SidebarItem
              key={item.id}
              item={item}
              isActive={item.id == 8}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
