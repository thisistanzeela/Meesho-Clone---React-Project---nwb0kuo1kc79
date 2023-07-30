// // ParentComponent.js
// import React, { useState } from 'react';
// import SignUpForm from './SignUpForm';
// import LoginForm from './LoginForm';
// import Welcome from './Welcome';
// import Profile from './Profile';
// import { getAuth } from 'firebase/auth';
// import { getDatabase, ref, onValue } from 'firebase/database';

// export default function ParentComponent() {
//   const [home, setHome] = useState(true);
//   const [loggedInUserName, setLoggedInUserName] = useState('');
//   const [user, setUser] = useState(null);

//   const auth = getAuth();
//   const database = getDatabase();

//   const logoutHandler = () => {
//     // Logout the user
//     auth.signOut();
//     setUser(null);
//     setHome(true);
//   };

//   // Listen for authentication state changes (e.g., user login, logout)
//   onValue(auth, (user) => {
//     if (user) {
//       // User is logged in
//       setUser(user);
//       setHome(false);
//       // Get user data from Realtime Database
//       const userRef = ref(database, `users/${user.uid}`);
//       onValue(userRef, (snapshot) => {
//         const userData = snapshot.val();
//         if (userData) {
//           setLoggedInUserName(userData.userName);
//         } else {
//           setLoggedInUserName('');
//         }
//       });
//     } else {
//       // User is logged out
//       setUser(null);
//       setLoggedInUserName('');
//       setHome(true);
//     }
//   });

//   return (
//     <div>
//       {home ? (
//         // Show SignUpForm and LoginForm
//         <>
//           <SignUpForm setHome={setHome} />
//           <LoginForm setHome={setHome} />
//         </>
//       ) : (
//         <div>
//           <Welcome userName={loggedInUserName} />
//           <Profile userName={loggedInUserName} logoutHandler={logoutHandler} />
//         </div>
//       )}
//     </div>
//   );
// }
