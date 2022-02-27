import { Map } from 'immutable';

import { SESSION_ACTIONS } from '../actions/types';

const initialState = Map({
  username: null,
  fullname: null,
  isAuthenticated: null,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SESSION_ACTIONS.SET_USER_DETAILS:
      const { username, fullname } = action.payload;
      return state.merge({ fullname, username, isAuthenticated: true });
    case SESSION_ACTIONS.LOGOUT:
    case SESSION_ACTIONS.CLEAR_USER:
      return state.merge({
        fullname: null,
        username: null,
        isAuthenticated: null,
      });
    case SESSION_ACTIONS.LOGIN_FAIL:
      return state.merge({
        fullname: null,
        username: null,
        isAuthenticated: false,
      });
    default:
      return state;
  }
}
