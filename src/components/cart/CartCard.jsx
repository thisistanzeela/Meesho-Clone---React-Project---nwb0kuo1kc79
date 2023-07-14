import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css';

function CartCard(props) {
  const storageDetails = JSON.parse(localStorage.getItem('cart'));
  const [addcart, setAddcart] = useState(null);

  useEffect(() => {
    setAddcart(props.cartItem);
  }, [props.cartItem]);

  const increment = (arg) => {
    const updatedCart = storageDetails.map((item) => {
      if (item.data.id === arg.data.id) {
        const updatedCount = item.count + 1;
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setAddcart(updatedCart.find((item) => item.data.id === arg.data.id));
  };

  const decrement = (arg) => {
    const updatedCart = storageDetails.map((item) => {
      if (item.data.id === arg.data.id) {
        const updatedCount = item.count - 1;
        if (updatedCount === 0) {
          return null; // Remove item from cart
        }
        return { ...item, count: updatedCount };
      }
      return item;
    }).filter(Boolean);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setAddcart(updatedCart.find((item) => item.data.id === arg.data.id));
  };

  const getItemPrice = () => {
    if (addcart && addcart.count === 1) {
      return addcart.data.price;
    } else if (addcart && addcart.count > 1) {
      return addcart.data.price * addcart.count;
    }
    return 0;
  };


  return (
    <div className='cartt'>
      {addcart === null || storageDetails.length === 0 ? (
        ''
      ) : (
        <div className="cart-detail">
          <div className="cart-data">
            <img src={addcart.data.image} alt="" />
            <p>{addcart.data.title}</p>
            <h4>₹ {getItemPrice()}</h4>
            <div className="handle">
              <button onClick={() => decrement(addcart)}>-</button>
              <h2>{addcart.count}</h2>
              <button onClick={() => increment(addcart)}>+</button>
            </div><span className='equalSign'>=</span>
            <NavLink to="/payment">
              <button className="buynow">Buy Now</button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartCard;
