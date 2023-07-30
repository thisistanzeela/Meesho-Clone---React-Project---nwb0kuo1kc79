import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

function ContinueButton() {
  return (
    <div className="flex-box">

      <div className='cart-payment'>
        <span>Clicking on ‘Continue’ will not deduct any money!</span>
        <Link to='/payment' className='continue' style={{color:'white'}}>
          <span style={{backgroundColor:'transparent'}}className='continue-span-btn'>Continue</span>
        </Link>
      </div>
      <div className="continue-img">
        <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt=""  style={{height:'20vh',width:'22vw',marginTop:'4px'}}/>
      </div>
    </div>
  );
}

export default ContinueButton;