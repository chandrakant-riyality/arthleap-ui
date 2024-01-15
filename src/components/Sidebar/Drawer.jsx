import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "./DrawerIcons/home.svg";
import Myloan from "./DrawerIcons/my-loans.svg";
import CreditScore from "./DrawerIcons/credit-score.svg";
import EmiCalci from "./DrawerIcons/emi-calculator.svg";
import LoanTypes from "./DrawerIcons/loan-types.svg";
import GreaterThan from "./DrawerIcons/Chev1_right.svg";

import "./dashboard.css"; // Import your CSS file for styling

const Drawer = () => {
  const [activeMainIndex, setActiveMainIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [isTypesOfLoanOpen, setTypesOfLoanOpen] = useState(false);

  const handleMainTabClick = (index) => {
    setActiveMainIndex(index === activeMainIndex ? null : index);
    setTypesOfLoanOpen(false); // Close the submenu when clicking on a tab
  };

  const handleSubTabClick = (index) => {
    setActiveSubIndex(index);
    setActiveMainIndex(null);
    setTypesOfLoanOpen(false); // Close the submenu when clicking on a tab
  };

  const toggleTypesOfLoan = () => {
    setTypesOfLoanOpen(!isTypesOfLoanOpen);
  };

  const loanSubmenu = [
    { label: "Personal Loan", url: "personalloans" },
    { label: "Business Loan", url: "businessloan" },
    { label: "Education Loan", url: "educationloan" },
    // Add more submenu items as needed
  ];

  const menuItems = [
    {
      icon: <img src={Home} alt="" className="home-icon" />,
      label: "Home",
      url: "",
    },
    {
      icon: <img src={Myloan} alt="" className="home-icon" />,
      label: "My Loans",
      url: "loan",
      icon2: <img src={GreaterThan} className="greater-than-icon" />,
    },
    {
      icon: <img src={EmiCalci} className="home-icon" />,
      label: "EMI Calculator",
      url: "calci",
    },
    {
      icon: <img src={CreditScore} className="home-icon" />,
      label: "Credit Score",
      url: "creditscore",
    },
    {
      icon: <img src={LoanTypes} className="home-icon" />,
      label: "Types of Loans ",
      url: "loans",
      icon2: <img src={GreaterThan} className="greater-than-icon" />,
      onClick: toggleTypesOfLoan,
    },
  ];

  return (
    <div className="drawer">
      <div className="left-nav">
        {menuItems.map((item, index) =>
          item.onClick ? (
            <span
              key={index}
              className={`left-nav-tab ${
                activeMainIndex === index ? "active" : ""
              }`}
              onClick={item.onClick}
            >
              {item.icon}
              {item.label}
              {item.icon2}
            </span>
          ) : (
            <NavLink
              key={index}
              to={`${item.url}`}
              activeClassName="active-link"
              className={`left-nav-tab ${
                activeMainIndex === index ? "active" : ""
              }`}
              onClick={() => handleMainTabClick(index)}
            >
              {React.cloneElement(item.icon, {
                style: { fill: activeMainIndex === index ? "white" : "" },
              })}
              {item.label}
            </NavLink>
          )
        )}
        <div className={`typesofloan ${isTypesOfLoanOpen ? "show" : ""}`}>
          {loanSubmenu.map((submenuItem, index) => (
            <NavLink
              key={index}
              to={submenuItem.url}
              activeClassName="active-link"
              className={`left-nav-tab ${
                activeSubIndex === index ? "active" : ""
              }`}
              onClick={() => handleSubTabClick(index)}
            >
              <span className="submenu">{submenuItem.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
