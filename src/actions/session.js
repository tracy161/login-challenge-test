import { createAction } from 'redux-actions';
import { SESSION_ACTIONS } from './types';
import axios from 'axios';

export const logout = createAction(SESSION_ACTIONS.LOGOUT);
//export const login = createAction(SESSION_ACTIONS.LOGIN);

export const login = (email, password) => async dispatch => {
    
}



export const setUserDetails = createAction(SESSION_ACTIONS.SET_USER_DETAILS);
