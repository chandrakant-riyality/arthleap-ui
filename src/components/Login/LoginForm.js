import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import card from "./public/card1.svg";
import { Link } from "react-router-dom";
import { loginAPI } from "../actioncreators/actioncreators";
import { useDispatch } from "react-redux";
import { login, loginPayload } from "../actions/loanAction";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [ mobile, setMobile ] = useState( "" );
  const [ isValidMobile, setIsValidMobile ] = useState( true );
  const [ panCard, setPanCard ] = useState( "" );
  const [ isValidPanCard, setIsValidPanCard ] = useState( true );
  const [ isAgreed, setIsAgreed ] = useState( false );
  const [ isButtonDisabled, setIsButtonDisabled ] = useState( true );

  useEffect( () => {
    setIsButtonDisabled( !( isValidMobile && isValidPanCard && isAgreed ) );
  }, [ isValidMobile, isValidPanCard, isAgreed ] );

  const handleMobileChange = ( e ) => {
    const enteredMobile = e.target.value;
    const isNumeric = /^[0-9]+$/.test( enteredMobile );

    if ( isNumeric || enteredMobile === "" ) {
      setMobile( enteredMobile );
      setIsValidMobile( enteredMobile.length === 10 );
    }
  };

  const handlePanCardChange = ( e ) => {
    const enteredPanCard = e.target.value;
    setPanCard( enteredPanCard );
    const panCardRegex = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;
    setIsValidPanCard( panCardRegex.test( enteredPanCard ) );
  };

  const handleAgreeChange = () => {
    setIsAgreed( !isAgreed );
  };

  const handleMobileClick = ( e ) => {
    document.getElementById( "country-code" ).innerHTML = "+91";
  };

  const submit = () => {
    let obj = { 'mobile': mobile, 'pan': panCard };
    dispatch( loginPayload( obj ) )
    loginAPI( mobile, panCard )
      .then( response => {
        dispatch( login( response ) );
      } )
      .catch( error => {
        console.error( "Login failed:", error );
      } );
  }

  return (
    <div className="login-form-new">
      <div className="title">
        <b className="welcome">Welcome!</b>
        <div className="enter-details-to">Enter details to Login / Sign up</div>
      </div>
      <div className="form">
        <div className="mobile-no">
          <div
            className={`box ${isValidMobile ? "" : "error"}`}
            id="boxContainer"
          >
            <div className="content">
              <div className="mobile">
                <div className="rectangle-parent">
                  <div className="group-child"></div>
                  <div className="group-item"></div>
                </div>
              </div>
              <span id="country-code"></span>{" "}
              <input
                maxLength={10}
                type="text"
                className={`form-control ${isValidMobile ? "" : "error"
                  } mobile-input`}
                placeholder="Mobile No"
                value={mobile}
                onChange={handleMobileChange}
                onClick={handleMobileClick}
              />
            </div>
          </div>
          <div className="subtitle">
            <div
              className={`otp-verification-will ${isValidMobile ? "" : "invalid-input"
                }`}
            >
              {isValidMobile
                ? "OTP verification will be needed."
                : "Enter 10 digit valid number!"}
            </div>
          </div>
        </div>
        <div className="mobile-no">
          <div className={`box1 ${isValidPanCard ? "" : "error"}`}>
            <div className="content">
              <img className="card-icon1" alt="" src={card} />
              <input
                type="text"
                className={`form-control ${isValidPanCard ? "" : "error"}`}
                placeholder="PAN Card No."
                style={{ border: "0px" }}
                value={panCard}
                onChange={handlePanCardChange}
              />
            </div>
          </div>
          <div className="subtitle">
            <div
              className={`pan-card-validation ${isValidPanCard ? "" : "invalid-input"
                }`}
            >
              {isValidPanCard
                ? "Valid Pan Card."
                : "Invalid Pan Card. Please enter in the specified format."}
            </div>
          </div>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="agree"
            onChange={handleAgreeChange}
            checked={isAgreed}
          />
          <label htmlFor="agree">
            By proceeding, you agree to our{" "}
            <b>
              <a href="#" className="terms-conditions">
                Terms &amp; Conditions.
              </a>
            </b>
          </label>
        </div>
        <Link
          to={isButtonDisabled ? "#" : "getOtp"}
          className={`get-opt-sbmt ${isButtonDisabled ? "disabled" : ""}`}
          style={{ opacity: isButtonDisabled ? 0.39 : 1 }}
          onClick={submit}
        >
          Get OTP
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
