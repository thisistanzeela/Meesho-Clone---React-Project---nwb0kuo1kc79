// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { removeFromCart, updateCartCount  } from '../actions/cartAction';
// import './Cart.css';
// import { Link } from 'react-router-dom';

// function CartCard(props) {
//   const { cartItem, removeFromCart, updateCartCount , proceedToPayment } = props;
//   const [count, setCount] = useState(cartItem.count);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     if (count > 1) {
//       setCount((prevCount) => prevCount - 1);
//     } else {
//       // If count is 1 and not proceeding for payment, remove the item from the cart
//       if (!proceedToPayment) {
//         removeFromCart(cartItem.data);
//       }
//     }
//   };

//   const getItemPrice = () => {
//     if (cartItem && cartItem.data) {
//       return cartItem.data.price * count;
//     }
//     return 0;
//   };

//   useEffect(() => {
//     // Update the cart count in the Redux store whenever count changes
//     updateCartCount(count);
//   }, [count, updateCartCount]);

//   // Check if cartItem or cartItem.data is available before accessing properties
//   if (!cartItem || !cartItem.data) {
//     return null; // Return null or any fallback UI if cartItem or cartItem.data is not available
//   }
//   const handleRemoveFromCart = () => {
//     removeFromCart(cartItem.data);
//   };


//   return (
//     <div className='cartt'>
//       <div className='cart-data'>
//         {cartItem.data.image && <img src={cartItem.data.image} alt='' />}
//         <div className='cart-data-detail'>
//           <p>{cartItem.data.title}</p>
//           <p className='lead'>Free delivery</p>
//           <h4>₹ {getItemPrice()}</h4>
//           <div className='handle'>
//             <button onClick={decrement}>-</button>
//             <h2>{count}</h2>
//             <button onClick={increment}>+</button>
//           </div>
//           <span className='equalSign'></span>
//           <button onClick={handleRemoveFromCart} className='buynow'>
//             X Remove
//           </button>
//         </div>
//         <div className='cart-payment'>
//           <span>Clicking on ‘Continue’ will not deduct any money!</span>
//           <Link to='/payment' className='continue'>
//             Continue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (item) => dispatch(removeFromCart(item)),
//     updateCartCount: (count) => dispatch(updateCartCount(count)),
//   };
// };

// export default connect(null, mapDispatchToProps)(CartCard);






//.................................27


import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateCartCount } from '../actions/cartAction';
import './Cart.css';
import { Link } from 'react-router-dom';

function CartCard(props) {
  const { cartItem, removeFromCart, updateCartCount, proceedToPayment } = props;
  const [count, setCount] = useState(cartItem.count);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    } else {
      // If count is 1 and not proceeding for payment, remove the item from the cart
      if (!proceedToPayment) {
        removeFromCart(cartItem.data);
      }
    }
  };

  const getItemPrice = () => {
    if (cartItem && cartItem.data) {
      return cartItem.data.price * count;
    }
    return 0;
  };

  useEffect(() => {
    // Update the cart count in the Redux store whenever count changes
    updateCartCount(count);
  }, [count, updateCartCount]);

  useEffect(() => {
    // Update the local count state whenever cartItem.count changes
    setCount(cartItem.count);
  }, [cartItem.count]);

  // Check if cartItem or cartItem.data is available before accessing properties
  if (!cartItem || !cartItem.data) {
    return null; // Return null or any fallback UI if cartItem or cartItem.data is not available
  }

  const handleRemoveFromCart = () => {
    removeFromCart(cartItem.data);
  
    console.log("remove");
  };

  return (
    <div className='cartt'>
      <div className='cart-data'>
        {cartItem.data.image && <img src={cartItem.data.image} alt='' />}
        <div className='cart-data-detail'>
          <p>{cartItem.data.title}</p>
          <p className='lead'>Free delivery</p>
          <h4>₹ {getItemPrice()}</h4>
          <div className='handle'>
            <button onClick={decrement}>-</button>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
          </div>
          <span className='equalSign'></span>
          <button onClick={handleRemoveFromCart} className='buynow'>
            X Remove
          </button>
        </div>
        <div className='cart-payment'>
          <span>Clicking on ‘Continue’ will not deduct any money!</span>
          <Link to='/payment' className='continue'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
    updateCartCount: (count) => dispatch(updateCartCount(count)),
  };
};

export default connect(null, mapDispatchToProps)(CartCard);
