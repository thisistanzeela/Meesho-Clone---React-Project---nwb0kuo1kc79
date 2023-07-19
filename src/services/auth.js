const fakeLogin = async (userName, password) => {
    // In a real-world scenario, you would authenticate the user against a backend
    // and return a JWT token upon successful login.
    // For this example, we'll use a simple fake login function.
  
    // Assuming you have a list of registered users stored in localStorage.
    const loginInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    const foundUser = loginInfo.find(
      (info) => info.userName === userName && info.password === password
    );
  
    if (foundUser) {
      // Generate a fake JWT token for demonstration purposes.
      // In a real application, you would use a server-generated token.
      const fakeToken = 'fake_jwt_token';
      return fakeToken;
    } else {
      throw new Error('Invalid username or password');
    }
  };
  
  const fakeSignUp = async (userName, email, password) => {
    // In a real-world scenario, you would handle user signup on the backend.
    // For this example, we'll use a simple fake signup function.
  
    // Assuming you have a list of registered users stored in localStorage.
    const loginInfo = JSON.parse(localStorage.getItem('userInfo')) || [];
    if (loginInfo.some((info) => info.userName === userName || info.email === email)) {
      throw new Error('Username or Email already exists');
    } else {
      const newUser = { userName, email, password };
      loginInfo.push(newUser);
      localStorage.setItem('userInfo', JSON.stringify(loginInfo));
    }
  };