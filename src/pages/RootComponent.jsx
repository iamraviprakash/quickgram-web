import React, { useEffect } from 'react';
import Room from './Room';
import RoomSetup from './RoomSetup';

import { useSearchParams } from 'react-router-dom';

import { useUserState } from '@/hooks';

const RootComponent = () => {
  const [searchParams] = useSearchParams();
  const roomCode = searchParams.get('room_code');

  const [userState, setUserState] = useUserState({
    id: null,
    roomId: null,
    roomCode: null,
    setupStatus: 'ENTER_NAME',
  });

  useEffect(() => {
    if (roomCode) {
      setUserState((prevState) => {
        return {
          ...prevState,
          roomCode,
        };
      });
    }
  }, []);

  const setupStatus = userState.setupStatus;

  return setupStatus == 'COMPLETED' ? (
    <Room />
  ) : (
    <RoomSetup initSetupStatus={setupStatus} />
  );
};

export default RootComponent;
