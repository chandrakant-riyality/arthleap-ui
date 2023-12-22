import React, { useState, useRef, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

const OtpForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isInvalidOtp, setIsInvalidOtp] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isVerifyButtonDisabled, setIsVerifyButtonDisabled] = useState(true);

  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setIsInvalidOtp(newOtp.join("") !== "123456");

    // Check if all OTP fields are filled
    const isAllFieldsFilled = newOtp.every((field) => field !== "");
    setIsVerifyButtonDisabled(!isAllFieldsFilled);

    if (value && index < 5) {
      inputRefs.current[index + 1].current.focus();
    }
    if (!value && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
    setResendCountdown(0);
  };

  const handleResendCode = () => {
    setResendCountdown(30);
  };

  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCountdown]);

  return (
    <div className="login-form-new">
      <b className="title">Verify OTP</b>
      <div className="enterotp">
        <div className="enter-the-6-digit">
          Enter the 6-digit code we have sent to{" "}
        </div>
        <h6 className="verify-phone-number" style={{ fontWeight: "900" }}>
          +91 98995 55655{" "}
          <a href="/">
            <FaEdit className="fa-edit-icon" />
          </a>
        </h6>
      </div>
      <div className="Verify-OTP">
        <div className="Verify-OTP-section">
          <div className="otp-inputs">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                className={`loginOtp-input ${isInvalidOtp ? "error" : ""}`}
                maxLength="1"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                ref={inputRefs.current[index]}
              />
            ))}
            {isInvalidOtp && (
              <p style={{ color: "red", fontSize: "10px" }}>Invalid OTP</p>
            )}
          </div>

          <br />
          {resendCountdown > 0 ? (
            <h6 className="text-center">
              Wait: 00:
              {resendCountdown < 10 ? `0${resendCountdown}` : resendCountdown}
            </h6>
          ) : (
            <h6 className="text-center">
              Didn't receive any code?{" "}
              <a
                href="#"
                style={{ color: "rgb(255, 136, 0)", marginLeft: "5px" }}
                onClick={handleResendCode}
              >
                <h6 className="resend-otp1">Resend OTP</h6>
              </a>
            </h6>
          )}
        </div>
      </div>
      <a
        href={isInvalidOtp ? "invalidotp" : "/home"}
        className="btn btn-rounded verify-proceed-btn"
        style={{
          background: "rgb(253, 95, 7)",
          width: "100%",
          borderRadius: "20px",
          marginTop: "10px",
          fontWeight: 800,
          textTransform: "none",
          opacity: isVerifyButtonDisabled ? 0.39 : 1,
          pointerEvents: isVerifyButtonDisabled ? "none" : "auto",
        }}
      >
        Verify & Proceed
      </a>
    </div>
  );
};

export default OtpForm;
