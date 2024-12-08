import React from 'react';
import './LoginScreen.css'; // Custom styles, if needed

const LoginScreen = () => {
  return (
    <div className="login-screen-container">
      <div className="background-layer"></div>
      <div id="login-page" className="login-content">
        <h2 className="app-title">MusicApp</h2>
        <div className="button-container">
          <button className="btn btn-success connect-btn">Connect to Jampa</button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
