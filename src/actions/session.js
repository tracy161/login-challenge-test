import { createAction } from 'redux-actions';
import { SESSION_ACTIONS } from './types';
import { push } from 'connected-react-router';
import axios from 'axios';

export const login = (username, password) => async dispatch => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post('/api/login', body, config);
    await dispatch({
      type: SESSION_ACTIONS.SET_USER_DETAILS,
      payload: res.data,
    });
    await dispatch(push('/'));
  } catch (err) {
    dispatch({
      type: SESSION_ACTIONS.LOGIN_FAIL,
    });
  }
};

export const setUserDetails = createAction(SESSION_ACTIONS.SET_USER_DETAILS);

export const logout = () => dispatch => {
  dispatch({ type: SESSION_ACTIONS.LOGOUT });
};

export const clearUser = () => dispatch => {
  dispatch({ type: SESSION_ACTIONS.CLEAR_USER });
};
