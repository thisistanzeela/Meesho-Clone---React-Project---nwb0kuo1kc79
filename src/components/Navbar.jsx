// import React, { useState } from "react";
// import "../styles/Navbar.css";
// import { CiUser } from "react-icons/ci";
// import { AiOutlineMobile } from "react-icons/ai";
// import logo from "./utils/images/meeshologo.png";
// import { BsSearch } from "react-icons/bs";
// import { BsCart2 } from "react-icons/bs";
// import Profile from "./login/Profile";
// import Overlay from "./overlay/Overlay";
// import SignInForm from "./login/SignInForm";
// import Login from "./login/Login";
// import { BrowserRouter } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
// import { addToCart, removeFromCart } from "../components/actions/cartAction";
// import Navproduct from "../components/NavProduct/Navproduct";

// import { FiMenu } from "react-icons/fi";

// function Navbar(props) {
//   const [search, setSearch] = useState("");
//   const [loginflag, setLoginflag] = useState(false);
//   const [userdata, setUserdata] = useState("");
//   const [currentForm, setCurrentForm] = useState(false);
//   const [flag, setFlag] = useState(false);

//   // State variable to control the visibility of the responsive menu
//   const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

//   // Function to toggle the responsive menu
//   const toggleResponsiveMenu = () => {
//     setShowResponsiveMenu(!showResponsiveMenu);
//   };

//   const ChangeTheState = () => {
//     setFlag(true);
//   };

//   const OverStatus = () => {
//     setFlag(false);
//   };

//   const toggleForm = () => {
//     setCurrentForm(!currentForm);
//   };

//   const loginStatus = (arg) => {
//     setLoginflag(true);
//     setUserdata(arg);
//   };

//   const SearchFun = (e) => {
//     setSearch(e.target.value);
//     props.SearchProduct(e.target.value);
//   };

//   // Function to remove all items from cart
//   const clearCart = () => {
//     props.cartItems.forEach((item) => {
//       props.removeFromCart(item.data);
//     });
//   };

//   const addToCartHandler = (data) => {
//     props.addToCart(data);
//   };

//   const removeFromCartHandler = (data) => {
//     props.removeFromCart(data);
//   };

//   return (
//     <>
//       <div className="sticky-nav">
//         <div className="main-nav nav">
//           {/* ...existing code */}
//           <div className="meesho-logo">
//             <NavLink to="/">
//               <img className="img-logo" src={logo} alt="logo" />
//             </NavLink>
//           </div>
//           <div className="search">
//             <button className="search-icon">
//               <BsSearch />
//             </button>
//             <input
//               onChange={SearchFun}
//               type="text"
//               value={search}
//               placeholder="Try Saari, Kurti or Search by Product Code"
//             />
//           </div>
//           <div className="dwl-app">
//             <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
//             <h3> Download App</h3>
//           </div>
//           <div className="divider"></div>
//           <div className="supplier">
//             <h3>Become a Supplier</h3>
//           </div>
//           <div className="divider"></div>

//           <div className="profile-main">
//             <div className="">
//               {loginflag ? (
//                 <div className="profile">
//                   <h2>{userdata}</h2>
//                 </div>
//               ) : (
//                 <div>
//                   <CiUser className="profile-logo" />
//                   <h3>Profile</h3>
//                   <Profile
//                     userdata={userdata}
//                     loginflag={loginflag}
//                     stateCallBack={ChangeTheState}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="cart">
//             <div>
//               <NavLink to="/cardcrad">
//                 <BsCart2 className="main-cart-logo" />
//                 {props.cartItems.length > 0 && (
//                   <span className="cart-count">{props.cartItems.length}</span>
//                 )}
//                 <h3>Cart</h3>
//               </NavLink>
//             </div>
//           </div>

//           {/* Hamburger menu icon */}
//           <div className="hamburger-menu" onClick={toggleResponsiveMenu}>
//             <FiMenu />
//           </div>
//         </div>

//         {/* Render the Navproduct component */}
//         <Navproduct />
//       </div>

//       {/* Responsive menu */}
//       {showResponsiveMenu && (
//         <div className="toggle-responsive-menu  toggle-box">
//           <div className="toggle-dwl-app">
//             <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
//             <h3> Download App</h3>
//           </div>
//           <div className="toggle-supplier">
//             <h3>Become a Supplier</h3>
//           </div>
//           <div className="toggle-profile-main">
//             <div className="">
//               {loginflag ? (
//                 <div className="toggle-profile">
//                   <h2>{userdata}</h2>
//                 </div>
//               ) : (
//                 <div className="flex-profile">
//                   <CiUser className="toggle-profile-logo" />
//                   <div className="">
//                     <h3>Profile</h3>
//                     <Profile
//                       userdata={userdata}
//                       loginflag={loginflag}
//                       stateCallBack={ChangeTheState}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="toggle-cart">
//             <div className="toggle-main-cart-logo">
//               <NavLink to="/cardcrad" className="toggle-cart-grid">
//                 <BsCart2 className="toggle-logo" />
//                 {props.cartItems.length > 0 && (
//                   <span className="toggle-cart-count">{props.cartItems.length}</span>
//                 )}
//                 <h3>Cart</h3>
//               </NavLink>
//             </div>
//           </div>
//           <Navproduct />
//         </div>
//       )}

