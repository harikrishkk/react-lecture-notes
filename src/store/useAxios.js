import axios from 'axios';
import { fetchUserInit, fetchUserSuccess, fetchUserFail } from './userActions';
import { useCallback } from 'react';

export const useAxios = (dispatch) => {
  const fetchUserData = useCallback(
    (flag = false) => {
      if (!flag) {
        return;
      }
      fetchUserInit(dispatch);
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
    },
    [dispatch]
  );
  return {
    fetchUserData,
  };
};
