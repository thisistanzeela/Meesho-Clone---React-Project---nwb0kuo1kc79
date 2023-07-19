
import React from 'react';
import { BsTextIndentLeft } from 'react-icons/bs';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Cart.css';

function Cart(props) {
  const { cartItems } = props;

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartCard key={index} cartItem={item} />
        ))
      ) : (
        <div className="no-item-msg">
          <img src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="" />
          <p className="">Your cart is empty</p>
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
    cartItems: state.cart.cartItems 
  };
};

export default connect(mapStateToProps)(Cart);