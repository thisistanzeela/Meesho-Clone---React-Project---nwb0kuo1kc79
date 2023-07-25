import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartAction';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find((item) => item.data.id === action.payload?.data?.id);

      if (existingItem) {
        existingItem.count += 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { data: action.payload, count: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      const updatedCart = state.cartItems.map((item) => {
        if (item.data.id === action.payload?.data?.id) {
          return { ...item, count: 1 }; // Set count to 1 to remove the item from the cart
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCart.filter((item) => item.count > 0), // Remove items with count 0
      };
    default:
      return state;
  }
};

export default cartReducer;

