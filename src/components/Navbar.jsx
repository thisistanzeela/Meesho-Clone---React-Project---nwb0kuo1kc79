// // import React, { useState } from "react";
// // import "../styles/Navbar.css";
// // import { CiUser } from "react-icons/ci";
// // import { AiOutlineMobile } from "react-icons/ai";
// // import logo from "./utils/images/meeshologo.png";
// // import { BsSearch } from "react-icons/bs";
// // import { BsCart2 } from "react-icons/bs";
// // import Profile from "./login/Profile";
// // import Overlay from "./overlay/Overlay";
// // import SignInForm from "./login/SignInForm";
// // import Login from "./login/Login";
// // import { NavLink } from "react-router-dom";
// // import { connect } from "react-redux";
// // import { addToCart } from "../components/actions/cartAction";

// // function Navbar(props) {
// //   const [search, setSearch] = useState("");
// //   const [loginflag, setLoginflag] = useState(false);
// //   const [userdata, setUserdata] = useState("");
// //   const [currentForm, setCurrentForm] = useState(false);
// //   const [flag, setFlag] = useState(false);

// //   const ChangeTheState = () => {
// //     setFlag(true);
// //   };

// //   const OverStatus = () => {
// //     setFlag(false);
// //   };

// //   const toggleForm = () => {
// //     setCurrentForm(!currentForm);
// //   };

// //   const loginStatus = (arg) => {
// //     setLoginflag(true);
// //     setUserdata(arg);
// //   };

// //   const SearchFun = (e) => {
// //     setSearch(e.target.value);
// //     props.SearchProduct(e.target.value);
// //   };

// //   // const addToCartHandler = () => {
// //   //   const { data } = props;
// //   //   props.addToCart(data);
// //   // };

// //   return (
// //     <>
// //       <div className="main-nav nav">
// //         <div className="meesho-logo">
// //           <NavLink to="/">
// //             <img className="img-logo" src={logo} alt="logo" />
// //           </NavLink>
// //         </div>
// //         <div className="search">
// //           <button className="search-icon">
// //             <BsSearch />
// //           </button>
// //           <input
// //             onChange={SearchFun}
// //             type="text"
// //             value={search}
// //             placeholder="Try Saari, Kurti or Search by Product Code"
// //           />
// //         </div>
// //         <div className="dwl-app">
// //           <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
// //           <h3> Download App</h3>
// //         </div>
// //         <div className="divider"></div>
// //         <div className="supplier">
// //           <h3>Become a Supplier</h3>
// //         </div>
// //         <div className="divider"></div>
// //         <div className="profile">
// //           <div className="">
// //             <CiUser className="profile-logo" />
// //             {loginflag ? (
// //               <div className="profile">
               
// //                 <h2>{userdata}</h2>
// //               </div>
// //             ) : (
// //               <div>
// //                 <h3>Profile</h3>
// //                 <Profile
// //                   userdata={userdata}
// //                   loginflag={loginflag}
// //                   stateCallBack={ChangeTheState}
// //                 />
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //         <div className="cart">
// //           <div>
// //             <NavLink to="/cardcrad">
// //               <BsCart2 className="main-cart-logo" />
// //               <h3>Cart</h3>
// //             </NavLink>
// //           </div>
// //         </div>
// //       </div>
// //       {/* Add the overlay component here */}
// //       {flag && (
// //         <Overlay OverStatus={OverStatus}>
// //           {currentForm ? (
// //             <Login loginStatus={loginStatus} toggleForm={toggleForm} />
// //           ) : (
// //             <SignInForm toggleForm={toggleForm} />
// //           )}
// //         </Overlay>
// //       )}
// //     </>
// //   );
// // }

// // const mapStateToProps = (state) => {
// //   return {
// //     // cartItems: state.cart.cartItems || [],
// //     cartItems: state.cart.cartItems,
    
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     addToCart: (data) => dispatch(addToCart(data)),
// //   };
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

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
// import { NavLink } from "react-router-dom";

// export default function Navbar(props) {
//   const [search, setSearch] = useState("");
//   const [loginflag, setLoginflag] = useState(false);

//   const [userdata, setUserdata] = useState("");

//   const [currentForm, setCurrentForm] = useState(false);

//   const [flag, setFlag] = useState(false);
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

//   const SearchFun=(e)=>{
//     setSearch(e.target.value)
//     props.SearchProduct(e.target.value)
    

//   }

//   return (
//     <>
//       <div className="main-nav nav">
//         <div className="meesho-logo">
//           <NavLink to="/">
//             <img className="img-logo" src={logo} alt="logo" />
//           </NavLink>
//         </div>
//         <div className="search">
//           <button className="search-icon">
//             <BsSearch />
//           </button>

//           <input onChange={SearchFun}
//             type="text" value={search}
//             placeholder="Try Saari,Kurti or Search by Product Code"
//           />
//         </div>
//         <div className="dwl-app">
//           <AiOutlineMobile style={{ fontSize: "1.5rem" }} />
//           <h3> Download App</h3>
//         </div>
//         <div className="divider"></div>
//         <div className="supplier">
//           <h3>Become a Supplier</h3>
//         </div>
//         <div className="divider"></div>
//         <div className="profile">
//           <div className="">
//           <CiUser className="profile-logo" />
//             {loginflag ? (
//               <div className="profile">
               
//                 <h2>{userdata}</h2>
//               </div>
//             ) : (
//               <div>
//                 <h3>Profile</h3>
//                 <Profile
//                   userdata={userdata}
//                   loginflag={loginflag}
//                   stateCallBack={ChangeTheState}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="cart">
//           <div>
//             <NavLink to="/cardcrad">
//               <BsCart2 className="main-cart-logo" />
//               <h3>Cart</h3>
//             </NavLink>
//           </div>
//         </div>
//       </div>

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
import { addToCart } from "./actions/cartAction";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const [loginflag, setLoginflag] = useState(false);
  const [userdata, setUserdata] = useState("");
  const [currentForm, setCurrentForm] = useState(false);
  const [flag, setFlag] = useState(false);

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

  const addToCartHandler = () => {
    const { data } = props;
    props.addToCart(data);
  };

  return (
    <>
      <div className="main-nav nav">
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

        <div className="profile">
          <div className="">
            <CiUser className="profile-logo" />
            {loginflag ? (
              <div className="profile">
                <h2>{userdata}</h2>
              </div>
            ) : (
              <div>
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
              <h3>Cart</h3>
            </NavLink>
          </div>
        </div>
      </div>
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
    cartItems: state.cart.cartItems ,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);