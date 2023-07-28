import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom"; 

import { FiCheckCircle } from "react-icons/fi";
// import { FaRupeeSign } from "react-icons/fa";
import supplierImg from "../utils/images/supplierImg.jpg";

const SectionSeven = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    // Navigate to AllProduct component
    navigate("/all-products");
  };
  return (
    <div className="sectionSeven">
      <img src={supplierImg} alt="" className="supplierImg" onClick={handleViewAllClick} />

      <div className="content">
        <span className="titlee">Register as a Meesho Supplier</span>
        <p className="sub-title">
          Sell your products to crores of customers at 0% commission
        </p>
        <div className="text">
          <span className="SupplierBanner1">
            <FiCheckCircle size={20} color="#06A759" className="icon" />
            <p className="text-point">Grow your business 10x</p>
          </span>
          <div className="divide"></div>
          <span className="SupplierBanner2">
            <FiCheckCircle size={20} color="#06A759" className="icon" />
            <p className="text-point">Enjoy 100% Profit</p>
          </span>
          <div className="divide"></div>
          <span className="SupplierBanner3">
            <FiCheckCircle size={20} color="#06A759" className="icon" />
            <p className="text-point"></p>
          </span>
          <p className="text-point">Sell all over India</p>
        </div>
        <div className="jmVeNL ">
         <a href="https://supplier.meesho.com/?utm_source=meesho&utm_medium=website&utm_campaign=banner" >Sign up
          now
          </a>
        </div>
      </div>
    </div>
  );
};
export default SectionSeven;
