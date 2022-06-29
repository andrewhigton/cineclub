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
export const createFilm = ( formData: string, history ) => async dispatch => {

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

    if (err) {
      alert(err)
    }

    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
    });
  }
};

export const updateFilm = (formData) => async (dispatch: Dispatch<ActionFilms>) => {

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
   
    if (err) {
      alert(err)
    }


    dispatch({
      type: ActionType.FILM_ERROR,
      payload: null
 
    });
  };
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