import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import User from './User';

const UserList = () => {
  const { users, userSelect } = useContext(UserContext);
  if (!users) {
    return null;
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {users.map((user) => (
        <User key={user.id} user={user} onUserSelect={userSelect} />
      ))}
    </div>
  );
};

export default UserList;
