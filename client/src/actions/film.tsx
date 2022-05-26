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

    
    dispatch({
      type: ActionType.GET_FILM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
    });
  }
};

// create film
// export const createFilm = ( formData: string, history needed? ) => async dispatch => {
  export const createFilm = ( formData ) => async (dispatch: Dispatch<ActionFilms>) => 
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
    // history.push('/film/dashboard');
  } catch (err) {

    if (err) {
      alert(err)
    }

    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
    });
  }
};

// export const updateFilm = (formData, history needed?) => async dispatch => {
export const updateFilm = (formData, history) => async (dispatch: Dispatch<ActionFilms>) => 
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

    //need to create this as a named expoertr function??
    const res = await axios.put('/api/film/booking', formData, config);
    dispatch({
      type: ActionType.UPDATE_FILM,
      payload: res.data
      });
    alert('Thanks for your booking');
    //history.push('/film/dashboard');
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


export const stripePayment = () => {


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

try {
    const amount = 200;
    //const { amount } = JSON.parse(req.body.amount);
    // const { amount } = JSON.parse(event.body);

    const paymentIntent = stripe.paymentIntents.create({
      amount,
      currency: "GBP",
      payment_method_types: ["card"],
    });
  
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
}

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