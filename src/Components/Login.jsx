import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });

  const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL ;
  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'login') {
      setLoginData(prev => ({ ...prev, [name]: value }));
    } else {
      setSignupData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Signup successful! You can now log in.');
        setIsRightPanelActive(false);
      } else {
        alert(data.message || 'Signup failed.');
      }
    } catch (err) {
      alert('Server error during signup.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${REACT_APP_BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
      alert('Login successful!');
      // Redirect to home page
      window.location.href = '/home'; 
      } else {
        alert(data.message || 'Login failed.');
      }
    } catch (err) {
      alert('Server error during login.');
    }
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1>Create Account</h1>
          <input type="text" placeholder="Username" name="username" value={signupData.username} onChange={(e) => handleInputChange(e, 'signup')} />

          <input type="email" placeholder="Email" name="email" value={signupData.email} onChange={(e) => handleInputChange(e, 'signup')} />
          <input type="password" placeholder="Password" name="password" value={signupData.password} onChange={(e) => handleInputChange(e, 'signup')} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" name="email" value={loginData.email} onChange={(e) => handleInputChange(e, 'login')} />
          <input type="password" placeholder="Password" name="password" value={loginData.password} onChange={(e) => handleInputChange(e, 'login')} />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
