import { applyMiddleware, createStore, compose } from 'redux';
import {
  connectRouter,
  routerMiddleware
} from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

import { combineReducers } from 'redux-immutable';

import * as reducers from './reducers';

export default function configureStore(history) {
  const initialState = Map();
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...reducers
  });

  const middleware = [thunk, routerMiddleware(history)] 

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );
}
