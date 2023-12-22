import React, { useState } from "react";
import AdharOTPVerification from "./AdharOTPVerification";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaContinueButton from "../../fields/ArthaContinueButton";
import ArthaTextField from "../../fields/ArthaTextField";

export default function KYCAdharVerification({ onContinue, onBack }) {
  const [formData, setFormData] = useState({
    personName: "",
    gender: "",
    residenceOwner: "",
  });
  const [showAdharOTPVerification, setShowAdharOTPVerification] =
    useState(false);
  const [adharNumber, setAdharNumber] = useState("");

  const handleBack = () => {
    onBack();
  };

  const handleContinue = () => {
    setShowAdharOTPVerification(true);
  };

  const [isContinueButtonDisabled, setIsContinueButtonDisabled] =
    useState(true);

  const handleAdharChange = (e) => {
    const adharValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedAdhar = adharValue.replace(
      /(\d{4})(\d{4})(\d{4})/,
      "$1 $2 $3"
    ); // Add spaces after every 4 digits
    setAdharNumber(formattedAdhar);
    setFormData({ ...formData, personName: formattedAdhar }); // Update form data with formatted value

    setIsContinueButtonDisabled(adharValue.trim() === "");
  };

  return (
    <>
      {!showAdharOTPVerification ? (
        <>
          <div className="KYCAdharVerification">
            <div className="AdharKYCheading">
              <h6>We couldn't find CKYC linked to your PAN.</h6>
              <h6>Please verify your Adhar for KYC</h6>
            </div>
            <div className=" row justify-content-center mt-5">
              <div className="col-6">
                <ArthaTextField
                  name="adharNumber"
                  fullWidth
                  label="Adhar Card No."
                  value={adharNumber}
                  onChange={handleAdharChange}
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    maxLength: 14, // Adjusted to include the spaces
                  }}
                />
                <p className="msg">OTP Verification will be Needed</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-6 d-flex justify-content-end">
                <ArthaClearButton type="button" onClick={handleBack}>
                  Back
                </ArthaClearButton>
              </div>

              <div className="col-6">
                <ArthaContinueButton
                  variant="contained"
                  onClick={handleContinue}
                  disabled={isContinueButtonDisabled}
                  style={{
                    color: "white",
                    backgroundColor: "rgb(255, 98, 0)",
                    opacity: isContinueButtonDisabled ? 0.39 : 1,
                  }}
                >
                  Get OTP
                </ArthaContinueButton>
              </div>
            </div>
          </div>
        </>
      ) : (
        <AdharOTPVerification
          onContinue={onContinue}
          onBack={() => setShowAdharOTPVerification(false)}
        />
      )}
    </>
  );
}
