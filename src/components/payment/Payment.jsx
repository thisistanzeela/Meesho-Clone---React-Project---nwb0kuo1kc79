// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./Payment.css";

// function Payment() {
//   return (
//     <NavLink to="/payment">
//       <div
//       className="">
//         <div className="payment-container">
//         <div className="payment">
//           <h1>Payment</h1>
//           <div className="pay-detail">
//             <label htmlFor="">First Name:</label>
//             <input type="text" placeholder="First Name " required/>
//             <label htmlFor="">Last Name:</label>
//             <input type="text" placeholder="Last Name " required/>
//             <label htmlFor="">Email:</label>
//             <input type="email" placeholder="Email " required />
//           </div>
//           <div className="payment-option ">
//             <label htmlFor="">Payment Option</label>
//             <select name="payment" id="paymentValue" required>
//               <option value=""></option>
//               <option value="">Credit card</option>
//               <option value="">Debit card</option>
//               <option value="">UPI</option>
//             </select>
//           </div>
//           <div className="card-detail">
//             <label htmlFor="">Card holder Name</label>
//             <input type="text"  required/>
//             <label htmlFor="">Expiration</label>
//             <input type="date" required/>
//             <label htmlFor="">CVV</label>
//             <input type="text" maxLength="3" required/>
//           </div>
          
//         </div>
//         <div className="goback">
//             <Link to="/"> <button>Submit</button></Link>
//         </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// }

// export default Payment;

import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { clearCart } from '../actions/cartAction'; // Import the clearCart action
import "./Payment.css";

function Payment(props) {
  const { clearCart } = props;

  const handlePaymentSubmit = () => {
    // Clear the cart
    clearCart();
    // Redirect to the main page
    window.location.href = "/";
  };

  return (
    <div>
      <div className="">
        <div className="payment-container">
          <div className="payment">
            <h1>Payment</h1>
            {/* Payment form */}
            <div className="pay-detail">
             <label htmlFor="">First Name:</label>
             <input type="text" placeholder="First Name " required/>
            <label htmlFor="">Last Name:</label>
             <input type="text" placeholder="Last Name " required/>
             <label htmlFor="">Email:</label>
           <input type="email" placeholder="Email " required />
           </div>
           <div className="payment-option ">
             <label htmlFor="">Payment Option</label>
             <select name="payment" id="paymentValue" required>
               <option value=""></option>
               <option value="">Credit card</option>
               <option value="">Debit card</option>
               <option value="">UPI</option>
             </select>
           </div>
           <div className="card-detail">
           <label htmlFor="">Card holder Name</label>
             <input type="text"  required/>
             <label htmlFor="">Expiration</label>
             <input type="date" required/>
             <label htmlFor="">CVV</label>
             <input type="text" maxLength="3" required/>
           </div>
          </div>
          <div className="goback">
            <button onClick={handlePaymentSubmit} className="paymentBtn"> <Link to="/">Submit</Link ></button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(null, mapDispatchToProps)(Payment);
