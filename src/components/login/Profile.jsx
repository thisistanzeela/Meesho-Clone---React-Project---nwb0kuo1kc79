import React from 'react';
import '../login/Profile.css';

export default function Profile(props) {
  const loginCondition = () => {
    props.stateCallBack();
  };

  return (
    <div className="profileBar">
      <div className="log-container">
        <h3>Hello User</h3>
        <p>To access your Meesho account</p>
        <button className="SignUpBtn" onClick={loginCondition}>
          SignUp
        </button>
        <button>Log Out</button>
      </div>
    </div>
  );
}




