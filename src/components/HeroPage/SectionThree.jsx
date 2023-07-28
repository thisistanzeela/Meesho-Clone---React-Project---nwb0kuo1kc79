import React from "react";
import "./Hero.css";
import womenStoreImg from "../utils/images/womenStore.jpg";
import menStoreImg from "../utils/images/menStore.jpg";
import kidStoreImg from "../utils/images/kidStore.jpg";
import { useNavigate } from "react-router-dom"; 

const SectionThree = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to AllProduct component
    navigate("/all-products");
  };
  return (
    <div className="sectionThree">
     <div className="backgroundImg">
               <div className="  flex-container">
                 <div className="flexOne">
                  <img
                    src={womenStoreImg}
                    alt=""
                    style={{ height: "400px", margin: " 0px 10px 0px 0px" }}
                    onClick={handleViewAllClick} />
                </div>
                <div className="flexTwo">
                  <img
                    src={menStoreImg}
                    alt=""
                    style={{ height: "290px", padding: "10px" }}
                    onClick={handleViewAllClick} />
                  <img
                    src={kidStoreImg}
                    alt=""
                    style={{ height: "290px", margin: "0px 0px 0px 24px" }}
                    onClick={handleViewAllClick} />
                </div>
              </div>
            </div>
          </div>
  );
};

export default SectionThree;