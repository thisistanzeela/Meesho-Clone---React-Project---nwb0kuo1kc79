
import { ADD_TO_CART } from "../actions/cartAction";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { item } = action.payload;
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.data.id === item.data.id
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.cartItems.push({
          data: item.data,
          count: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));

      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
};

export default cartReducer;