// LoginModule.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file
import LoginForm from './LoginForm'; // Import the LoginForm component
import OtpForm from './OtpForm';
import logo from './public/logo.svg';

const LoginModule = () => {
  return (
    <div className="web-1">
      <div className="container">
       
        <Routes>
          <Route path="/getOtp" element={<OtpForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
       
        <div className="logo-tagline">
          <img className="mainLogo" alt="" src={logo} />
          <div className="tagline ">Chutkiyon mei aapke bank account mei</div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
};

export default LoginModule;
