
import { ADD_TO_CART, CLEAR_CART } from "../actions/cartAction";
import { LOGIN_USER, LOGOUT_USER } from "../actions/authAction";

const initialState = {
  cart:{
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
    isLoggedIn: false,
    userName: "",
  }

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
    case CLEAR_CART:
      localStorage.removeItem("cart"); // Remove cart from local storage
      return {
        ...state,
        cartItems: [], // Clear the cartItems state
        isLoggedIn: false,
        userName: '',
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload,
      };

    case LOGOUT_USER:
      localStorage.removeItem("cart"); // Remove cart from local storage
      return {
        ...state,
        cartItems: [], // Clear the cartItems state
        isLoggedIn: false,
        userName: "",
      };
    default:
      return state;
  }
};
export default cartReducer;