import { createAction } from 'redux-actions';
import { SESSION_ACTIONS } from './types';
import { push } from 'connected-react-router';
import axios from 'axios';

export const logout = createAction(SESSION_ACTIONS.LOGOUT);

export const login = (username, password) => async dispatch => {
  const config = {
    headers: { 'Content-Type': 'application/json' },
  };
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post('/api/login', body, config);
    console.log('login');
    dispatch({
      type: SESSION_ACTIONS.SET_USER_DETAILS,
      payload: res.data,
    });
    dispatch(push('/'));
  } catch (err) {
    console.log(err);
    alert(err);
    
    dispatch({
      type: SESSION_ACTIONS.LOGIN_FAIL,
    });
  }
};

export const setUserDetails = createAction(SESSION_ACTIONS.SET_USER_DETAILS);
