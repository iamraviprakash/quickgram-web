import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FiCopy } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button, SHAPE } from 'baseui/button';
import { useSearchParams } from 'react-router-dom';
import { toaster, ToasterContainer } from 'baseui/toast';

import { useMutation, useUserState } from '@/hooks';
import { deleteRoomMutation } from '../../controllers/Mutation';
import { getRoomUrl } from '@/Utils';

const Settings = ({ roomId, setLoader }) => {
  const [userState, setUserState] = useUserState();

  const [createRoomResult, deleteRoom] = useMutation({
    query: deleteRoomMutation,
  });

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const roomCode = searchParams.get('room_code');

  const copyToClipboard = (e) => {
    const roomUrl = getRoomUrl({
      roomCode,
    });

    navigator.clipboard.writeText(roomUrl);
    toaster.info('Copied to clipboard');
  };

  const onDeleteRoom = async () => {
    setLoader(true);

    await deleteRoom({
      id: roomId,
    }).then(() => {
      setUserState(() => ({
        id: null,
        roomId: null,
        roomCode: null,
        setupStatus: 'ENTER_NAME',
      }));

      navigate('/', { replace: true });
    });

    setLoader(false);
  };

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
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center p-4 font-medium">
          Copy room link
          <Button
            shape={SHAPE.circle}
            onClick={copyToClipboard}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '36px',
                  height: '36px',
                }),
              },
            }}
          >
            <FiCopy size={16} />
          </Button>
        </div>
        <hr />
        <div className="flex p-4">
          <Button
            endEnhancer={() => <RiDeleteBin6Line size={24} />}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: '100%',
                }),
              },
            }}
            onClick={onDeleteRoom}
          >
            Delete the room
          </Button>
        </div>
      </div>
    </>
  );
};

Settings.propTypes = {
  roomId: PropTypes.string,
  setLoader: PropTypes.func,
};

export default Settings;
