import { createAction } from 'redux-actions';
import { SESSION_ACTIONS } from './types';
import { push } from 'connected-react-router';
import axios from 'axios'; // a lightweight promised based HTTP client for the browser and Node JS. it is to send asynchronous HTTP to REST endpoints and perform CRUD operations 

/** Use redux-thunk for Middleware
 * This is still a simple web application
 * login() is an action creator which returns a function which in turn take dispatch method as an argument after API call or side effects has been finished
 * After we recived a response from the server, we will dispatch synchronous action using the dispatch method
 * 
 * Redux-saga: work with async await system that minimize its problem, it works line a separate thread that is solely responsible for making side effects or API calls
 * middleware library that helps us with API calls or side effects. Redux Saga uses ES6 feature called Generators which helps us to write asynchonous code
*/

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
