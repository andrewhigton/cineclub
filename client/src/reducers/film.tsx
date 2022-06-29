import { ActionType } from '../actions/types';
import { ActionFilms } from './indexTypes';

export interface FilmInitialStateType {
  film: {} | null;
  films: string[];
  filmLoading: boolean;
  error: any;
};

const initialState: FilmInitialStateType = {
  film: null,
  films: [] || null,
  filmLoading: true,
  error: {}
};

const film = (
  state = initialState,
  action: ActionFilms,
  ) => {
        let payload;  
        if(action.payload) {
          payload = action.payload; 
        }
        switch (action.type) {
          case ActionType.GET_FILM:
          return {
            ...state,
            film: payload,
            filmLoading: false 
          };
          case ActionType.GET_FILMS:
          return {
            ...state,
            films: payload,
            filmLoading: false 
          };
          case ActionType.UPDATE_FILM:
          return {
            ...state,
            film: payload,
            filmLoading: false 
          }; 
          case ActionType.FILM_ERROR:
          return {
            ...state,
            error: payload,
            filmLoading: false
          }; 
          //this needed?
          case ActionType.CLEAR_FILM:
          return {
            ...state,
            film: null,
            films: [],
            filmLoading: false
          };
          default:
            return state
        }
    }

  export default film;