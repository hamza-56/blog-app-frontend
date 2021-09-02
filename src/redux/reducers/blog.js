import * as actions from '../actions';

const initialState = {
  all: [],
  activeBlog: null,
  error: null,
  loading: false,
};

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_POSTS: {
      return {
        ...state,
        all: [],
        loading: true,
        error: null,
      };
    }
    case actions.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        all: action.payload,
        loading: false,
        error: null,
      };
    }
    case actions.FETCH_POSTS_FAILURE: {
      return {
        ...state,
        all: [],
        loading: false,
        error: action.payload.message,
      };
    }
    case actions.FETCH_POST_DETAILS: {
      return {
        ...state,
        activeBlog: null,
        loading: true,
        error: null,
      };
    }
    case actions.FETCH_POST_DETAILS_SUCCESS: {
      return {
        ...state,
        activeBlog: action.payload,
        loading: false,
        error: null,
      };
    }
    case actions.FETCH_POST_DETAILS_FAILURE: {
      return {
        ...state,
        activeBlog: null,
        loading: false,
        error: action.payload.message,
      };
    }
    default:
      return state;
  }
};

export default blogsReducer;