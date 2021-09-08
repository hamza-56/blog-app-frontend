import { push } from 'connected-react-router';
import axios from 'axios';
import * as actions from '.';
import { API_ROOT_URL } from 'config';

const loginUserStart = () => {
  return {
    type: actions.LOGIN_USER_START,
  };
};

const loginUserSuccess = (username) => {
  return {
    type: actions.LOGIN_USER_SUCCESS,
    payload: username,
  };
};

const loginUserFailure = (error) => {
  return {
    type: actions.LOGIN_USER_FAILURE,
    payload: {
      msg: error.data.detail,
      code: error.data.code,
      status: error.status,
    },
  };
};

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginUserStart());
  return axios
    .post(`${API_ROOT_URL}/login/`, {
      username,
      password,
    })
    .then(
      (response) => {
        dispatch(loginUserSuccess(username));
        dispatch(push('/'));
        localStorage.setItem('username', username);
        localStorage.setItem('jwtToken', response.data.access);
      },
      (error) => dispatch(loginUserFailure(error.response))
    );
};

const signupUserStart = () => {
  return {
    type: actions.SIGNUP_USER_START,
  };
};

const signupUserSuccess = (user) => {
  return {
    type: actions.SIGNUP_USER_SUCCESS,
    payload: user,
  };
};

const signupUserFailure = (error) => {
  return {
    type: actions.SIGNUP_USER_FAILURE,
    payload: {
      msg: error.data.username ? error.data.username : error.data.password,
      code: error.data.code,
      status: error.status,
    },
  };
};

export const signupUser = (username, password) => (dispatch) => {
  dispatch(signupUserStart());
  return axios
    .post(`${API_ROOT_URL}/register/`, {
      username,
      password,
    })
    .then(
      (response) => {
        dispatch(signupUserSuccess(response.data));
        dispatch(push('/login'));
      },
      (error) => dispatch(signupUserFailure(error.response))
    );
};

export const resetUser = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('jwtToken');
  return {
    type: actions.RESET_USER,
  };
};
