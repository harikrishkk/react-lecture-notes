import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

const Notification = ({ message = 'Default message ', onClose }) => {
  return (
    <div className="alert alert-info my-4 bg-blue-500 text-white">
      <div className="flex w-full">
        <FiAlertCircle size={24} />

        <label className="ml-2 flex-auto">{message}</label>
        <span onClick={onClose} className="cursor-pointer">
          <AiFillCloseCircle size={24} />
        </span>
      </div>
    </div>
  );
};

export default Notification;
