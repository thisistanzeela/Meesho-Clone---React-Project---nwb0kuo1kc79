// import React, { useState, useEffect } from 'react';
// import '../login/Profile.css';
// import Welcome from './Welcome';
// import Profile from './Profile';
// // import { useLocalStorage } from '../useLocalStorage';

// export default function Login(props) {
//   const [home, setHome] = useState(true);
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [usersData, setUsersData] = useState(null);
//   // const [loginInfo, setLoginAInfo] = useLocalStorage('userInfo', []);

//   useEffect(() => {
//     const apicalluser = async () => {
//       const response = await fetch(
//         "https://meesho-d82c7-default-rtdb.firebaseio.com/userdata.json"
//       );
//       const data = await response.json();
//       const newdata = Object.values(data);
//       setUsersData(newdata);
//     };
//     apicalluser();
//   }, []);

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (usersData) {
//       const userData = Object.values(usersData);
//       const matchedUser = userData.find((user) => user.userName === userName);

//       if (!matchedUser) {
//         alert("User not found");
//       } else {
//         const userPassword = matchedUser.userpassword;
//         const verify = userPassword === password;
//         if (verify) {
//           alert("Login successful");
//           // Update the state to switch to the welcome screen
//           setHome(true);
//         } else {
//          alert("Invalid password");
//         }
//       }
//     } else {
//       alert("Data not available");
//     }
//   };

//   const userInputHandler = (e) => {
//     setUserName(e.target.value);
//   };

//   const passwordInputHandler = (e) => {
//     setPassword(e.target.value);
//   };

//   const logoutHandler = () => {
//     setHome(true); // Set home state to true to show the login form again
//     setUserName(''); // Clear the username
//     setPassword(''); // Clear the password
//   };

//   return (
//     <div>
//       {home ? (
//         <div className='login-container'>
//           <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="sign up img" style={{ height: "auto", width: '400px' }} />
//           <form className="logIn" onSubmit={submitHandler}>
//             <label htmlFor="">UserName:</label>
//             <input onChange={userInputHandler} type="text" placeholder="Username" />
//             <label htmlFor="">Password</label>
//             <input type="password" onChange={passwordInputHandler} placeholder="Password" />
//             <button type="submit" className='loginBtn'>Login</button>
//           </form>
//           <button className='haveAccBtn'
//             style={{ width: '100%' }}
//             onClick={() => {
//               props.toggleForm();
//             }}
//           >
//             Don't have an account?
//           </button>
//         </div>
//       ) : (
//         <Welcome userName={userName} onLogout={logoutHandler} />
//       )}
//     </div>
//   );
// }















import React, { useState, useEffect } from 'react';
import '../login/Profile.css';
import Welcome from './Welcome';
import Profile from './Profile';

export default function Login(props) {
  const [home, setHome] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    const apicalluser = async () => {
      const response = await fetch(
        "https://meesho-d82c7-default-rtdb.firebaseio.com/userdata.json"
      );
      const data = await response.json();
      const newdata = Object.values(data);
      setUsersData(newdata);
    };
    apicalluser();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  
    if (usersData) {
      const userData = Object.values(usersData);
      const matchedUser = userData.find((user) => user.userName === userName);
  
      if (!matchedUser) {
        alert("User not found");
      } else {
        const userPassword = matchedUser.userpassword;
        const verify = userPassword === password; // Define the 'verify' variable here
        if (verify) {
          alert("Login successful");
          // Update the state to switch to the welcome screen
          setHome(false);
        } else {
          alert("Invalid password");
        }
      }
    } else {
      alert("Data not available");
    }
  };
  

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const logoutHandler = () => {
    setHome(true); // Set home state to true to show the login form again
    setUserName(''); // Clear the username
    setPassword(''); // Clear the password
  };

  return (
    <div>
      {home ? (
        <div className='login-container'>
          {/* ...login form JSX... */}
          <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="sign up img" style={{ height: "auto", width: '400px' }} />
           <form className="logIn" onSubmit={submitHandler}>
             <label htmlFor="">UserName:</label>
             <input onChange={userInputHandler} type="text" placeholder="Username" />
             <label htmlFor="">Password</label>
             <input type="password" onChange={passwordInputHandler} placeholder="Password" />
             <button type="submit" className='loginBtn'>Login</button>
          </form>
          <button className='haveAccBtn'
            style={{ width: '100%' }}
            onClick={() => {
              props.toggleForm();
            }}
          >
            Don't have an account?
          </button>
        </div>
      ) : (
        <Welcome userName={userName} onLogout={logoutHandler} />
      )}

      {!home && (
        <Profile userName={userName} onLogout={logoutHandler} stateCallBack={() => setHome(true)} />
      )}
    </div>
  );
}