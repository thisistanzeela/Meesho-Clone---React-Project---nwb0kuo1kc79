import React, { useState } from 'react';
import SignInForm from './SignInForm';

export default function ParentComponent() {
  const [loggedInUserName, setLoggedInUserName] = useState(null);
  const [home, setHome] = useState(true); // Define the 'home' state and its setter here

  const handleLoginSuccess = (userName) => {
    setLoggedInUserName(userName);
  };

  return (
    <div>
      {home ? (
        <SignInForm onLoginSuccess={handleLoginSuccess} setHome={setHome} /> 
      ) : (
        /* Render other components or content after the user has logged in */
        <div>
          Welcome, {loggedInUserName}!
         
        </div>
      )}
    </div>
  );
}