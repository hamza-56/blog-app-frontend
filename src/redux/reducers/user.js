import * as actions from '../actions';

const initialState = {
  username: localStorage.getItem('username'),
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_START: {
      return { username: null, error: null, loading: true };
    }
    case actions.LOGIN_USER_SUCCESS: {
      return { username: action.payload, error: null, loading: false };
    }
    case actions.LOGIN_USER_FAILURE: {
      return { username: null, error: action.payload, loading: false };
    }

    case actions.SIGNUP_USER_START: {
      return { username: null, error: null, loading: true };
    }
    case actions.SIGNUP_USER_SUCCESS: {
      return { username: null, error: null, loading: false };
    }
    case actions.SIGNUP_USER_FAILURE: {
      return { username: null, error: action.payload, loading: false };
    }

    case actions.RESET_USER: {
      return {
        username: null,
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
