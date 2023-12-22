import React, { useState, useRef, useEffect } from "react";
import AdharPhotoVerification from "./AdharPhotoVerification";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaContinueButton from "../../fields/ArthaContinueButton";
const AdharOTPVerification = ({ onContinue, onBack }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // Updated to have six elements in the array
  const [isInvalidOtp, setIsInvalidOtp] = useState(false);
  const [showAdharPhotoVerification, setShowAdharPhotoVerification] =
    useState(false);
  const inputRefs = useRef([]);
  const resendCountdown = 0; // You may need to implement the countdown logic separately

  const handleOtpChange = (index, value) => {
    // Handle OTP input changes
    // Make sure the value is a digit before updating the state
    if (/\d/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setIsInvalidOtp(false); // Reset error state when OTP changes

      // Shift focus to the next input when a digit is entered
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }

      // Shift focus to the previous input when backspace is pressed
      if (value === "" && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleBack = () => {
    onBack(); // Call the onBack function passed as a prop
  };
  const handleContinue = () => {
    setShowAdharPhotoVerification(true);
  };
  const handleResendCode = () => {
    // Implement logic to resend the code
  };

  // Effect to focus on the first input field when component mounts
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <>
      {!showAdharPhotoVerification ? (
        <>
          <div className="AdharOTPForm">
            <div className="AdharOTPHeading mt-3">
              <h5>Verification For Adhar Card Number</h5>
              <h5>12XX XXXX 1234</h5>
              <p className="msg mt-4">
                Please Enter OTP Sent to +91 89XXX 3XXX8
              </p>
              <div className="Verify-OTP mt-5">
                <div className="Verify-OTP-section">
                  <div className="otp-inputs">
                    {otp.map((value, index) => (
                      <input
                        key={index}
                        type="text"
                        className={`otp-input ${isInvalidOtp ? "error" : ""}`}
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        ref={(ref) => (inputRefs.current[index] = ref)} // Store the reference to each input field
                      />
                    ))}
                  </div>
                  {isInvalidOtp && (
                    <p style={{ color: "red", fontSize: "10px" }}>
                      Invalid OTP
                    </p>
                  )}
                  <br />
                  {resendCountdown > 0 ? (
                    <h6 className="text-center">
                      Wait: 00:
                      {resendCountdown < 10
                        ? `0${resendCountdown}`
                        : resendCountdown}
                    </h6>
                  ) : (
                    <h6 className="text-center">
                      Didn't Receive any Code?{" "}
                      <a
                        href="#"
                        style={{ color: "rgb(255, 136, 0)", marginLeft: "5px" }}
                        onClick={handleResendCode}
                      >
                        <h6 className="mt-3">Resend Code</h6>
                      </a>
                    </h6>
                  )}
                </div>
                <div className="row mt-5 ">
                  <div className="col-6 d-flex justify-content-end">
                    <ArthaClearButton
                      type="button"
                      className="custom_btn"
                      onClick={handleBack}
                    >
                      Back
                    </ArthaClearButton>
                  </div>

                  <div className="col-6">
                    <ArthaContinueButton
                      type="button"
                      className="orange custom_btn"
                      onClick={handleContinue}
                    >
                      Continue
                    </ArthaContinueButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <AdharPhotoVerification
          onContinue={onContinue}
          onBack={() => setShowAdharPhotoVerification(false)}
        />
      )}
    </>
  );
};

export default AdharOTPVerification;
