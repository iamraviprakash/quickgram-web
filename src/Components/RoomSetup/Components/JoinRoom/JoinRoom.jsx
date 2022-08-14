import React, { useEffect, Fragment } from 'react';
import { Button } from 'baseui/button';
import PropTypes from 'prop-types';
import { Input } from 'baseui/input';
import _ from 'lodash';

import { useUserState } from 'CustomHooks';

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

  const setRoomCodeCharAt = ({ index, value }) => {
    setRoomCodeArray((prevState) => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  return (
    <>
      <div className="font-semibold text-xl mb-4 text-left w-full">
        Enter Room Code
      </div>
      <div className="flex gap-2 justify-center w-full py-4">
        {_.map(roomCodeArray, (item, index) => {
          return (
            <Fragment key={index}>
              <Input
                value={item}
                onChange={(e) =>
                  setRoomCodeCharAt({
                    index,
                    value: e.target.value,
                  })
                }
                clearOnEscape
                maxLength={1}
                overrides={{
                  Input: {
                    style: ({ $theme }) => ({
                      textAlign: 'center',
                    }),
                  },
                }}
              />
              {index == ROOM_CODE_SIZE / 2 - 1 && (
                <div className="flex items-center">{'-'}</div>
              )}
            </Fragment>
          );
        })}
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
