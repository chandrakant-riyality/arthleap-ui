import React from "react";
import personalLoanIcon from "../DashboardIcons/Personal Loan 2.svg";
import HomeLoanIcon from "../DashboardIcons/Home Loan 2.svg";
import EduLoanIcon from "../DashboardIcons/Education Loan 2.svg";
import BussinessLoanIcon from "../DashboardIcons/Business Loan 2.svg";
import CreditScoreIcon from "../public/group-48095437.svg";

import UpArrow from "../DashboardIcons/arrow_outward.svg";
import ForwardArrow from "../DashboardIcons/arrow_forward.svg";
import ElegibilityCheck from "../DashboardIcons/Emi Calc Web.svg";

import "./dashboard.css";
import ArthaCancelButton from "../../fields/ArthaClearButton";
import ArthaApplyButton from "../../fields/ArthaApplyButton";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard ">
        <div className="row mt-4">
          <div className="col-8">
            <div className="row dashboardHeader ">
              <div className="col-12 dashboardHeader2">
                <div className="row">
                  <div className="col-9">
                    <h6>Welcome Rahul</h6>
                    <p className="dashboardmsg">
                      We will build your profile as you start applying or you
                      can complete it now
                    </p>
                  </div>
                  <div className="col-3 mt-2 d-flex justify-content-center">
                    <ArthaCancelButton
                      type="button"
                      className="custom_btn"
                      style={{
                        width: "150px",
                        color: "gray",
                      }}
                    >
                      Complete Profile
                    </ArthaCancelButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="row loanSection mt-2 loans">
              <span className="loanMsg">
                Loan Types <img src={ForwardArrow} />{" "}
              </span>

              <div className="col-12 mt-2 ">
                <div
                  className="row"
                  style={{ flexWrap: "nowrap", overflowX: "hidden" }}
                >
                  <div className="col-3  loanBoxes">
                    <div className="row mt-2">
                      <div className="col-9  ">
                        <img src={personalLoanIcon} />
                        <span className="LoanHeading">Personal Loan</span>
                      </div>
                      <div className="col-3">
                        <img src={UpArrow} />
                      </div>
                      <div className="col-12">
                        <span className="loandiscription">
                          Avail personal loan for holiday, home renovation and
                          marriage at attractive interest.
                        </span>
                      </div>
                      <div className="col-12 pb-1">
                        <div className="row">
                          <div className="col-3 d-flex justify-content-start">
                            <span className="offer">Offers</span>
                          </div>
                          <div className="col-6"></div>
                          <div className="col-3 d-flex justify-content-end">
                            <a href="home/personalloans" class="apply">
                              Apply
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3  loanBoxes">
                    <div className="row mt-2">
                      <div className="col-9 ">
                        <img src={HomeLoanIcon} />
                        <span className="LoanHeading">Home Loan</span>
                      </div>
                      <div className="col-3">
                        <img src={UpArrow} />
                      </div>
                      <div className="col-12">
                        <span className="loandiscription">
                          Avail personal loan for holiday, home renovation and
                          marriage at attractive interest.
                        </span>
                      </div>
                      <div className="col-12 pb-1">
                        <div className="row">
                          <div className="col-3 d-flex justify-content-start">
                            <span className="offer">Offers</span>
                          </div>
                          <div className="col-6"></div>
                          <div className="col-3 d-flex justify-content-end">
                            <span className="apply">Apply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3  loanBoxes">
                    <div className="row mt-2">
                      <div className="col-9 ">
                        <img src={BussinessLoanIcon} />
                        <span className="LoanHeading">Bussiness Loan</span>
                      </div>
                      <div className="col-3">
                        <img src={UpArrow} />
                      </div>
                      <div className="col-12">
                        <span className="loandiscription">
                          Avail personal loan for holiday, home renovation and
                          marriage at attractive interest.
                        </span>
                      </div>
                      <div className="col-12 pb-1">
                        <div className="row">
                          <div className="col-3 d-flex justify-content-start">
                            <span className="offer">Offers</span>
                          </div>
                          <div className="col-6"></div>
                          <div className="col-3 d-flex justify-content-end">
                            <span className="apply">Apply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3   loanBoxes">
                    <div className="row mt-2">
                      <div className="col-9 ">
                        <img src={EduLoanIcon} />
                        <span className="LoanHeading">Education Loan</span>
                      </div>
                      <div className="col-3">
                        <img src={UpArrow} />
                      </div>
                      <div className="col-12">
                        <span className="loandiscription">
                          Avail personal loan for holiday, home renovation and
                          marriage at attractive interest.
                        </span>
                      </div>
                      <div className="col-12 pb-1">
                        <div className="row">
                          <div className="col-3 d-flex justify-content-start">
                            <span className="offer">Offers</span>
                          </div>
                          <div className="col-6"></div>
                          <div className="col-3 d-flex justify-content-end">
                            <span className="apply">Apply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" row eligibilityCheck mt-2">
              <div className="col-12">
                <img src={ElegibilityCheck} alt="" style={{ width: "101%" }} />
              </div>
            </div>
          </div>
          <div className="col-3 mt-5">
            <div className="row">
              <div className="col-12 ">
                <div className="creditScore">
                  <h6>Credit Score</h6>
                  <p className="creditscore-subheading">
                    Get you Free CIBIL score and report instantly
                  </p>
                  <div className="row col-12 d-flex justify-content-center my-2">
                    <ArthaApplyButton
                      type="button"
                      className="custom_btn mx-auto"
                      style={{
                        width: "40%",
                        color: "gray",
                      }}
                    >
                      Check Score
                    </ArthaApplyButton>
                  </div>
                  <p className="creditscore-subheading2">
                    Your Personal Information is 100% secured with us. We do not
                    share your data with any third party.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-12 ">
                <div className="creditScore">
                  <h6>Exciting Deals</h6>
                  <img className="offerImages" alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
