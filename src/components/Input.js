import React from 'react';

const Input = ({
  labelName = 'Default Label',
  type = 'text',
  value,
  onInputChange,
  placeholder,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{labelName} </span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        className="input input-bordered"
      />
    </div>
  );
};

export default Input;
