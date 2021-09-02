import axios from 'axios';
import * as actions from '.';
import config from 'config';

const ROOT_URL = config.API_ROOT_URL;

export const fetchPosts = () => {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/blogs`,
    headers: [],
  });

  return {
    type: actions.FETCH_POSTS,
    payload: request,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: actions.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const fetchPostDetails = (id) => {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/blogs/${id}`,
    headers: [],
  });

  return {
    type: actions.FETCH_POST_DETAILS,
    payload: request,
  };
};

export const fetchPostDetailsSuccess = (activePost) => {
  return {
    type: FETCH_POST_DETAILS_SUCCESS,
    payload: activePost,
  };
};

export const fetchPostDetailsFailure = (error) => {
  return {
    type: FETCH_POST_DETAILS_FAILURE,
    payload: error,
  };
};
