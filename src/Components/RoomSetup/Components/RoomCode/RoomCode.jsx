import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

const RoomCode = (props) => {
  const { values, onChange, disabled } = props;
  const refs = [];

  const updateRef = (ref, index) => {
    refs[index] = ref;
  };

  const handleFocus = (e, index) => {
    if (e.keyCode == 8) {
      if (index - 1 > -1) {
        refs[index - 1].focus();
      } else {
        refs[index].blur();
      }
    } else if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 65 && e.keyCode <= 90)
    ) {
      if (index + 1 < _.size(values)) {
        refs[index + 1].focus();
      } else {
        refs[index].blur();
      }
    }
  };

  return (
    <div className="flex justify-between w-full py-4">
      {_.map(values, (value, index) => {
        return (
          <>
            <input
              type={'text'}
              value={value}
              key={index}
              disabled={disabled}
              autoFocus={index == 0}
              ref={(ref) => updateRef(ref, index)}
              className="bg-zinc-200 h-12 w-12 text-center focus-visible:outline-black focus-visible:outline focus-visible:outline-2"
              onKeyUp={(e) => handleFocus(e, index)}
              onChange={(e) => {
                const updatedValues = [...values];
                updatedValues[index] = e.target.value.slice(-1);
                onChange(updatedValues);
              }}
            />
            {index == _.size(values) / 2 - 1 && (
              <div className="flex items-center">{'-'}</div>
            )}
          </>
        );
      })}
    </div>
  );
};

RoomCode.propTypes = {
  onChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
};

export default RoomCode;
