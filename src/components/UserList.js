import React from 'react';
import User from './User';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllUsers } from '@userStore/users.selectors';
import { selectUser } from '@userStore/users.actions';

const UserList = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();

  const handleUserSelect = (user) => {
    dispatch(selectUser(user));
  };

  if (!users) {
    return null;
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {users.map((user) => (
        <User key={user.id} user={user} onUserSelect={handleUserSelect} />
      ))}
    </div>
  );
};

export default UserList;
