import React, { useState, useEffect } from 'react';
import { Input } from 'baseui/input';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { toaster, ToasterContainer } from 'baseui/toast';
import { Button } from 'baseui/button';

import { useUserState } from '@/CustomHooks';
import { getRoomUrl } from '@/Utils';

import RoomCode from '../RoomCode';

const CreateRoom = (props) => {
  const {
    onClickNext,
    onClickBack,
    roomCodeArray,
    setRoomCodeArray,
  } = props;

  const [roomName, setRoomName] = useState('');
  const [userState] = useUserState();

  useEffect(() => {
    if (userState.roomCode) {
      setRoomCodeArray(_.split(userState.roomCode, ''));
    }
  }, []);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(e.target.innerHTML);
    toaster.info('Copied to clipboard');
  };

  const roomUrl = getRoomUrl({
    roomCode: roomCodeArray.join(''),
  });

  return (
    <>
      <ToasterContainer
        autoHideDuration={1500}
        overrides={{
          ToastBody: {
            style: ({ $theme }) => ({
              backgroundColor: 'black',
            }),
          },
        }}
      />
      <div className="font-semibold text-xl mb-4 text-left w-full">
        Room Details
      </div>
      <div className="flex gap-4 w-full flex-col items-center py-4">
        <div className="w-full">
          <Input
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            clearOnEscape
            placeholder={'Enter room name'}
          />
        </div>
        <div className="flex w-full border-t-2" />
        <RoomCode values={roomCodeArray} disabled />
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex text-center font-semibold">
            Copy the link to share
          </div>
          <div
            className="p-4 w-full text-center bg-gray-100 font-medium cursor-grab text-sm text-gray-500"
            onClick={copyToClipboard}
          >
            {roomUrl}
          </div>
        </div>
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
          onClick={() =>
            onClickNext({ payload: { roomName: _.trim(roomName) } })
          }
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

CreateRoom.propTypes = {
  onClickBack: PropTypes.func.isRequired,
  onClickNext: PropTypes.func.isRequired,
  roomCodeArray: PropTypes.array.isRequired,
  setRoomCodeArray: PropTypes.func.isRequired,
};

export default CreateRoom;
