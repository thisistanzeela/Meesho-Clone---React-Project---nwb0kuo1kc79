import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom"; 
import viewBtn from "../utils/images/viewall.jpg";
import accessoriesImg from "../utils/images/accesseries.jpg";
import accessoriesBtn from "../utils/images/accessoriesBtn.jpg";
import footwearImg from "../utils/images/footwear.jpg";
import footwearBtn from "../utils/images/footwearBtn.jpg";
import ElectronicsImg from "../utils/images/electronics.jpg";
import ElectronicsBtn from "../utils/images/electronicsBtn.jpg";

const SectionFive=()=>{
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to AllProduct component
    navigate("/all-products");
  };
    return(
        <div className="sectionFive">
                 <div className="backgroungImg3">
                   <div className="flex-container">
                     <div className="col1">
                     <img src={viewBtn} alt="" onClick={handleViewAllClick} />
                     </div>
                     <div className="col2">
                      <img src={accessoriesImg} alt="" onClick={handleViewAllClick} />
                      <img src={accessoriesBtn} alt="" onClick={handleViewAllClick} />
                    </div>
                     <div className="col3">
                      <img src={footwearImg} alt="" onClick={handleViewAllClick} />
                       <img src={footwearBtn} alt="" onClick={handleViewAllClick} />
                     </div>
                     <div className="col4">
                       <img src={ElectronicsImg} alt="" onClick={handleViewAllClick} />
                       <img src={ElectronicsBtn} alt="" onClick={handleViewAllClick} />
                     </div>
                   </div>
                 </div>
               </div>
    )
}
export default SectionFive;