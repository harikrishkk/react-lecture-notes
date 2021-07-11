import User from '@components/User';
import Navbar from '@components/Navbar';
import Notification from '@components/Notification';
import { useState, useEffect, useReducer } from 'react';
import UserForm from '@components/UserForm';
import Newsletter from '@components/Newsletter';
import axios from 'axios';
import { reducer, INIT_STATE } from './store/userReducer';

import {
  fetchUserFail,
  fetchUserInit,
  fetchUserSuccess,
} from './store/userActions';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    fetchUserInit(dispatch);
    console.log(`${counter}: Featching data from Backend..`);
    axios
      .get('https://react-notes-2673f-default-rtdb.firebaseio.com/users.json')
      .then((data) => {
        const responseArr = [];
        Object.keys(data.data).forEach((item) => {
          responseArr.push({
            ...data.data[item],
            id: item,
          });
        });
        fetchUserSuccess(dispatch, responseArr);
      })
      .catch((e) => {
        fetchUserFail(dispatch);
      });
    return () => {
      // cleanup.
      console.log('Will run once before the next time useEffect runs again.');
    };
  }, [counter]);

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
    const newId = parseInt(userData.length + 1);
    newUser.id = newId;
    // const newUsers = [...userData, newUser];
    // setUserData(newUsers);
  };
  const { userData, loading } = state;
  if (loading) {
    return <h1> Loading.. </h1>;
  }
  return (
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
      {visible && (
        <div className="grid grid-cols-2 gap-4">
          {userData.map((user) => (
            <User onUserSelect={handleUserSelect} key={user.id} user={user} />
          ))}
        </div>
      )}

      <UserForm onUserAdd={handleUserAdd} />
      <Newsletter />
    </div>
  );
};

export default App;
