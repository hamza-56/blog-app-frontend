import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import authInterceptor from '../middlewares/authInterceptor';
import createRootReducer from '../reducers/index';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), 
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), 
        thunk,
        authInterceptor
      ),
    ),
  )

  return store;
}