import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner, SIZE } from 'baseui/spinner';

import { getRoomPath } from '@/Utils';

import CreateRoom from './Components/CreateRoom';
import JoinRoom from './Components/JoinRoom';
import RoomOptions from './Components/RoomOptions';
import EnterName from './Components/EnterName';

import { useMutation, useUserState } from '@/CustomHooks';
import {
  createRoomMutation,
  createUserMutation,
  updateRoomMutation,
} from './Controller/Mutation';

const RoomSetup = (props) => {
  const { initSetupStatus } = props;

  const [isLoading, setIsLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(null);
  const [roomCodeArray, setRoomCodeArray] = useState([]);
  const [memberName, setMemberName] = useState('');

  const [userState, setUserState] = useUserState();

  useEffect(() => {
    setCurrentStep(initSetupStatus);
  }, []);

  useEffect(() => {
    setUserState((prevState) => {
      return {
        ...prevState,
        setupStatus: currentStep,
      };
    });
  }, [currentStep]);

  const navigate = useNavigate();

  const [createRoomResult, createRoom] = useMutation({
    query: createRoomMutation,
  });
  const [updateRoomResult, updateRoom] = useMutation({
    query: updateRoomMutation,
  });
  const [createUserResult, createUser] = useMutation({
    query: createUserMutation,
  });

  const goNext = async ({ step, payload }) => {
    setIsLoading(true);

    switch (currentStep) {
      case 'ENTER_NAME': {
        // Validate entered name

        await createUser({
          input: {
            firstName: _.trim(memberName),
            lastName: '',
          },
        })
          .then((result) => {
            const userDetails = _.get(
              result,
              'data.userMutation.createUser',
              {},
            );

            setUserState((prevState) => {
              return {
                ...prevState,
                id: userDetails.id,
              };
            });
            setCurrentStep(step);
          })
          .finally(() => {
            setIsLoading(false);
          });

        break;
      }
      case 'ROOM_OPTIONS': {
        if (step === 'CREATE_ROOM') {
          await createRoom({
            input: {
              name: '',
              users: [],
              createdBy: userState.id,
            },
          })
            .then((result) => {
              const roomDetails = _.get(
                result,
                'data.chatMutation.createChat',
                {},
              );

              setUserState((prevState) => {
                return {
                  ...prevState,
                  roomId: roomDetails.id,
                  roomCode: roomDetails.code,
                };
              });

              setRoomCodeArray(_.split(roomDetails.code, ''));
              setCurrentStep(step);
            })
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          setIsLoading(false);
          setCurrentStep(step);
        }

        break;
      }
      case 'JOIN_ROOM': {
        // Validate entered room code

        const roomCode = _.join(roomCodeArray, '');

        updateRoom({
          code: roomCode,
          input: {
            usersToAdd: [userState.id],
          },
        })
          .then(() => {
            setIsLoading(false);

            setUserState((prevState) => {
              return {
                ...prevState,
                roomCode,
                setupStatus: step,
              };
            });

            const roomUrl = getRoomPath({ roomCode });
            navigate(roomUrl, { replace: true });
          })
          .finally(() => {
            setIsLoading(false);
          });

        break;
      }
      case 'CREATE_ROOM': {
        const roomCode = _.join(roomCodeArray, '');

        updateRoom({
          code: roomCode,
          input: {
            name: payload.roomName,
            usersToAdd: [userState.id],
          },
        })
          .then(() => {
            setUserState((prevState) => {
              return {
                ...prevState,
                setupStatus: step,
              };
            });

            const roomUrl = getRoomPath({ roomCode });
            navigate(roomUrl, { replace: true });
          })
          .finally(() => {
            setIsLoading(false);
          });

        break;
      }
    }
  };

  const goBack = () => {
    switch (currentStep) {
      default: {
        setCurrentStep('ROOM_OPTIONS');
      }
    }
  };

  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="flex w-[1000px] h-max p-2 justify-center">
        {isLoading ? (
          <Spinner $size={SIZE.large} />
        ) : (
          <>
            <div className="flex w-2/5 items-center py-4 px-8 flex-col justify-center">
              <div className="font-bold text-4xl text-center">
                QuickGram
              </div>
            </div>
            <div className="flex w-3/5 border-l-2 items-center py-4 px-8 flex-col gap-4 justify-center">
              {currentStep == 'ENTER_NAME' && (
                <EnterName
                  onClickNext={() => goNext({ step: 'ROOM_OPTIONS' })}
                  memberName={memberName}
                  setMemberName={setMemberName}
                />
              )}
              {currentStep == 'ROOM_OPTIONS' && (
                <RoomOptions
                  memberName={memberName}
                  onClickCreate={() =>
                    goNext({ step: 'CREATE_ROOM' })
                  }
                  onClickJoin={() => goNext({ step: 'JOIN_ROOM' })}
                />
              )}
              {currentStep == 'CREATE_ROOM' && (
                <CreateRoom
                  onClickNext={(params) =>
                    goNext({ step: 'COMPLETED', ...params })
                  }
                  roomCodeArray={roomCodeArray}
                  setRoomCodeArray={setRoomCodeArray}
                  onClickBack={goBack}
                />
              )}
              {currentStep == 'JOIN_ROOM' && (
                <JoinRoom
                  onClickNext={() => goNext({ step: 'COMPLETED' })}
                  roomCodeArray={roomCodeArray}
                  setRoomCodeArray={setRoomCodeArray}
                  onClickBack={goBack}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

RoomSetup.propTypes = {
  initSetupStatus: PropTypes.string,
};

export default RoomSetup;
