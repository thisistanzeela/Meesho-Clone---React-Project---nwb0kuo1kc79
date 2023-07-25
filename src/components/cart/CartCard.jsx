import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { connect } from 'react-redux';

function CartCard(props) {
  const { cartItem, addToCart, removeFromCart } = props;
  const [count, setCount] = useState(cartItem.count);

  useEffect(() => {
    setCount(cartItem.count);
  }, [cartItem.count]);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      addToCart({ ...cartItem.data, count: newCount });
      return newCount;
    });
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        addToCart({ ...cartItem.data, count: newCount });
        return newCount;
      });
    }
  };

  const getItemPrice = () => {
    if (cartItem && cartItem.data) {
      return cartItem.data.price * count;
    }
    return 0;
  };


  if (!cartItem) {
    return null; // Return null if cartItem is not defined
  }


  return (
    <div className='cartt'>
      <div className="cart-detail">
        {cartItem.data.image && (
          <img src={cartItem.data.image} alt="" />
        )}
        <p>{cartItem.data.title}</p>
        <p>Free delivery</p>
        <h4>₹ {getItemPrice()}</h4>
        <div className="handle">
          <button onClick={decrement}>-</button>
          <h2>{count}</h2>
          <button onClick={increment}>+</button>
        </div>
        <span className='equalSign'></span>
        <NavLink to="/payment">
          <button className="buynow">Buy Now</button>
        </NavLink>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
    removeFromCart: (data) => dispatch(removeFromCart(data)),
  };
};

export default connect(null, mapDispatchToProps)(CartCard);
