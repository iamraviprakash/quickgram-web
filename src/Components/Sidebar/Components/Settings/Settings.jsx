import React from 'react';
import { FiCopy } from 'react-icons/fi';
import { Button, SHAPE } from 'baseui/button';
import { useSearchParams } from 'react-router-dom';
import { toaster, ToasterContainer } from 'baseui/toast';

import { getRoomUrl } from '@/Utils';

const Settings = (props) => {
  const [searchParams] = useSearchParams();
  const roomCode = searchParams.get('room_code');

  const copyToClipboard = (e) => {
    const roomUrl = getRoomUrl({
      roomCode,
    });

    navigator.clipboard.writeText(roomUrl);
    toaster.info('Copied to clipboard');
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
      </div>
    </>
  );
};

export default Settings;
