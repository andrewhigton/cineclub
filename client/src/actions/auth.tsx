import axios from 'axios';
import { ActionType } from './types';
import { ActionUser } from '../reducers/indexTypes';
import { Dispatch } from 'redux';
import { ticketType } from '../utils/componentTypes';
import setAuthToken from '../utils/setAuthToken';

// Add Tickets
export const updateUserTickets = (formData: ticketType, history ) => async (dispatch: Dispatch<ActionUser>) => {
  
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    
    const res = await axios.post('/api/users/ticket', formData, config);
    
    dispatch({
      type: ActionType.UPDATE_USER,
      payload: res.data
    });
    history.push('/');
  } catch (err) {
    if (err) {
      alert(err)
      dispatch({
      type: ActionType.LOGIN_FAIL,
      payload: null
    });
    }
  }
};

// Load User
export const loadUser = () => async (dispatch: Dispatch<ActionUser>) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  

try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: ActionType.USER_LOADED,
      payload: res.data
    })
} catch (err) {
          alert('Please check your email and password')
          dispatch({
            type: ActionType.AUTH_ERROR,
            payload: null
        });
      }
  };


// Register User
export const register = ( name: string, email: string, password: string ) => 

async (dispatch: Dispatch<ActionUser>) => {    
  
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const body = JSON.stringify({ name, email, password });

    try {
    const res = await axios.post('/api/users', body, config);
  
    dispatch({
      type: ActionType.REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch<any>(loadUser());
    

    } catch (err) {
    
  
    if (err) {
      alert(err)
      dispatch({
      type: ActionType.REGISTER_FAIL,
      payload: null
    });
    
    }

    
  }
};

//Login User
export const login = (email: string | number, password: string | number) => async (dispatch: Dispatch<ActionUser>) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: ActionType.LOGIN_SUCCESS,
      payload: res.data
    })
    dispatch<any>(loadUser());
  } 
  catch (err) {
    if (err) {
      alert(err)
      dispatch({
      type: ActionType.LOGIN_FAIL,
      payload: null
    });
    }

  }
};


export const deleteTickets = (id: string) => async dispatch => {
  try {
    const res = await axios.delete(`/api/tickets/${id}`);

    dispatch({
      type: ActionType.UPDATE_USER,
      payload: res.data
    });
  } catch (err) {
    if (err) {
      alert(err)
      dispatch({
      type: ActionType.LOGIN_FAIL
    });
    }  
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({ type: ActionType.LOGOUT });
};