import { combineReducers } from 'redux';

import blogsReducer from './blog';
import userReducer from './user';

const rootReducer = combineReducers({
	blogs: blogsReducer,
	user: userReducer,
});

export default rootReducer;