import React from 'react';
import personalLoanIcon from '../public/group-48095433.svg';
import HomeLoanIcon from '../public/group-48095430.svg';
import EduLoanIcon from '../public/group-48095432.svg';
import BussinessLoanIcon from "../public/group-48095435.svg";
import CreditScoreIcon from '../public/group-48095437.svg';
import Calci from '../public/group-48095436.svg';
import './dashboard.css';
const Dashboard = () => {
    return (
        <>
        <div className="dashboard">
        <div class="get-the-right">Get the right loan for your needs</div>
        <div class="frame-parent">

        <div class="frame-group">
          <div class="frame-container">
            <div class="group-parent">
        
              <img
                class="frame-child"
                alt=""
                src={personalLoanIcon}
              />

              <b class="personal-loan">Personal Loan</b>
            </div>
            <div class="flexible-personal-loans">
              Flexible personal loans tailored to your needs.
            </div>
            <a href="home/loans" class="apply-now">Apply Now</a>
          </div>
          
        </div>
        <div class="frame-group">
          <div class="frame-container">
            <div class="group-container">
              <img
                class="frame-item"
                alt=""
                src={HomeLoanIcon}
              />

              <b class="home-loan">Home Loan</b>
            </div>
            <div class="turn-your-homeownership">
              Turn your homeownership dreams into reality.
            </div>
            <a href="#" class="apply-now">Apply Now</a>
          </div>
        </div>
        <div class="frame-group">
          <div class="frame-container">
            <div class="group-container">
              <img
                class="frame-inner"
                alt=""
                src={BussinessLoanIcon}
              />

              <b class="home-loan">Business Loan</b>
            </div>
            <div class="turn-your-homeownership">
              Catalyze your business ambitions for success.
            </div>
            <a href="#" class="apply-now">Apply Now</a>
          </div>
          
        </div>
        <div class="frame-group">
          <div class="frame-container">
            <div class="group-container">
              <img
                class="group-icon"
                alt=""
                src={EduLoanIcon}
              />

              <b class="home-loan">Education Loan</b>
            </div>
            <div class="turn-your-homeownership">
              Empower aspiration with student-friendly financing.
            </div>
            <a href="#" class="apply-now">Apply Now</a>
          </div>
         
        </div>
      </div>
      <div class="frame-parent6">
        <div class="frame-parent7">
          <div class="credit-score-checker-parent">
            <b class="credit-score-checker">Credit Score Checker</b>
            <div class="turn-your-homeownership">
              Analyse your financial health in seconds.
            </div>
          </div>
          <a href='#' class="check-now1">Check Now</a>
          <img class="frame-child1" alt="" src={CreditScoreIcon} />
        </div>
        <div class="frame-parent7">
          <div class="credit-score-checker-parent">
            <b class="credit-score-checker">EMI Calulator</b>
            <div class="turn-your-homeownership">
              Plan monthly payments effortlessly.
            </div>
          </div>
          <img class="frame-child2" alt="" src={Calci} />

          <a href='#' class="check-now1">Check Now</a>
        </div>
      </div>
    
      <div class="credit-score">Credit Score & EMI Calculator</div>
      </div>
      </>
    );
};

export default Dashboard;