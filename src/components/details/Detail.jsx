import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import { CiStar } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Detail() {
  const data = JSON.parse(localStorage.getItem("Detail"));

  const addToCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartData.find((item) => item.data.id === data.id);

    if (existingItem) {
      existingItem.count += 1;
    } else {
      cartData.push({
        data,
        count: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const getDeliveryText = (isEven) => {
    return isEven ? "Delivery ₹62": "Free Delivery" ;
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
              <button onClick={addToCart} className="addToCart-button">
                <BsCart2 className="cart-logo" /> Add To Cart
              </button>
              <button className="buyNow-button">
                <MdKeyboardDoubleArrowRight className="arrow-logo" /> Buy Now
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
              <div className="delivery-div">
                <span>{getDeliveryText(data.id % 2 === 0)}</span>
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

export default Detail;