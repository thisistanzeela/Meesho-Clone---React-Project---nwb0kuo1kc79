import React, { useState } from 'react';
import '../login/Profile.css';
import Welcome from './Welcome';
import { useLocalStorage } from '../useLocalStorage';

export default function Login(props) {
  const [home, setHome] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [loginInfo, setLoginInfo] = useLocalStorage('userInfo', []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (userName !== '' && password !== '') {
      const foundUser = loginInfo.find((info) => info.userName === userName && info.password === password);

      if (foundUser) {
        props.loginStatus(foundUser.userName);

        setHome(false);
      } else {
        alert('Invalid username or password');
      }
    }
  };

  const userInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {home ? (
        <div className='login-container'>
          <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="sign up img" style={{height:"auto" , width:'400px'}} />
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
        <Welcome />
      )}
    </div>
  );
}

