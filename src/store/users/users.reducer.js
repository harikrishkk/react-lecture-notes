import * as actions from './users.constants';

export const INIT_STATE = {
  userData: [],
  loading: false,
  loaded: false,
  error: null,
  currentUser: null,
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actions.FETCH_USER_INIT: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        userData: action.payload.userData,
      };
    }
    case actions.FETCH_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
      };
    }
    case actions.SELECT_USER: {
      return {
        ...state,
        currentUser: action.payload.id,
      };
    }
    case actions.RESET_CURRENT_USER: {
      return {
        ...state,
        currentUser: null,
      };
    }
    case actions.ADD_NEW_USER_INIT: {
      return {
        ...state,
        loading: true,
      };
    }
    case actions.ADD_NEW_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        userData: [...state.userData, action.payload.user],
      };
    }
    case actions.ADD_NEW_USER_FAIL: {
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
