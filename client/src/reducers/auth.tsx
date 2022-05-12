import { ActionType } from '../actions/types';
import { ActionUser } from './indexTypes';

interface RepositoriesState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean | null;
  user: {
    _id: string,
    name: string,
    email: string,
    tickets: string[]
  } | null;
};
  
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const auth = (
  state: RepositoriesState = initialState, 
  action: ActionUser
  ): RepositoriesState => {
 
  
  let payload;  
  if(action.payload) {
    payload = action.payload; 
  }

  switch (action.type) {
    case ActionType.USER_LOADED:
    return {
      ...initialState,
      token: localStorage.getItem('token'),
      isAuthenticated: true,
      loading: false,
      user: payload
    };
    case ActionType.REGISTER_SUCCESS:
    case ActionType.LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
      ...state,
      token: localStorage.getItem('token'),
      ...payload,
      isAuthenticated: true,
      loading: false
    };
    case ActionType.UPDATE_USER: 
      return {
        ...state,
        user: payload,
        loading: false,
      isAuthenticated: true,
      };
    case ActionType.REGISTER_FAIL:
    case ActionType.LOGIN_FAIL:
    case ActionType.LOGOUT:
    case ActionType.AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
      default:
      return state;
    }
  }

export default auth;