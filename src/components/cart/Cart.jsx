// import React from 'react';
// import { BsTextIndentLeft } from 'react-icons/bs';
// import CartCard from './CartCard';
// // import { useLocalStorage } from '../useLocalStorage';
// import { Link } from 'react-router-dom';
// import './Cart.css';

// function Cart() {
//   const cartData = JSON.parse(localStorage.getItem('cart'));

//   return (
//     <div>
//       {cartData && cartData.length > 0 ? (
//         cartData.map((item, index) => (
//           <CartCard key={index} cartItem={item} />
//         ))
//       ) : (
//         <div className="no-item-msg">
//           <img src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="" />
//           <p className=''>Your cart is empty</p>
//           <div>
//             <Link to="/" className='link'>View Products</Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { BsTextIndentLeft } from "react-icons/bs";
import CartCard from "./CartCard";
import "./Cart.css";

function Cart({ cartItems }) {
  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <div className="cart-count">
            <BsTextIndentLeft /> {cartItems.length}
          </div>
          {cartItems.map((item, index) => (
            <CartCard key={index} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="no-item-msg">
          <img src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="" />
          <p className=''>Your cart is empty</p>
          <div>
            <Link to="/" className='link'>View Products</Link>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);