import React, { useState, useRef, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginAPI, verifyOtpAPI } from "../actioncreators/actioncreators";
import { login, verifyOtp } from "../actions/loanAction";


const OtpForm = () => {
  const dispatch = useDispatch();
  const payload = useSelector( ( state ) => state.loginPayload );
  const [ otp, setOtp ] = useState( [ '', '', '', '', '', '' ] );
  const [ isInvalidOtp, setIsInvalidOtp ] = useState( false );
  const [ isInvalidpan, setIsInvalidpan ] = useState( false );
  const [ isOtpResend, setOtpResend ] = useState( false );
  const [ isApiDown, setIsApiDown ] = useState( false );
  const [ isResendClickable, setIsResendClickable ] = useState( false );
  const [ resendTimer, setResendTimer ] = useState( 90 );
  const navigate = useNavigate();
  const [ apiError, setApiError ] = useState( "" );


  // Use the useLocation hook to access the location object
  const location = useLocation();
  const { state } = location;
  const { mobile, panCard } = state || {};

  // Refs for individual input elements
  const inputRefs = useRef( [ ...Array( 6 ) ].map( () => React.createRef() ) );

  const handleOtpChange = ( index, value ) => {
    const newOtp = [ ...otp ];
    newOtp[ index ] = value;
    console.log( newOtp )
    setOtp( newOtp );

    // Check if the entered OTP is invalid (not '123456')
    setIsInvalidOtp( newOtp.join( '' ) === '' );

    // Move cursor to the next input box
    if ( value && index < 5 ) {
      inputRefs.current[ index + 1 ].current.focus();
    }

    // Move cursor to the previous input box on backspace
    if ( !value && index > 0 ) {
      inputRefs.current[ index - 1 ].current.focus();
    }
  };



  const otpString = otp.join( '' );
  useEffect( () => {
    const intervalId = setInterval( () => {
      setResendTimer( ( prevTimer ) => prevTimer - 1 );
    }, 1000 );

    if ( resendTimer === 0 ) {
      setIsResendClickable( true );
      clearInterval( intervalId );
    }

    return () => {
      clearInterval( intervalId );
    };
  }, [ resendTimer ] );

  const verifyOTP = () => {
    // const otpString = otp.join( '' );
    // verifyOtpAPI( otpString )
    //   .then( response => {
    //     dispatch( verifyOtp( response ) );
    //   } )
    //   .catch( error => {
    //     console.error( "Login failed:", error );
    //   } );

    let res = {
      "businessStatusCode": 2,
      "httpResponseCode": 200,
      "message": "OTP has been validated",
      "success": true
    };
    if ( res.message === "OTP has been validated" ) {
      navigate( "/home" );
    } else {
      setIsInvalidOtp( true );
      setOtp( [ "", "", "", "", "", "" ] );
      let optDiv = document.getElementsByClassName( 'otp-inputs' )[ 0 ];
      let firstInput = optDiv.getElementsByTagName( 'input' )[ 0 ];
      firstInput.focus();
    }
  }

  const handleResendOtp = async ( e ) => {
    e.preventDefault();
    setOtp( [ "", "", "", "", "", "" ] );
    setResendTimer( 90 );

    loginAPI( mobile, panCard )
      .then( response => {
        dispatch( login( response ) );
        setOtpResend( true );
      } )
      .catch( error => {
        console.error( "Login failed:", error );
      } );
  };



  return (
    <div className="login-form-new">
      <b className="title mb-3">Verify OTP</b>
      <div className="enterotp">
        <div className="enter-the-6-digit">
          Enter the 6-digit code we have sent to{" "}
        </div>
        <h6 className="verify-phone-number" style={{ fontWeight: "900" }}>
          +91 {payload.mobile}
          <a href="/">
            <FaEdit className="fa-edit-icon" />
          </a>
        </h6>
      </div>
      <div className="Verify-OTP">
        <div className="Verify-OTP-section">

          <div className="otp-inputs">
            {otp.map( ( value, index ) => (
              <input
                key={index}
                type="text"
                className={`loginOtp-input ${isInvalidOtp ? "error" : ""}`}
                maxLength="1"
                value={value}
                onChange={( e ) => handleOtpChange( index, e.target.value )}
                ref={inputRefs.current[ index ]}
              />
            ) )}
            {isInvalidOtp && (
              <p style={{ color: "red", fontSize: "10px" }}>Invalid OTP</p>
            )}
            {isInvalidpan && (
              <p style={{ color: "red", fontSize: "10px" }}>Invalid PAN</p>
            )}
            {isApiDown && (
              <p style={{ color: "red", fontSize: "10px" }}>
                Our Service is down. Please try again in some time.
              </p>
            )}
            {isOtpResend && (
              <p style={{ color: "green", fontSize: "10px" }}>
                OTP Resend Successfully
              </p>
            )}
          </div>

          <br />
          {resendTimer > 0 ? (
            <h6 className="text-center">
              Wait: 00:
              {resendTimer < 10 ? `0${resendTimer}` : resendTimer}
            </h6>
          ) : (
            <h6 className="text-center">
              Didn't receive any code?{" "}
              <a
                href="#"
                style={{ color: "rgb(255, 136, 0)", marginLeft: "5px" }}
                onClick={handleResendOtp} disabled={!isResendClickable}
              >
                <h6 className="resend-otp1">Resend OTP</h6>
              </a>
            </h6>

          )}

        </div>
      </div>
      <span
        className="btn btn-rounded verify-proceed-btn"
        onClick={verifyOTP}
        style={{
          background: "rgb(253, 95, 7)",
          width: "100%",
          borderRadius: "20px",
          marginTop: "10px",
          fontWeight: 800,
          textTransform: "none",
          // opacity: isVerifyButtonDisabled ? 0.39 : 1,
          // pointerEvents: isVerifyButtonDisabled ? "none" : "auto",
        }}
      >
        Verify & Proceed
      </span>
    </div>
  );
};

export default OtpForm;
