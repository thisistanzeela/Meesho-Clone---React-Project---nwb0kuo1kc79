import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart, clearCart } from '../actions/cartAction';
import './Payment.css';

function Payment(props) {
  const { cartItems, removeFromCart, clearCart } = props;
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Assuming you have a selectedCartItem in the component state to identify the item to be removed
  // You can set the selectedCartItem state using useState or any other state management approach
  const [selectedCartItem, setSelectedCartItem] = useState(null);

  const handleContinueToPayment = () => {
    // Dispatch action to clear the cart when continuing to payment
    clearCart();
  };

  const handlePayNow = () => {
    if (selectedCartItem) {
      removeFromCart(selectedCartItem.data);
    }
    // Add code here to handle the payment form submission
    // For example, you can show a success message after the form is submitted
    alert('Congrats Your Order is Placed SuccessFully!!!');
    setPaymentSuccess(true);
  };

  return (
    <div>
    {paymentSuccess ? (
      <div>
        <h2>Congrats! Your Order is Placed Successfully!</h2>
        <p>Your cart is now empty.</p>
        <div>
          <Link to="/" className='link'>Continue Shopping</Link>
        </div>
      </div>
    ) : (
    <NavLink to="/payment">
      <div className="">
        <div className="payment-container">
          <div className="payment">
            <h1>Payment Detail:</h1>
            <div className="pay-detail">
              <label htmlFor="">First Name:</label>
              <input type="text" placeholder="First Name " required />
              <label htmlFor="">Last Name:</label>
              <input type="text" placeholder="Last Name " required />
              <label htmlFor="">Email:</label>
              <input type="email" placeholder="Email " required />
            </div>
            <div className="payment-option ">
              <label htmlFor="">Payment Option:</label>
              <select name="payment" id="paymentValue" required>
                <option value=""></option>
                <option value="">Credit card</option>
                <option value="">Debit card</option>
                <option value="">UPI</option>
              </select>
            </div>
            <div className="card-detail">
              <label htmlFor="">Card holder Name:</label>
              <input type="text" required />
              <label htmlFor="">Expiration</label>
              <input type="date" required />
              <label htmlFor="">CVV</label>
              <input type="text" maxLength="3" required />
            </div>
          </div>
          <div className="goback">
            <Link to="/">
              <button onClick={handlePayNow} style={{color:'white'}}>Pay Now</button>
            </Link>
          </div>
        </div>
      </div>
    </NavLink>
    )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (itemId) => dispatch(removeFromCart(itemId)),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(null, mapDispatchToProps)(Payment);