//       {flag && (
//         <Overlay OverStatus={OverStatus}>
//           {currentForm ? (
//             <Login loginStatus={loginStatus} toggleForm={toggleForm} />
//           ) : (
//             <SignInForm toggleForm={toggleForm} />
//           )}
//         </Overlay>
//       )}
//     </>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart.cartItems,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (data) => dispatch(addToCart(data)),
//     removeFromCart: (data) => dispatch(removeFromCart(data)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


//......................

import React, { useState } from "react";
import "../styles/Navbar.css";
import { CiUser } from "react-icons/ci";
import { AiOutlineMobile } from "react-icons/ai";
import logo from "./utils/images/meeshologo.png";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import Profile from "./login/Profile";
import Overlay from "./overlay/Overlay";
import SignInForm from "./login/SignInForm";
import Login from "./login/Login";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../components/actions/cartAction";
import Navproduct from "../components/NavProduct/Navproduct";
import { FiMenu } from "react-icons/fi";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const [loginflag, setLoginflag] = useState(false);
  const [userdata, setUserdata] = useState("");
  const [currentForm, setCurrentForm] = useState(false);
  const [flag, setFlag] = useState(false);

  // State variable to control the visibility of the responsive menu
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  // Function to toggle the responsive menu
  const toggleResponsiveMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  const ChangeTheState = () => {
    setFlag(true);
  };

  const OverStatus = () => {
    setFlag(false);
  };

  const toggleForm = () => {
    setCurrentForm(!currentForm);
  };

  const loginStatus = (arg) => {
    setLoginflag(true);
    setUserdata(arg);
  };

  const SearchFun = (e) => {
    setSearch(e.target.value);
    props.SearchProduct(e.target.value);
  };

  // Function to remove all items from cart
  const clearCart = () => {
    props.cartItems.forEach((item) => {
      props.removeFromCart(item.data);
    });
  };

  const addToCartHandler = (data) => {
    props.addToCart(data);
  };

  const removeFromCartHandler = (data) => {
    props.removeFromCart(data);
  };

  return (
    <>
      <div className="sticky-nav">
        <div className="main-nav nav">
          {/* ...existing code */}
          <div className="meesho-logo">
            <NavLink to="/">
              <img className="img-logo" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="search">
            <button className="search-icon">
              <BsSearch />
            </button>
            <input
              onChange={SearchFun}
              type="text"
              value={search}
              placeholder="Try Saari, Kurti or Search by Product Code"
            />
          </div>
          <div className="dwl-app">
            <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
            <h3> Download App</h3>
          </div>
          <div className="divider"></div>
          <div className="supplier">
            <h3>Become a Supplier</h3>
          </div>
          <div className="divider"></div>

          <div className="profile-main">
            <div className="">
              {loginflag ? (
                <div className="profile">
                  <h2>{userdata}</h2>
                </div>
              ) : (
                <div>
                  <CiUser className="profile-logo" />
                  <h3>Profile</h3>
                  <Profile
                    userdata={userdata}
                    loginflag={loginflag}
                    stateCallBack={ChangeTheState}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="cart">
            <div>
            <NavLink to="/cardcrad">
            <BsCart2 className="main-cart-logo" />
            {props.cartItems.length > 0 && (
              <span className="cart-count">{props.cartItems.length}</span>
            )}
            <h3>Cart</h3>
              </NavLink>
            </div>
          </div>

          {/* Hamburger menu icon */}
          <div className="hamburger-menu" onClick={toggleResponsiveMenu}>
            <FiMenu />
          </div>
        </div>

        {/* Render the Navproduct component */}
        <Navproduct />
      </div>

      {/* Responsive menu */}
      {showResponsiveMenu && (
        <div className="toggle-responsive-menu  toggle-box">
          <div className="toggle-dwl-app">
            <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
            <h3> Download App</h3>
          </div>
          <div className="toggle-supplier">
            <h3>Become a Supplier</h3>
          </div>
          <div className="toggle-profile-main">
            <div className="">
              {loginflag ? (
                <div className="toggle-profile">
                  <h2>{userdata}</h2>
                </div>
              ) : (
                <div className="flex-profile">
                  <CiUser className="toggle-profile-logo" />
                  <div className="">
                    <h3>Profile</h3>
                    <Profile
                      userdata={userdata}
                      loginflag={loginflag}
                      stateCallBack={ChangeTheState}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="toggle-cart">
            <div className="toggle-main-cart-logo">
              <NavLink to="/cardcrad" className="toggle-cart-grid">
                <BsCart2 className="toggle-logo" />
                {props.cartItems.length > 0 && (
                  <span className="toggle-cart-count">{props.cartItems.length}</span>
                )}
                <h3>Cart</h3>
              </NavLink>
            </div>
          </div>
          <Navproduct />
        </div>
      )}

      {flag && (
        <Overlay OverStatus={OverStatus}>
          {currentForm ? (
            <Login loginStatus={loginStatus} toggleForm={toggleForm} />
          ) : (
            <SignInForm toggleForm={toggleForm} />
          )}
        </Overlay>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
