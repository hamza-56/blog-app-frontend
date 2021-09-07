import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';
import authInterceptor from 'redux/middlewares/authInterceptor';

const store = createStore(rootReducer, applyMiddleware(thunk, authInterceptor));

export default store;
