import React from "react";
import "./Hero.css";
import googleStoreImg from "../utils/images/googleplayImg.jpg";
import appleStoreImg from "../utils/images/appleStore.jpg";

const SectionSix=()=>{
    return(
        <div className="sectionSix">
        <div className="backgroundImg4">
          <div className="flexColumn">
            <div className="">
              <p>Become a Reseller and</p>
            </div>
            <div className="">
              <h2>Start your Online Business</h2>
              <h2> with Zero Investment</h2>
            </div>
            <div className="playStoreBtn">
              <div className="btn1">
                <img src={googleStoreImg} alt="" />
              </div>
              <div className="btn2">
                <img src={appleStoreImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SectionSix;