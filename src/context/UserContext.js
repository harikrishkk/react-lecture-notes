import React from 'react';

const UserContext = React.createContext({
  users: [],
  addUser: () => {},
  userSelect: () => {},
});

export default UserContext;
