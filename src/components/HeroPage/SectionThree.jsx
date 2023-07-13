import React from "react";
import "./Hero.css";
import womenStoreImg from "../utils/images/womenStore.jpg";
import menStoreImg from "../utils/images/menStore.jpg";
import kidStoreImg from "../utils/images/kidStore.jpg";

const SectionThree = () => {
  return (
    <div className="sectionThree">
     <div className="backgroundImg">
               <div className="  flex-container">
                 <div className="flexOne">
                  <img
                    src={womenStoreImg}
                    alt=""
                    style={{ height: "400px", margin: " 0px 10px 0px 0px" }}
                  />
                </div>
                <div className="flexTwo">
                  <img
                    src={menStoreImg}
                    alt=""
                    style={{ height: "290px", padding: "10px" }}
                  />
                  <img
                    src={kidStoreImg}
                    alt=""
                    style={{ height: "290px", margin: "0px 0px 0px 24px" }}
                  />
                </div>
              </div>
            </div>
          </div>
  );
};

export default SectionThree;