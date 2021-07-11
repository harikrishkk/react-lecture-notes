import axios from 'axios';
import { useState } from 'react';
import { useCallback } from 'react';

axios.defaults.baseURL =
  'https://react-notes-2673f-default-rtdb.firebaseio.com';

export const useAxios = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = useCallback((flag = false, config) => {
    if (!flag) {
      return;
    }

    const defaultInit = {
      method: 'get',
      url: '/users.json',
    };

    setLoading(true);

    axios((config = defaultInit))
      .then((data) => {
        const responseArr = [];
        Object.keys(data.data).forEach((item) => {
          responseArr.push({
            ...data.data[item],
            id: item,
          });
        });
        setLoading(false);
        setLoaded(true);
        setError(null);
        setData(responseArr);
      })
      .catch((e) => {
        setLoading(false);
        setLoaded(false);
        setError(true);
      });
  }, []);
  return {
    data,
    loading,
    loaded,
    error,
    fetchUserData,
  };
};
