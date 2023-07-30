// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import { Provider } from "react-redux";
// import { createStore, combineReducers } from "redux";
// import cartReducer from "./components/reducers/cartReducer";
// import { BrowserRouter } from "react-router-dom";

// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import cartReducer from "./components/reducers/cartReducer";
import { BrowserRouter } from "react-router-dom";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
