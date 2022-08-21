import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'baseui/tabs';
import _ from 'lodash';

import { useSubscription } from '@/CustomHooks';
import Feed from './Components/Feed';
import Settings from './Components/Settings';
import { userAddedSubscription } from './Controller/Subscription';

const handleSubscription = (users = [], response) => {
  return response ? [response.userAdded] : [];
};

const Sidebar = ({ chat, setLoader }) => {
  const [activeKey, setActiveKey] = useState('0');
  const [users, setUsers] = useState([]);

  const [{ data: usersAdded = [] }] = useSubscription(
    { query: userAddedSubscription, variables: { chatId: chat.id } },
    handleSubscription,
  );

  useEffect(() => {
    setUsers((prevState) => {
      return _.get(chat, 'users', []);
    });
  }, []);

  useEffect(() => {
    if (!_.isEmpty(usersAdded)) {
      setUsers((prevState) => {
        return [...usersAdded, ...prevState];
      });
    }
  }, [usersAdded]);

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
            <Feed itemList={users} />
          </Tab>
          <Tab title="Room Details">
            <Settings roomId={chat.id} setLoader={setLoader} />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  chat: PropTypes.object,
  setLoader: PropTypes.func,
};

export default Sidebar;
