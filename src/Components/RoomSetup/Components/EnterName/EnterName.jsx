import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';

import PropTypes from 'prop-types';

const EnterName = (props) => {
  const { onClickNext, memberName, setMemberName } = props;

  return (
    <>
      <Input
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        clearOnEscape
        placeholder={'Enter your name'}
      />
      <Button
        startEnhancer={() => <AiOutlineArrowRight size={24} />}
        onClick={onClickNext}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => ({
              width: '100%',
            }),
          },
        }}
      >
        Next
      </Button>
    </>
  );
};

EnterName.propTypes = {
  onClickNext: PropTypes.func.isRequired,
  memberName: PropTypes.string.isRequired,
  setMemberName: PropTypes.func.isRequired,
};

export default EnterName;
