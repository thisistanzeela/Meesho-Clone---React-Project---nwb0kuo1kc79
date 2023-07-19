// import React, { useState } from 'react';
// import '../login/Profile.css';
// import { useLocalStorage } from '../useLocalStorage';

// export default function SignInForm(props) {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const [loginInfo, setLoginInfo] = useLocalStorage('userInfo', []);
//   const [infoExist, setInfoExist] = useState(false);

//   const loginFunction = (e) => {
//     e.stopPropagation();
//   };

//   const userInputHandler = (e) => {
//     setUserName(e.target.value);
//   };

//   const passwordInputHandler = (e) => {
//     setPassword(e.target.value);
//   };

//   const emailInputHandler = (e) => {
//     setEmail(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (userName !== '' && password !== '' && email !== '') {
//       const storeToLocal = {
//         userName,
//         email,
//         password,
//       };

//       if (loginInfo.some((info) => info.userName === userName || info.email === email)) {
//         setInfoExist(true);
//         return;
//       } else {
//         setLoginInfo([...loginInfo, storeToLocal]);
//       }
//     }

//     setUserName('');
//     setPassword('');
//     setEmail('');
//     props.flagSet();
//   };

//   return (
//     <>
//     <div className="SignUp-container">
//       <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="sign up img" style={{height:"auto" , width:'400px'}} />
//       <form className="SignUp" onSubmit={submitHandler}>
//         <label htmlFor="">User Name:</label>
//         <input type="text" placeholder="Username" value={userName} name="name" onChange={userInputHandler} />
//         <label htmlFor="">Email Id:</label>
//         <input type="email" placeholder="Email" value={email} name="email" onChange={emailInputHandler} />
//         <label htmlFor="">Password</label>
//         <input type="password" placeholder="Password" value={password} name="password" onChange={passwordInputHandler} />
//         <button type="submit">Sign Up</button>
//       </form>
//       <button className='dontHaveAccBtn' onClick={props.toggleForm}>Have an account already?</button>
//       </div>
//     </>
//   );
// }


import React, { useState } from 'react';
import '../login/Profile.css';
import { useLocalStorage } from '../useLocalStorage';

export default function SignInForm(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [loginInfo, setLoginInfo] = useLocalStorage('userInfo', []);
  const [infoExist, setInfoExist] = useState(false);

  const loginFunction = (e) => {
    e.stopPropagation();
  };

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName !== '' && password !== '' && email !== '') {
      const storeToLocal = {
        userName,
        email,
        password,
      };

      if (loginInfo.some((info) => info.userName === userName || info.email === email)) {
        setInfoExist(true);
        return;
      } else {
        setLoginInfo([...loginInfo, storeToLocal]);
      }
    }

    setUserName('');
    setPassword('');
    setEmail('');
    props.flagSet();
  };

  return (
    <>
      <div className="SignUp-container">
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="sign up img" style={{ height: "auto", width: '400px' }} />
        <form className="SignUp" onSubmit={submitHandler}>
          <label htmlFor="">User Name:</label>
          <input type="text" placeholder="Username" value={userName} name="name" onChange={userInputHandler} />
          <label htmlFor="">Email Id:</label>
          <input type="email" placeholder="Email" value={email} name="email" onChange={emailInputHandler} />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" value={password} name="password" onChange={passwordInputHandler} />
          <button type="submit">Sign Up</button>
        </form>
        <button className='dontHaveAccBtn' onClick={props.toggleForm}>Have an account already?</button>
      </div>
    </>
  );
}