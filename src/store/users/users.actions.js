import * as actions from './users.constants';
import axios from '@api/axios';

/**
 * Fetch all users thunk
 */
export const fetchAllUsers = () => (dispatch) => {
  dispatch(fetchUserInit());
  axios
    .get('/users.json')
    .then((response) => {
      const responseArr = transformResponse(response);
      dispatch(fetchUserSuccess(responseArr));
    })
    .catch((err) => {
      dispatch(fetchUserFail());
    });
};

const transformResponse = (response) => {
  const responseArr = [];
  Object.keys(response.data).forEach((item) => {
    responseArr.push({
      ...response.data[item],
      id: item,
    });
  });
  return responseArr;
};

const fetchUserInit = () => {
  return {
    type: actions.FETCH_USER_INIT,
  };
};

const fetchUserSuccess = (data) => {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: {
      userData: data,
    },
  };
};

const fetchUserFail = () => {
  return {
    type: actions.FETCH_USER_FAIL,
  };
};

/**
 * Add new user
 */
export const addNewUser = (user) => (dispatch) => {
  dispatch(addNewUserInit(user));
  axios
    .post('/users.json', user)
    .then((response) => {
      const newUser = {
        ...user,
        id: response.name,
      };

      dispatch(addNewUserSuccess(newUser));
      dispatch(fetchAllUsers());
    })
    .catch((err) => {
      dispatch(addNewUserFail());
    });
};

const addNewUserInit = (user) => {
  return {
    type: actions.ADD_NEW_USER_INIT,
  };
};

const addNewUserSuccess = (user) => {
  return {
    type: actions.ADD_NEW_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

const addNewUserFail = () => {
  return {
    type: actions.ADD_NEW_USER_FAIL,
  };
};

/**
 * Select / Reset user
 */

export const selectUser = (user) => {
  return {
    type: actions.SELECT_USER,
    payload: user,
  };
};

export const resetUser = () => {
  return {
    type: actions.RESET_CURRENT_USER,
  };
};
