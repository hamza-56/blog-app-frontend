import axios from 'axios';
import * as actions from '.';
import { API_ROOT_URL } from 'config';
import { getAuthHeader } from 'utils/authHeader';

const fetchPostsStart = () => {
  return {
    type: actions.FETCH_POSTS_START,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: actions.FETCH_POSTS_FAILURE,
    payload: {
      msg: error.data.detail,
      code: error.data.code,
      status: error.status,
    },
  };
};

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostsStart());
  return axios
    .get(`${API_ROOT_URL}/blogs/`, {
      headers: getAuthHeader(),
    })
    .then(
      (response) => dispatch(fetchPostsSuccess(response.data)),
      (error) => dispatch(fetchPostsFailure(error.response))
    );
};

const fetchPostDetailsStart = () => {
  return {
    type: actions.FETCH_POST_DETAILS_START,
  };
};

const fetchPostDetailsSuccess = (post) => {
  return {
    type: actions.FETCH_POST_DETAILS_SUCCESS,
    payload: post,
  };
};

const fetchPostDetailsFailure = (error) => {
  return {
    type: actions.FETCH_POST_DETAILS_FAILURE,
    payload: {
      msg: error.data.detail,
      code: error.data.code,
      status: error.status,
    },
  };
};

export const fetchPostDetails = (slug) => (dispatch) => {
  dispatch(fetchPostDetailsStart());
  return axios
    .get(`${API_ROOT_URL}/blogs/${slug}/`, { headers: getAuthHeader() })
    .then(
      (response) => dispatch(fetchPostDetailsSuccess(response.data)),
      (error) => dispatch(fetchPostDetailsFailure(error.response))
    );
};

export const resetPosts = () => {
  return {
    type: actions.RESET_POSTS,
  };
};

const createPostStart = () => {
  return {
    type: actions.CREATE_POST_START,
  };
};

const createPostSuccess = () => {
  return {
    type: actions.CREATE_POST_SUCCESS,
  };
};

const createPostFailure = (error) => {
  return {
    type: actions.CREATE_POST_FAILURE,
    payload: {
      msg: error.data.detail,
      code: error.data.code,
      status: error.status,
    },
  };
};

export const createPost = (title, content) => (dispatch) => {
  dispatch(createPostStart());
  return axios
    .post(
      `${API_ROOT_URL}/blogs/`,
      { title, content },
      { headers: getAuthHeader() }
    )
    .then(
      (response) => dispatch(createPostSuccess(response.data)),
      (error) => dispatch(createPostFailure(error.response))
    );
};
