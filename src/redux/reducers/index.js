import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import blogsReducer from './blog';
import userReducer from './user';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  blogs: blogsReducer,
	user: userReducer,
})

export default createRootReducer;
