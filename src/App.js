import UserList from '@components/UserList';
import Navbar from '@components/Navbar';
import Notification from '@components/Notification';
import { useState, useEffect } from 'react';
import UserForm from '@components/UserForm';
import Newsletter from '@components/Newsletter';
import { useAxios } from './store/useAxios';
import UserContext from './context/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);

  const { fetchUserData, data: userData, loading, error } = useAxios();

  useEffect(() => {
    console.log(`${counter}: Featching data from Backend..`);
    fetchUserData(true);
    return () => {
      // cleanup.
      console.log('Will run once before the next time useEffect runs again.');
    };
  }, [counter, fetchUserData]);

  const increment = () => {
    setCounter((c) => c + 1);
  };

  const handleUserSelect = (user) => {
    setCurrentUser(user);
  };
  const handleClose = () => {
    setCurrentUser(null);
  };

  const handleUserAdd = (newUser) => {
    fetchUserData(true, {
      method: 'post',
      url: '/users.json',
      data: newUser,
    });
  };

  if (loading) {
    return <h1> Loading.. </h1>;
  }

  if (error) {
    return <h1> Oops! Error while loading user data</h1>;
  }

  if (userData.length === 0) {
    return <h1> No users to display </h1>;
  }

  const userCtx = {
    users: userData,
    addUser: handleUserAdd,
    userSelect: handleUserSelect,
  };
  return (
    <UserContext.Provider value={userCtx}>
      <div className="h-full p-6 bg-gray-200">
        <Navbar />
        {currentUser && (
          <Notification
            onClose={handleClose}
            message={`Selected user is ${currentUser.first_name}`}
          />
        )}

        <div className="py-4 flex flex-row-reverse">
          <button onClick={increment} className="btn btn-sm">
            Increment
          </button>
          <button onClick={() => setVisible((v) => !v)} className="btn btn-sm">
            Toggle Users
          </button>
        </div>
        {visible && <UserList />}

        <UserForm />
        <Newsletter />
      </div>
    </UserContext.Provider>
  );
};

export default App;
