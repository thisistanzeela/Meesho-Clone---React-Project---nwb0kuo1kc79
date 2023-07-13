import React from "react";
import "./Product.css";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export function ProductList(props) {
  const detailFunction = (arg) => {
    localStorage.setItem("Detail", JSON.stringify(arg));
  };

  const listOfProduct = (arr) => {
    return arr.map((item, index) => {
      const isEven = index % 2 === 0;
      const deliveryText = isEven ? "Free Delivery" : "Delivery ₹62";

      return (
        <NavLink to="/detail" key={index}>
          <div 
            onClick={() => {
              detailFunction(item);
            }}
            className="product-card"
          >
            
            <img src={item.image} alt={item.title} />
              <p className="title">{item.title}</p>
              <div className="price-delivery-rating">
                <div className="rate">
                  <p>
                    <span>₹</span> {item.price}
                    <span> onwards</span>
                  </p>
                </div>
                <div className="delivery">
                  <span>{deliveryText}</span>
                </div>
                <div className="rating">
                  <p className="rating-p">
                    {item.rating.rate}
                    <AiFillStar />
                  </p>
                </div>
              </div>
            </div>
        </NavLink>
      );
    });
  };

  return (
    <div className="product-section">
      {props.productDetail === null ? "" : listOfProduct(props.productDetail)}
    </div>
  );
}