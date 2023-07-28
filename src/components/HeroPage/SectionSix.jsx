import React from "react";
import "./Hero.css";
import googleStoreImg from "../utils/images/googleplayImg.jpg";
import appleStoreImg from "../utils/images/appleStore.jpg";
import { useNavigate } from "react-router-dom"; 

const SectionSix=()=>{
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to AllProduct component
    navigate("/all-products");
  };
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
              <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=1897e656fd912df-0e93f2debd53c-26031d51-144000-1897e656fda143a" target="_blank" rel="noopener noreferrer">
                <img src={googleStoreImg} alt="" />
              </a>
              </div>
              <div className="btn2">
                <a href="https://apps.apple.com/us/app/meesho/id1457958492">
                <img src={appleStoreImg} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SectionSix;