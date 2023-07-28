// import React from "react";
// import "./Hero.css";
// import viewBtn from "../utils/images/viewall.jpg";
// import homeEssImg from "../utils/images/homedecor.jpg";
// import homeEssBtn from "../utils/images/homedecorBtn.jpg";
// import kitchenEssImg from "../utils/images/kitcheness.jpg";
// import kitchenEssBtn from "../utils/images/kitchenBtn.jpg";
// import healthCareImg from "../utils/images/health.jpg";
// import healthCareBtn from "../utils/images/healthBtn.jpg";


// const SectionFour=()=>{
//     return(
//         <div className="sectionFour">
//          <div className="backgroundImg2">
//            <div className="flex-container">
//              <div className="col1">
//                <img src={viewBtn} alt="" />
//              </div>
//              <div className="col2">
//                <img src={homeEssImg} alt="" />
//                <img src={homeEssBtn} alt="" />
//              </div>
//              <div className="col3">
//                <img src={kitchenEssImg} alt="" />
//                <img src={kitchenEssBtn} alt="" />
//              </div>
//              <div className="col4">
//                <img src={healthCareImg} alt="" />
//                <img src={healthCareBtn} alt="" />
//              </div>
//            </div>
//          </div>
//        </div>
//     )
// }

// export default SectionFour;





















import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import "./Hero.css";
import viewBtn from "../utils/images/viewall.jpg";
import homeEssImg from "../utils/images/homedecor.jpg";
import homeEssBtn from "../utils/images/homedecorBtn.jpg";
import kitchenEssImg from "../utils/images/kitcheness.jpg";
import kitchenEssBtn from "../utils/images/kitchenBtn.jpg";
import healthCareImg from "../utils/images/health.jpg";
import healthCareBtn from "../utils/images/healthBtn.jpg";

const SectionFour = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to AllProduct component
    navigate("/all-products");
  };
    return(
        <div className="sectionFour">
         <div className="backgroundImg2">
           <div className="flex-container">
             <div className="col1">
             <img src={viewBtn} alt="" onClick={handleViewAllClick} />
             </div>
             <div className="col2">
               <img src={homeEssImg} alt="" onClick={handleViewAllClick} />
               <img src={homeEssBtn} alt="" onClick={handleViewAllClick} />
             </div>
             <div className="col3">
               <img src={kitchenEssImg} alt="" onClick={handleViewAllClick} />
               <img src={kitchenEssBtn} alt="" onClick={handleViewAllClick} />
             </div>
             <div className="col4">
               <img src={healthCareImg} alt="" onClick={handleViewAllClick} />
               <img src={healthCareBtn} alt="" onClick={handleViewAllClick} />
             </div>
           </div>
         </div>
       </div>
    )
}

export default SectionFour;