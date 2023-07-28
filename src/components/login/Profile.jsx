// import React from 'react';
// import '../login/Profile.css';

// export default function Profile(props) {
//   const loginCondition = () => {
//     props.stateCallBack();
//   };

//   return (
//     <div className="profileBar">
//       <div className="log-container">
//         <h3>Hello User</h3>
//         <p>To access your Meesho account</p>
//         <button className="SignUpBtn" onClick={loginCondition}>
//           SignUp
//         </button>
//         <button>Log Out</button>
//       </div>
//     </div>
//   );
// }








import React from 'react';
import '../login/Profile.css';

export default function Profile(props) {
  const loginCondition = () => {
    props.stateCallBack();
  };

  const logoutHandler = () => {
    // Call the logoutHandler passed as a prop to update the 'home' state in the Login component
    if (props.onLogout) {
      props.onLogout();
    }
  };

  return (
    <div className="profileBar">
      <div className="log-container">
        <h3>Hello {props.userName}</h3> {/* Display the user's name */}
        <p>To access your Meesho account</p>
        <button className="SignUpBtn" onClick={loginCondition}>
          SignUp
        </button>
        <button onClick={logoutHandler}>Log Out</button> {/* Add the logout button */}
      </div>
    </div>
  );
}

