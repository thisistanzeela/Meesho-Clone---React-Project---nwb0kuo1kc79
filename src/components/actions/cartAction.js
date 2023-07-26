// export const ADD_TO_CART = 'ADD_TO_CART';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// // Action creators
// export const addToCart = (item) => {
//   return {
//     type: ADD_TO_CART,
//     payload: item,
//   };
// };

// export const removeFromCart = (itemId) => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: itemId,
//   };
// };


//...25.......................

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_COUNT='UPDATE_CART_COUNT'
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const updateCartCount = (count) => {
  return {
    type: UPDATE_CART_COUNT,
    payload: count,
  };
};