import React, { useEffect } from 'react';
import { Button } from 'baseui/button';
import PropTypes from 'prop-types';

import { useUserState } from '@/CustomHooks';

import RoomCode from '../RoomCode';

const ROOM_CODE_SIZE = 8;

const JoinRoom = (props) => {
  const {
    onClickBack,
    onClickNext,
    roomCodeArray,
    setRoomCodeArray,
  } = props;

  const [userState] = useUserState();

  useEffect(() => {
    if (userState.roomCode) {
      setRoomCodeArray(userState.roomCode.split(''));
    } else {
      setRoomCodeArray(Array(ROOM_CODE_SIZE).fill(''));
    }
  }, []);

  return (
    <>
      <div className="font-semibold text-xl mb-4 text-left w-full">
        Enter Room Code
      </div>
      <div className="flex gap-2 justify-center w-full py-4">
        <RoomCode
          values={roomCodeArray}
          onChange={(values) => setRoomCodeArray(values)}
        />
      </div>
      <div className="flex gap-2 w-full">
        <Button
          onClick={onClickBack}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: '50%',
              }),
            },
          }}
        >
          Back
        </Button>
        <Button
          onClick={onClickNext}
          overrides={{
            BaseButton: {
              style: ({ $theme }) => ({
                width: '50%',
              }),
            },
          }}
        >
          Join
        </Button>
      </div>
    </>
  );
};

JoinRoom.propTypes = {
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  roomCodeArray: PropTypes.array.isRequired,
  setRoomCodeArray: PropTypes.func.isRequired,
};

export default JoinRoom;
