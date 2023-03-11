import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SidebarItem from '../SidebarItem';

const Feed = (props) => {
  const { itemList } = props;

  return (
    <div className="flex flex-col grow gap-1">
      {_.map(itemList, (item) => {
        const updateItem = {
          title: item.firstName + ' ' + item.lastName,
          subtitle: '',
        };

        return <SidebarItem key={item.id} item={updateItem} />;
      })}
    </div>
  );
};

Feed.propTypes = {
  itemList: PropTypes.array,
};

export default Feed;
