import React from "react";
import "../styles/App.css";
import Detail from "./details/Detail";
import { Switch,Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./cart/Cart";
import Payment from "./payment/Payment";
import AllProduct from '../components/viewAllProduct/AllProduct';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail" element={<><Navbar/><Detail /></>} />
        <Route path="/cardcrad" element={<><Navbar/><Cart/></>}/>
        <Route path="/payment" element={<><Navbar/><Payment/></>}/>
      </Routes>
    </div>
  );
};

export default App;


