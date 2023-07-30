import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_COUNT,
  CLEAR_CART,
} from '../actions/cartAction';

const initialState = {
  cartItems: [], // Set the initial state of cartItems as an empty array
  cartCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find(
        (item) => item.data.id === action.payload?.data?.id
      );

      if (existingItem) {
        existingItem.count += 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
          cartCount: state.cartCount + 1, // Increment cartCount on adding an item
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { data: action.payload, count: 1 }],
          cartCount: state.cartCount + 1, // Increment cartCount on adding a new item
        };
      }

    case REMOVE_FROM_CART:
      if (!action.payload || !action.payload.id) {
        return state; // If payload or payload.data is missing, return the current state
      }

      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.data.id !== action.payload.id),
        cartCount: state.cartCount - 1, // Decrement cartCount on removing an item
      };

    case UPDATE_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload, // Set cartCount to the new count value
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
        cartCount: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
