import React from 'react';
import SelectInputControl from './SelectInputControl';
import { hobbyData } from './select.data';

const SelectControls = ({ hobbies, onCheckboxChange }) => {
  return (
    <>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Hobbies</span>
        </label>

        {hobbyData.length > 0 &&
          hobbyData.map((hobby) => {
            return (
              <SelectInputControl
                key={hobby.id}
                value={hobbies[hobby.text]}
                checked={hobbies[hobby.text]}
                label={hobby.label}
                onCheckboxChange={() => onCheckboxChange(hobby.text)}
              />
            );
          })}
      </div>
    </>
  );
};

export default SelectControls;
