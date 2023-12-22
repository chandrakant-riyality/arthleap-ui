import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./dashboard.css"; // Import your CSS file for styling
import {
  FaHome,
  FaWallet,
  FaCalculator,
  FaTachometerAlt,
  FaMoneyBillAlt,
} from "react-icons/fa";

const Drawer = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Declare activeIndex state

  const handleTabClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const menuItems = [
    { icon: <FaHome className="home-icon" />, label: "Home", url: "home" },
    {
      icon: <FaWallet className="home-icon" />,
      label: "My Loans",
      url: "loan",
    },
    {
      icon: <FaCalculator className="home-icon" />,
      label: "EMI Calculator",
      url: "calci",
    },
    {
      icon: <FaTachometerAlt className="home-icon" />,
      label: "Credit Score",
      url: "creditscore",
    },
    {
      icon: <FaMoneyBillAlt className="home-icon" />,
      label: "Types of Loans",
      url: "loans",
    },
  ];

  return (
    <>
      <div className="drawer">
        <div className="drawer-child"></div>
        <div className="left-nav">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={`${item.url}`}
              activeclassname="active-link" // Use 'activeclassname' instead of 'activeClassName'
              className={`left-nav-tab left-nav-tab${index} ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              {item.icon}
              <div
                className={`home-loan ${
                  activeIndex === index ? "show-label" : ""
                }`}
              >
                {item.label}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Drawer;
