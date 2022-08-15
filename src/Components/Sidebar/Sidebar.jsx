import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'baseui/tabs';
import Feed from './Components/Feed';
import Settings from './Components/Settings';

const Sidebar = ({ itemList, onItemClick }) => {
  const [activeKey, setActiveKey] = useState('0');

  return (
    <div
      className={'flex flex-col h-screen border-r border-neutral-200'}
    >
      <div
        className={
          'flex font-bold text-2xl flex-none p-4 border-neutral-200 h-20 justify-center items-center'
        }
      >
        QuickGram
      </div>
      <div className="flex flex-col grow overflow-y-hidden">
        <Tabs
          onChange={({ activeKey }) => {
            setActiveKey(activeKey);
          }}
          activeKey={activeKey}
          overrides={{
            Root: {
              style: ({ $theme }) => ({
                width: '100%',
                height: '100%',
              }),
            },
            Tab: {
              style: ({ $theme }) => ({
                width: '100%',
                textAlign: 'center',
              }),
            },
            TabContent: {
              style: ({ $theme }) => ({
                height: '100%',
                overflowY: 'scroll',
                padding: '1rem 2rem',
              }),
            },
          }}
        >
          <Tab title="Members">
            <Feed itemList={itemList} />
          </Tab>
          <Tab title="Room Details">
            <Settings />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  itemList: PropTypes.array,
  activeItemId: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default Sidebar;
