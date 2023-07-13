
import React, { useState } from "react";
import { connect } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import logo from "./utils/images/meeshologo.png";
import { BsSearch } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import Profile from "./login/Profile";
import Overlay from "./overlay/Overlay";
import SignInForm from "./login/SignInForm";
import Login from "./login/Login";

import { addToCart } from "./actions/cartAction";

import "../styles/Navbar.css";

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
    props.addToCart({ item: data });
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
        {/* Rest of the code */}
        <div className="cart">
          <div>
            <NavLink to="/cardcrad">
              <BsCart2 className="main-cart-logo" />
              <div className="cart-count">
                <BsTextIndentLeft /> {props.cartItems.length}
              </div>
              <h3>Cart</h3>
            </NavLink>
          </div>
        </div>
      </div>
      {/* Rest of the code */}
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
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);