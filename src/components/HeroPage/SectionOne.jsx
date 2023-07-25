import React from "react";
import "./Hero.css";
import freeDelivery from "../utils/images/free-delivery.png";
import cod from "../utils/images/cod.png";
import easyReturn from "../utils/images/easy-return.png";
import playstoreImg from "../utils/images/playstoreSmallIcon.png";
import meeshoMakeoverImg from "../utils/images/makeover.jpg";

const SectionOne = () => {
  return (
    <div className="sectionOne grid-container">
      

        <div className="col-1">

        <div className="h1-div">
          <h1>
            <span className="underline">Low</span>est Prices
            <br />
            Best Quality Shopp
            <span className="underline">ing</span>
          </h1>
        </div>
        <div className="flex">
          <div>
            <img src={freeDelivery} alt="Free-Delivery-img" />
            <span>
              Free
              <br /> Delivery
            </span>
          </div>
          <div className="divide"></div>
          <div>
            <img src={cod} alt="cod-img" />
            <span>
              Cash on
              <br /> Delivery
            </span>
          </div>
          <div className="divide"></div>
          <div>
            <img src={easyReturn} alt="easy-return-img" />
            <span>
              Easy
              <br /> Returns
            </span>
          </div>
        </div>
        <div className="downloadBtn">
          <img src={playstoreImg} alt="playstore-icon" />
          <span>Download the Meesho App</span>
        </div>

     
      </div>

      
      <div className="col-2">
        <img
          className="hero-img"
          src={meeshoMakeoverImg}
          alt="makeover img"
        />
      </div>
    </div>
  );
};

export default SectionOne;