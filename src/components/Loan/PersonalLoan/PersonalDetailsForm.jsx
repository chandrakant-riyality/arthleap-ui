import React, { useEffect, useState } from "react";
import "./personalLoan.css";
import ArthaContinueButton from "../../fields/ArthaContinueButton.js";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaTextField from "../../fields/ArthaTextField";

const PersonalDetailsForm = ( { onSubmit } ) => {
  const [ formData, setFormData ] = useState( {
    panCardNo: "",
    mobileNo: "",
    fullName: "",
    dateOfBirth: "",
    emailId: "",
    pinCode: "",
  } );

  useEffect( () => {
    //call API https://arthavedh.com:6542/user/loan/personal/details
    //which will give response { "usermobile": "8983333223","username": "PRATIK YUUU TTT","userpan": "YUUPJ9894F"}
    let response = {
      "usermobile": "8983333223",
      "username": "PRATIK YUUU TTT",
      "userpan": "YUUPJ9894F"
    };

    setFormData( {
      panCardNo: response.userpan,
      mobileNo: response.usermobile,
      fullName: response.username,
      dateOfBirth: "",
      emailId: "",
      pinCode: ""
    } )

  }, [] );
  const [ isFormValid, setIsFormValid ] = useState( false );

  const handleChange = ( e ) => {
    const { name, value } = e.target;

    // Apply specific validation based on the field name
    let updatedValue = value;

    if ( name === "panCardNo" ) {
      // Validate Pan card format: First 5 letters, 4 digits, 1 letter
      updatedValue =
        value.slice( 0, 5 ) +
        value.slice( 5, 9 ).replace( /\D/g, "" ) +
        value.slice( 9, 10 ).toUpperCase();
    } else if ( name === "fullName" ) {
      // Avoid digits in Full Name
      updatedValue = value.replace( /\d/g, "" );
    } else if ( name === "mobileNo" ) {
      // Allow only numeric values in Mobile Number
      updatedValue = value.replace( /\D/g, "" );
    } else if ( name === "pinCode" ) {
      // Allow only numeric values in Pincode
      updatedValue = value.replace( /\D/g, "" ).slice( 0, 6 );
    }

    setFormData( { ...formData, [ name ]: updatedValue } );
    validateForm();
  };

  const validateForm = () => {
    const { panCardNo, mobileNo, fullName, dateOfBirth, emailId, pinCode } =
      formData;

    const isPanCardValid = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/.test( panCardNo );
    const isMobileValid = /^\d{10}$/.test( mobileNo );
    const isFullNameValid = fullName.trim() != "";
    const isDateOfBirthValid = dateOfBirth != "";
    const isEmailValid = /^\S+@\S+\.\S+$/.test( emailId );
    let isPinCodeValid = /^\d{5}$/.test( pinCode );
    if ( isPinCodeValid ) {
      //Call API https://arthavedh.com:6542/personal-loan/pincode-validation and will get response as {statuscode=200}
      let response = { statuscode: 200 };
      if ( response.statuscode == 200 ) {
        isPinCodeValid = true;
      } else {
        isPinCodeValid = false;
      }
    }


    setIsFormValid(
      isPanCardValid &&
      isMobileValid &&
      isFullNameValid &&
      isDateOfBirthValid &&
      isEmailValid &&
      isPinCodeValid
    );
  };

  const handleClear = () => {
    setFormData( {
      panCardNo: "",
      mobileNo: "",
      fullName: "",
      dateOfBirth: "",
      emailId: "",
      pinCode: "",
    } );
    setIsFormValid( false );
  };

  const buttonStyle = {
    color: "white",
    border: "none",
    backgroundColor: isFormValid
      ? "rgba(255, 115, 0, 1)"
      : "rgb(255 98 0 / 39%)",
  };
  const clearButtonStyle = {
    color: "black",
    backgroundColor: isFormValid
      ? "rgba(255, 255, 255, 1)"
      : "rgb(255 255 255 / 39%)",
  };
  const handleContinue = () => {
    onSubmit( formData );
    // Optionally, you can perform additional logic or validation before moving to the next step
  };

  return (
    <>
      <h4 className="text">Personal Details</h4>

      <form className="mt-4">
        <div className="row mt-4">
          <div className="col-md-6">
            <ArthaTextField
              id="outlined-basic"
              name="panCardNo"
              value={formData.panCardNo}
              onChange={handleChange}
              label="Pan Card No."
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="col-md-6">
            <ArthaTextField
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              label="Mobile No."
              fullWidth
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <ArthaTextField
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              label="Full Name"
              fullWidth
            />
            <p className="msg">As per PAN</p>
          </div>
          <div className="col-md-6">
            <ArthaTextField
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder=""
              fullWidth
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6">
            <ArthaTextField
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              label="Email"
              fullWidth
            />
          </div>
          <div className="col-md-6">
            <ArthaTextField
              name="pinCode"
              maxLength="6"
              value={formData.pinCode}
              onChange={handleChange}
              label="Pincode"
              fullWidth
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mt-4 d-flex justify-content-end">
            <ArthaClearButton
              variant="contained"
              onClick={handleClear}
              disabled={!isFormValid}
              style={clearButtonStyle}
            >
              Clear
            </ArthaClearButton>
          </div>

          <div className="col-md-6 mt-4">
            <ArthaContinueButton
              variant="contained"
              onClick={handleContinue}
              disabled={!isFormValid}
              style={buttonStyle}
            >
              Continue
            </ArthaContinueButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalDetailsForm;
