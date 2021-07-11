export const INIT_STATE = {
  userData: [],
  loading: false,
  loaded: false,
  error: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USER_INIT': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_USER_SUCCESS': {
      return {
        ...state,
        loading: false,
        loaded: true,
        userData: action.payload.userData,
      };
    }
    case 'FETCH_USER_FAIL': {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
