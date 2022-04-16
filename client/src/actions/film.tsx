import axios from 'axios';
import { ActionType } from './types';
import { ActionFilms } from '../reducers/indexTypes';
import { Dispatch } from 'redux';

// Get all Films
export const loadFilms = () => async (dispatch: Dispatch<ActionFilms>) => {
  try {
    const res = await axios.get('/api/film');
    dispatch({
      type: ActionType.GET_FILMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null,
      //payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
  };

// Get film by ID
export const getFilmById = (film_id: number) => async (dispatch: Dispatch<ActionFilms>) => 
{
  dispatch({ 
    type: ActionType.CLEAR_FILM,
    payload: null,
   });
  try {
    const res = await axios.get(`/api/film/${film_id}`)
    // .populate('film', ['title', 'cinema']);
    
    dispatch({
      type: ActionType.GET_FILM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// create film
// export const createFilm = ( formData: string, history needed? ) => async dispatch => {
  export const createFilm = ( formData, history) => async (dispatch: Dispatch<ActionFilms>) => 
  {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const res = await axios.post('/api/film/create-film', formData, config);    
    dispatch({
      type: ActionType.GET_FILM,
      payload: res.data
    });
    history.push('/film/dashboard');
  } catch (err) {
    // const errors = err.response.data.errors;

    // if (errors) {
    //   alert(errors.forEach(error => dispatch(alert(error.msg, 'danger'))));
    // }

    if (err) {
      alert(err)
      // alert(err.forEach(error => dispatch(alert(error.msg, 'danger'))));
    }

    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// export const updateFilm = (formData, history needed?) => async dispatch => {
export const updateFilm = (formData) => async (dispatch: Dispatch<ActionFilms>) => 
{
  dispatch({ 
    type: ActionType.CLEAR_FILM,
    payload: null,
     });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const res = await axios.put('/api/film/booking', formData, config);
    dispatch({
      type: ActionType.UPDATE_FILM,
      payload: res.data
      });
    alert('Thanks for your booking');
  } catch (err) {
    // const errors = err.response.data.errors;

    // if (errors) {
    //   alert(errors.forEach(error => dispatch(alert(error.msg, 'danger'))));
    // }
    if (err) {
      alert(err)
    }


    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
      // payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// export const stripePayment = (priceForStripe, token) => async dispatch => {
    
//     axios.post(
//       { 
//         url: '/api/film/payment', 
//         // method: 'post',
//         data: {
//           amount: priceForStripe,
//           token: token
//         }
//        })
//        // , onPayment())
//       .then(response => {
//         // alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked'); 
//         window.location.replace('http://localhost:3000/film/dashboard');
//        })
//       .catch(error => {
//         console.log('Payment error: ', JSON.parse(error));  
//         alert('Payment error. Please use the provided credit card details');  
//        }) 
//   } 

// export const deleteFilm = id => async dispatch => {
//   try {
//     const res = await axios.delete(`/api/profile/tickets/${id}`);

//     dispatch({
//       type: 'DELETE_FILM',
//       payload: res.data
//     });

//     alert('Tickets Removed', 'success');
//   } catch (err) {
//     dispatch({
//       type: 'FILM_ERROR',
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };