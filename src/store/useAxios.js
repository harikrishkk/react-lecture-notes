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

    if (!config) {
      config = {
        method: 'get',
        url: '/users.json',
      };
    }

    setLoading(true);

    axios(config)
      .then((data) => {
        if (config.method === 'get') {
          const responseArr = [];
          Object.keys(data.data).forEach((item) => {
            responseArr.push({
              ...data.data[item],
              id: item,
            });
          });
          setData(responseArr);
        }
        if (config.method === 'post') {
          console.log('Data posted success: ', data);
          fetchUserData(true);
        }
        setLoading(false);
        setLoaded(true);
        setError(null);
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
