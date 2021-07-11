export const fetchUserInit = (dispatch) => {
  dispatch({
    type: 'FETCH_USER_INIT',
  });
};

export const fetchUserSuccess = (dispatch, data) => {
  dispatch({
    type: 'FETCH_USER_SUCCESS',
    payload: {
      userData: data,
    },
  });
};

export const fetchUserFail = (dispatch) => {
  dispatch({
    type: 'FETCH_USER_FAIL',
  });
};
