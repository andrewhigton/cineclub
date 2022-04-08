import { ActionType } from '../actions/types';

interface GetFilm {
  type: ActionType.GET_FILM;
  payload: string[];
}

interface GetFilms {
  type: ActionType.GET_FILMS;
  payload: string[];
};

interface UpdateFilm {
  type: ActionType.UPDATE_FILM;
  payload: null;
};

type FilmError = {
  type: ActionType.FILM_ERROR;
  payload: null;
}

type ClearFilm = {
  type: ActionType.CLEAR_FILM;
  payload: null;
}

export type ActionFilms =
  | GetFilm
  | GetFilms
  | UpdateFilm
  | ClearFilm
  | FilmError;

// interface loadUser {
//   type: ActionType.USER_LOADED;
//   payload: string[];
// }

interface register {
  type: ActionType.REGISTER_SUCCESS;
  payload: string[];
}

interface login {
  type: ActionType.LOGIN_SUCCESS;
  payload: string[];
}

interface loadUser {
  type: ActionType.USER_LOADED;
  payload: string[];
}

interface loginFail {
  type: ActionType.LOGIN_FAIL;
  payload: null;
}

interface updateUserTickets {
  type: ActionType.UPDATE_USER;
  payload: string[];
}

interface deleteTickets {
  type: ActionType.UPDATE_USER;
  payload: string[];
}

interface logout {
  type: ActionType.LOGOUT;
  payload: null;
}

// interface login {
//   type: ActionType.USER_LOADED;
//   payload: string[];
// }

type registerFail = {
  type: ActionType.REGISTER_FAIL;
  payload: null;
}

type authError = {
  type: ActionType.AUTH_ERROR;
  payload: null;
}


export type ActionUser =
  | logout
  | deleteTickets
  | updateUserTickets
  | login
  | loadUser
  | loginFail
  | register
  | registerFail
  | authError
  ;
