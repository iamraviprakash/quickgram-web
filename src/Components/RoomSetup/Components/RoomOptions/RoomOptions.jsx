import React from 'react';
import { Button } from 'baseui/button';
import {
  AiOutlineUsergroupAdd,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import PropTypes from 'prop-types';

const RoomOptions = (props) => {
  const { memberName, onClickJoin, onClickCreate } = props;

  return (
    <>
      <div className="font-medium text-base mb-4 text-left w-full">
        Hi {memberName}! Would you like to
      </div>
      <Button
        onClick={onClickCreate}
        startEnhancer={() => <AiOutlineUsergroupAdd size={24} />}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              width: '100%',
            }),
          },
        }}
      >
        Create a room
      </Button>
      <Button
        onClick={onClickJoin}
        startEnhancer={() => <AiOutlineArrowRight size={24} />}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              width: '100%',
            }),
          },
        }}
      >
        Join a Room
      </Button>
    </>
  );
};

RoomOptions.propTypes = {
  memberName: PropTypes.string.isRequired,
  onClickCreate: PropTypes.func.isRequired,
  onClickJoin: PropTypes.func.isRequired,
};

export default RoomOptions;
