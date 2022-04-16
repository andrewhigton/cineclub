import axios from 'axios';
import { ActionType } from './types';
import { ActionUser } from '../reducers/indexTypes';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

interface ChildComponentProps extends RouteComponentProps<any> {
 history: any;
}

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

//     return axios.get('/api/auth')
//     .then(res => {
// console.log('user loaded')
//       console.log(res.data)
//       dispatch({
//       type: ActionType.USER_LOADED,
//       payload: res.data
//     })
//   })
//   .catch(err => {
//       const errors = err.response.data.errors;
//         if (errors) {
//           alert('Please check your email and password')
//           dispatch({
//             type: ActionType.AUTH_ERROR,
//             payload: null
//         });
//       }
//   });
// }

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



//   return axios.post('/api/users', body, config)
//   .then(res => {
//       dispatch({
//       type: ActionType.REGISTER_SUCCESS,
//       payload: res.data
//     })
//   })
//   .then(dispatch<any>(loadUser()))
//   .catch(err => {
//     const errors = err.response.data.errors;
//     if (errors) {
//       //change this to a warning, with json? 
//       alert('Something went wrong. Please check your email and password')
//       dispatch({
//       type: ActionType.REGISTER_FAIL,
//       payload: null
//     });
//     }
//   });
// };

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
    //need to fix this
    // const errors = err.response.data.errors;
    // if (errors) {
    //   alert(errors)
    //   dispatch({
    //   type: ActionType.LOGIN_FAIL
    // });
    // }
  }
};
//   return axios.post('/api/auth', body, config)
//   .then(res => {
//       dispatch({
//       type: ActionType.LOGIN_SUCCESS,
//       payload: res.data
//     })
//   })
//   .then(dispatch<any>(loadUser()))
//   .catch(err => {
//       const errors = err.response.data.errors;
//         if (errors) {
//           alert('Please check your email and password')
//           dispatch({
//           type: ActionType.LOGIN_FAIL,
//           payload: errors
//         });
//       }
//   });
// };



//Login User
// export const login = (email: string | number, password: string | number) => async (dispatch: Dispatch<ActionUser>) => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ email, password });
// try {
//     const res = await axios.post('/api/auth', body, config);
   
//     dispatch({
//       type: ActionType.LOGIN_SUCCESS,
//       payload: res.data
//     })
//     dispatch<any>(loadUser());          

//   } catch (err: any) {
//     console.log(err)
//     const errors = err.response.data.errors;
//     if (errors) {
//       alert(errors)
//       dispatch({
//       type: ActionType.LOGIN_FAIL,
//       payload: null
//     });
//     }
//   }
// };

// Add Tickets
export const updateUserTickets = (formData) => 
async (dispatch: Dispatch<ActionUser>) => {
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
    //history.push('/film/dashboard');
  } catch (err) {
    if (err) {
      alert(err)
      dispatch({
      type: ActionType.LOGIN_FAIL,
      payload: null
    });
    // const errors = err.response.data.errors;
    // if (errors) {
     
    //   console.log(errors)
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

    // alert(err.response.statusText)
    // console.log(err.response.statusText)
    
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({ type: ActionType.LOGOUT });
};