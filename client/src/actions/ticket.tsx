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



// import axios from 'axios';
// import { ActionType } from './types';
// import { ActionCart } from '../reducers/indexTypes';
// import { Dispatch } from 'redux';


// export const AddFilmToCart = (
// 	cartFilm: CartFilm[],
// 	filmToAdd: filmData
// 	): CartFilm[] => {
  
// 	return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );

//   };


//   const removeFilmFromCart = (
//   cartFilm: CartFilm[],
//   cartFilmToRemove: filmData
// ): CartFilm[] => {
//   // find the cart item to remove
//   // const existingCartItem = cartItems.find(
//   //   (cartItem) => cartItem.id === cartItemToRemove.id
//   // );

//   // // check if quantity is equal to 1, if it is remove that item from the cart
//   // if (existingCartItem && existingCartItem.quantity === 1) {
//   //   return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   // }

//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };
