import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Avatar = ({ label }) => {
  return (
    <div
      className="flex justify-center items-center text-xl 
      font-bold h-12 w-12 rounded-full ring-2 ring-white 
      bg-neutral-200 text-neutral-800"
    >
      {_.upperCase(_.first(label))}
    </div>
  );
};

Avatar.propTypes = {
  label: PropTypes.string,
};

export default Avatar;
