import React from 'react';

const SelectInputControl = ({ value, checked, onCheckboxChange, label }) => {
  return (
    <div className="form-control">
      <label className="cursor-pointer label">
        <span className="label-text"> {label} </span>
        <div>
          <input
            type="checkbox"
            value={value}
            checked={checked}
            onChange={onCheckboxChange}
            className="checkbox"
          />
          <span className="checkbox-mark"></span>
        </div>
      </label>
    </div>
  );
};

export default SelectInputControl;
