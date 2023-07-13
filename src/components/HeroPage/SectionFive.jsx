import React from "react";
import "./Hero.css";
import viewBtn from "../utils/images/viewall.jpg";
import accessoriesImg from "../utils/images/accesseries.jpg";
import accessoriesBtn from "../utils/images/accessoriesBtn.jpg";
import footwearImg from "../utils/images/footwear.jpg";
import footwearBtn from "../utils/images/footwearBtn.jpg";
import ElectronicsImg from "../utils/images/electronics.jpg";
import ElectronicsBtn from "../utils/images/electronicsBtn.jpg";

const SectionFive=()=>{
    return(
        <div className="sectionFive">
                 <div className="backgroungImg3">
                   <div className="flex-container">
                     <div className="col1">
                       <img src={viewBtn} alt="" />
                     </div>
                     <div className="col2">
                      <img src={accessoriesImg} alt="" />
                      <img src={accessoriesBtn} alt="" />
                    </div>
                     <div className="col3">
                      <img src={footwearImg} alt="" />
                       <img src={footwearBtn} alt="" />
                     </div>
                     <div className="col4">
                       <img src={ElectronicsImg} alt="" />
                       <img src={ElectronicsBtn} alt="" />
                     </div>
                   </div>
                 </div>
               </div>
    )
}
export default SectionFive;