// import React from 'react';
// import { connect } from 'react-redux';
// import CartCard from './CartCard';
// import { Link } from 'react-router-dom';
// import './Cart.css';

// function Cart(props) {
//   const { cartItems } = props;

//   // Group cart items by their data.id and calculate total count
//   const groupedCartItems = cartItems.reduce((acc, item) => {
//     const existingItem = acc.find((groupedItem) => groupedItem.data.id === item.data.id);

//     if (existingItem) {
//       existingItem.count += item.count;
//     } else {
//       acc.push(item);
//     }

//     return acc;
//   }, []);

//   return (
//     <div>
//       {groupedCartItems.length > 0 ? (
//         groupedCartItems.map((item, index) => (
//           <CartCard key={index} cartItem={item} />
//         ))
//       ) : (
//         <div className="no-item-msg">
//           <img src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="" />
//           <p>Your cart is empty</p>
//           <div>
//             <Link to="/" className='link'>View Products</Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart.cartItems,
//   };
// };

// export default connect(mapStateToProps)(Cart);




//...................................

import React from 'react';
import { connect } from 'react-redux';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart(props) {
  console.log(props.cartItems); 
  const { cartItems } = props;

  // Group cart items by their data.id and calculate total count
  const groupedCartItems = cartItems.reduce((acc, item) => {
    const existingItemIndex = acc.findIndex((groupedItem) => groupedItem.data.id === item.data.id);
  
    if (existingItemIndex !== -1) {
      acc[existingItemIndex].count += item.count;
    } else {
      acc.push(item);
    }
  
    return acc;
  }, []);

  return (
    <div>
      {groupedCartItems.length > 0 ? (
        groupedCartItems.map((item, index) => (
          <CartCard key={index} cartItem={item} />
        ))
      ) : (
        <div className="no-item-msg">
          <img src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="" />
          <p>Your cart is empty</p>
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
