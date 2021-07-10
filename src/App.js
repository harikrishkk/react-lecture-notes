import User from '@components/User';
import Navbar from '@components/Navbar';
import { users } from './users.data';
import Notification from '@components/Notification';
import { useState } from 'react';
import UserForm from '@components/UserForm';

const App = () => {
  const [userData, setUserData] = useState(users);
  const [currentUser, setCurrentUser] = useState();
  const handleUserSelect = (user) => {
    setCurrentUser(user);
  };
  const handleClose = () => {
    setCurrentUser(null);
  };

  const handleUserAdd = (newUser) => {
    const newId = parseInt(userData.length + 1);
    newUser.id = newId;
    const newUsers = [...userData, newUser];
    setUserData(newUsers);
  };
  return (
    <div className="h-full p-6 bg-gray-200">
      <Navbar />
      {currentUser && (
        <Notification
          onClose={handleClose}
          message={`Selected user is ${currentUser.first_name}`}
        />
      )}

      <div className="grid grid-cols-2 gap-4">
        {userData.map((user) => (
          <User onUserSelect={handleUserSelect} key={user.id} user={user} />
        ))}
      </div>

      <UserForm onUserAdd={handleUserAdd} />
    </div>
  );
};

export default App;
