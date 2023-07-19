// // import React from 'react';

// // function Welcome() {
// //   return <div className="wel">
    
// //     <h1>Welcome to Meesho</h1>
      
// //       </div>;
// // }

// // export default Welcome;

// import React from 'react';
// import '../login/Profile.css';

// function Welcome({ userName }) {
//   return (
//     <div className="wel">
//       <h1>Welcome to Meesho, {userName}!</h1>
//     </div>
//   );
// }

// export default Welcome;

import React from 'react';
import '../login/Profile.css';

function Welcome({ userName }) {
  return (
    <div className="wel">
      <h1>Welcome to Meesho, {userName}!</h1>
    </div>
  );
}

export default Welcome;