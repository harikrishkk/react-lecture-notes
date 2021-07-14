import { fetchAllUsers, resetUser } from '@userStore/users.actions';
import {
  selectCurrentUser,
  selectAllUsers,
  selectIsLoading,
  selectIsLoaded,
  selectIsError,
} from '@userStore/users.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Navbar from '@components/Navbar';
import Newsletter from '@components/Newsletter';
import Notification from '@components/Notification';
import UserForm from '@components/UserForm';
import UserList from '@components/UserList';

const App = () => {
  // Local states for the App
  const [visible, setVisible] = useState(true);

  // Selectors handling a slice of the app state
  const users = useSelector(selectAllUsers);
  const isLoading = useSelector(selectIsLoading);
  const isLoaded = useSelector(selectIsLoaded);
  const isError = useSelector(selectIsError);
  const currentUser = useSelector(selectCurrentUser);

  // Dispatch to dispatch an action to modify state
  const dispatch = useDispatch();

  // Once the component is loaded, fetch all users
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(resetUser());
  };

  if (isLoading) {
    return <h1> Loading.. </h1>;
  }

  if (isError) {
    return <h1> Oops! Error while loading user data</h1>;
  }

  if (isLoaded && users.length === 0) {
    return <h1> No users to display </h1>;
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
        <button onClick={() => setVisible((v) => !v)} className="btn btn-sm">
          Toggle Users
        </button>
      </div>
      {visible && <UserList />}

      <UserForm />
      <Newsletter />
    </div>
  );
};

export default App;
