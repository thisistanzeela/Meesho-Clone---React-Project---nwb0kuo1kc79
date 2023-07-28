import React from "react";
import { connect } from 'react-redux';
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import "./Detail.css";

import { addToCart } from '../actions/cartAction'; // Import the Redux action

function Detail(props) {
  const data = JSON.parse(localStorage.getItem("Detail")) || {}; // Add fallback as an empty object

  const handleAddToCart = () => {
    if (!data.id) {
      return;
    }
    // Dispatch the addToCart action to add the item to the cart
    props.addToCart({ ...data, count: 1 });
  };

  return (
    <div>
      {data === null ? (
        ""
      ) : (
        <div className="detail">
          <div className="img-div">
            <div className="img">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="btn">
              <button onClick={handleAddToCart} className="addToCart-button">
                <BsCart2 className="cart-logo" style={{fontWeight:'bold'}} /> Add To Cart
              </button>
            </div>
          </div>
          <div className="list">
            <div className="titlePrice">
              <p id="title">{data.title}</p>
              <p className="price"> ₹ {data.price}</p>
              <p className="ratingg">
                {data.rating.rate}
                <CiStar />
              </p>
              <span style={{marginLeft:'4px', fontSize:'small'}}>{data.rating.count} reviews</span>
              <div className="delivery-div">
                <span>{data.id % 2 === 0 ? "Delivery ₹62" : "Free Delivery"}</span>
              </div>
            </div>
            <div className="des">
              <h3>Description</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)), // Add the addToCart action to props
  };
};

export default connect(null, mapDispatchToProps)(Detail);

