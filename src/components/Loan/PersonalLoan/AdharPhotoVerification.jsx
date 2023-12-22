import React from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaContinueButton from "../../fields/ArthaContinueButton";
const AdharPhotoVerification = ({ onContinue, onBack }) => {
  const handleBack = () => {
    onBack(); // Call the onBack function passed as a prop
  };
  return (
    <div className="adharphotoverification">
      <div className="AdharOTPHeading mt-2">
        <h6>Sorry we couldn't verify your adhar </h6>
        <h6>card number</h6>
        <p className="msg mt-3">
          Please Upload Adhar Card Photo.Details For Photo. Lorem <br />
          ipsum dolor sit amet.
        </p>
      </div>
      <div className="uploadadhar mt-4">
        <div className="upload-box">
          <label htmlFor="fileInput" className="upload-label">
            <span className="upload-icon">
              <MdOutlineFileUpload />
            </span>
            Upload
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
        </div>
      </div>
      <div className="row mt-4 ">
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
          <ArthaContinueButton type="button" className="orange custom_btn">
            Continue
          </ArthaContinueButton>
        </div>
      </div>
    </div>
  );
};

export default AdharPhotoVerification;
