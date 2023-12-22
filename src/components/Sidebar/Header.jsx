import React from 'react';
import './dashboard.css'; // Assuming you have a corresponding CSS file for styling
import Logo from './public/logo.svg';
import  chev from './public/chev1-down.svg';
const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="logo">
          <img
            className="hamburger-menu-icon"
            alt=""
            src="./public/hamburger-menu.svg"
          />
          <img className="logo-icon" alt="" src={Logo} />
        </div>
        <div className="profile-component">
          <div className="profile">
            <div className="profile-child"></div>
            <div className="rs">RS</div>
          </div>
          <img className="profile" alt="" src={chev} />
        </div>
      </div>
    </div>
  );
};

export default Header;
