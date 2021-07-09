import User from '@components/User';
import Navbar from '@components/Navbar';
import { users } from './users.data';
import Notification from '@components/Notification';
import { useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState(users);
  const [currentUser, setCurrentUser] = useState();
  const handleUserSelect = (user) => {
    // But how will we pass the user details to the Message component?
    // We need to handle a piece of state here.
    // Also, Notification component need to be shown upon selection only.
    setCurrentUser(user);
  };
  const handleClose = () => {
    setCurrentUser(null);
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
    </div>
  );
};

export default App;
