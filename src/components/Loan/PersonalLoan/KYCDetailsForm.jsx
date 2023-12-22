import React, { useState, useRef } from "react";
import KYCAdharVerification from "./KYCAdharVerification";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { FaIdBadge, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import ArthaTextField from "../../fields/ArthaTextField";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaContinueButton from "../../fields/ArthaContinueButton";
import ArthaFormControl from "../../fields/ArthaFormControl";

export default function KYCDetailsForm({ onBack, onContinue }) {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [sameAsPresentAddress, setSameAsPresentAddress] = useState(false);
  const [isAddressProofVerified, setIsAddressProofVerified] = useState(false);
  const fileInputRefPermanent = useRef(null); // Separate ref for permanent address file input
  const fileInputRefCurrent = useRef(null); // Separate ref for current address file input
  const [isPermanentAddressProofVerified, setIsPermanentAddressProofVerified] =
    useState(false);
  const [isCurrentAddressProofVerified, setIsCurrentAddressProofVerified] =
    useState(false);

  const [showKYCAdharVerification, setShowKYCAdharVerification] =
    useState(false);

  const [formData, setFormData] = useState({
    personName: "",
    gender: "",
    residenceOwner: "",
  });

  // State for permanent address fields
  const [permanentAddressLine1, setPermanentAddressLine1] = useState("");
  const [permanentAddressLine2, setPermanentAddressLine2] = useState("");
  const [permanentPincode, setPermanentPincode] = useState("");
  const [permanentCity, setPermanentCity] = useState("");
  const [permanentState, setPermanentState] = useState("");
  const [permanentResidenceOwner, setPermanentResidenceOwner] = useState("");
  const [permanentResidenceDuration, setPermanentResidenceDuration] =
    useState("");

  // State for current address fields
  const [currentAddressLine1, setCurrentAddressLine1] = useState("");
  const [currentAddressLine2, setCurrentAddressLine2] = useState("");
  const [currentPincode, setCurrentPincode] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [currentResidenceOwner, setCurrentResidenceOwner] = useState("");
  const [currentResidenceDuration, setCurrentResidenceDuration] = useState("");

  const handleFileChangePermanent = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected permanent address file:", file);
      setIsPermanentAddressProofVerified(true);
    } else {
      setIsPermanentAddressProofVerified(false);
    }
  };

  const handleFileChangeCurrent = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected current address file:", file);
      setIsCurrentAddressProofVerified(true);
    } else {
      setIsCurrentAddressProofVerified(false);
    }
  };
  const handleUploadButtonClickPermanent = () => {
    fileInputRefPermanent.current.click();
  };

  const handleUploadButtonClickCurrent = () => {
    fileInputRefCurrent.current.click();
  };

  const handleSameAsPresentAddressChange = () => {
    setSameAsPresentAddress(!sameAsPresentAddress);

    if (!sameAsPresentAddress) {
      setCurrentAddressLine1(permanentAddressLine1);
      setCurrentAddressLine2(permanentAddressLine2);
      setCurrentPincode(permanentPincode);
      setCurrentCity(permanentCity);
      setCurrentState(permanentState);
      setCurrentResidenceOwner(permanentResidenceOwner);
      setCurrentResidenceDuration(permanentResidenceDuration);
    } else {
      setCurrentAddressLine1("");
      setCurrentAddressLine2("");
      setCurrentPincode("");
      setCurrentCity("");
      setCurrentState("");
      setCurrentResidenceOwner("");
      setCurrentResidenceDuration("");
    }
  };

  const handleBack = () => {
    onBack();
  };

  const handleContinue = () => {
    setShowKYCAdharVerification(true);
  };
  const [maritalStatus, setMaritalStatus] = useState("");

  const handleChange = (event) => {
    setMaritalStatus(event.target.value);
  };

  const [isContinueButtonDisabled, setIsContinueButtonDisabled] =
    useState(true);
  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setFormData({ ...formData, personName: nameValue });

    setIsContinueButtonDisabled(nameValue.trim() === "");
  };
  return (
    <>
      {!showKYCAdharVerification ? (
        <>
          <form className="kycform">
            <h6>KYC</h6>
            <p className="msg">Following Details gathered from CKYC</p>

            <div className="row mt-4">
              <div className="col-6">
                <ArthaTextField
                  name="personName"
                  fullWidth
                  label="Name"
                  value={formData.personName}
                  onChange={handleNameChange}
                />
              </div>

              <div className="col-md-6">
                <ArthaFormControl fullWidth>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  >
                    <MenuItem value="">Gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </ArthaFormControl>
              </div>
            </div>

            <div className="row mt-4">
              <p className="msg">Marital Status</p>
              <div className="form-check col-3 mt-2">
                <FormControlLabel
                  control={
                    <Radio
                      name="maritalStatus"
                      value="married"
                      checked={maritalStatus === "married"}
                      onChange={handleChange}
                      className={
                        maritalStatus === "married" ? "radio-selected" : ""
                      }
                    />
                  }
                  label="Married"
                />
              </div>
              <div className="form-check col-3 mt-2">
                <FormControlLabel
                  control={
                    <Radio
                      name="maritalStatus"
                      value="single"
                      checked={maritalStatus === "single"}
                      onChange={handleChange}
                      className={
                        maritalStatus === "single" ? "radio-selected" : ""
                      }
                    />
                  }
                  label="Single"
                />
              </div>
              <div className="col-md-6">
                <ArthaFormControl fullWidth>
                  <InputLabel id="residenceOwner-label">
                    Residing in Current city Since
                  </InputLabel>
                  <Select
                    labelId="residenceOwner-label"
                    id="residenceOwner"
                    name="residenceOwner"
                    value={formData.residenceOwner}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        residenceOwner: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="">Residing in Current city Since</MenuItem>
                    <MenuItem value="1yr">1 yrs</MenuItem>
                    <MenuItem value="2yrs">2 yrs</MenuItem>
                    <MenuItem value="3yrs">3 yrs</MenuItem>
                    <MenuItem value="4yrs">4 yrs</MenuItem>
                    <MenuItem value="5yrs">5 yrs</MenuItem>
                  </Select>
                </ArthaFormControl>
              </div>
            </div>

            <h6 className="mt-5">Permanent Address</h6>
            <div className="row ">
              <div className="col-md-6  mt-3">
                <ArthaTextField
                  name="permanentAddressLine1"
                  fullWidth
                  label="Address Line 1"
                  value={permanentAddressLine1}
                  onChange={(e) => setPermanentAddressLine1(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-3">
                <ArthaTextField
                  name="permanentAddressLine2"
                  fullWidth
                  label="Address Line 2"
                  value={permanentAddressLine2}
                  onChange={(e) => setPermanentAddressLine2(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaTextField
                  name="permanentPincode"
                  label="Pincode"
                  fullWidth
                  value={permanentPincode}
                  onChange={(e) => setPermanentPincode(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaTextField
                  name="permanentCity"
                  label="City"
                  fullWidth
                  value={permanentCity}
                  onChange={(e) => setPermanentCity(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaTextField
                  name="permanentState"
                  label="State"
                  fullWidth
                  value={permanentState}
                  onChange={(e) => setPermanentState(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaFormControl fullWidth>
                  <InputLabel id="permanentResidenceOwner-label">
                    Residence Owner
                  </InputLabel>
                  <Select
                    labelId="permanentResidenceOwner-label"
                    id="permanentResidenceOwner"
                    name="permanentResidenceOwner"
                    value={permanentResidenceOwner}
                    onChange={(e) => setPermanentResidenceOwner(e.target.value)}
                  >
                    <MenuItem value="">Residence Owner</MenuItem>
                    <MenuItem value="selfOwned">Self Owned</MenuItem>
                    <MenuItem value="rental">Rental</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </ArthaFormControl>
              </div>
              <div className="col-md-6 mt-4">
                <ArthaFormControl fullWidth>
                  <InputLabel id="permanentResidenceDuration-label">
                    Residence Duration
                  </InputLabel>
                  <Select
                    labelId="permanentResidenceDuration-label"
                    id="permanentResidenceDuration"
                    name="permanentResidenceDuration"
                    value={permanentResidenceDuration}
                    onChange={(e) =>
                      setPermanentResidenceDuration(e.target.value)
                    }
                  >
                    <MenuItem value="">Residence Duration</MenuItem>
                    <MenuItem value="1yr">1 yr</MenuItem>
                    <MenuItem value="2yrs">2 yrs</MenuItem>
                    <MenuItem value="3yrs">3 yrs</MenuItem>
                    <MenuItem value="4yrs">4 yrs</MenuItem>
                    <MenuItem value="5yrs">5 yrs</MenuItem>
                  </Select>
                </ArthaFormControl>
              </div>

              <label className="col-md-4 mt-4">
                <p className="msg">Permanent Address Proof</p>
                {isPermanentAddressProofVerified ? (
                  <>
                    <FaCheck className="check-icon" />
                    <span className="mt-2"> Address Proof Verified</span>
                  </>
                ) : (
                  <>
                    <FaExclamationTriangle className="badge-icon" />
                    <span className="mt-2"> Not Uploaded</span>
                  </>
                )}
              </label>
              <div className="col-md-2 d-flex align-items-end mt-4">
                <input
                  type="file"
                  ref={fileInputRefPermanent}
                  style={{ display: "none" }}
                  onChange={handleFileChangePermanent}
                />
                <Button
                  variant="contained"
                  className="upload_btn btn_white"
                  onClick={handleUploadButtonClickPermanent}
                >
                  Upload
                </Button>
              </div>
            </div>
            <h6 className="mt-5">Current Address</h6>
            <div className="row ">
              <div className="col-md-6">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="currentAddress"
                      id="sameAsPresentAddress"
                      checked={sameAsPresentAddress}
                      onChange={handleSameAsPresentAddressChange}
                    />
                  }
                  label="Same as Present Address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <ArthaTextField
                  fullWidth
                  name="currentAddressLine1"
                  label="Address Line 1"
                  value={currentAddressLine1}
                  onChange={(e) => setCurrentAddressLine1(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <ArthaTextField
                  name="currentAddressLine2"
                  label="Address Line 2"
                  fullWidth
                  value={currentAddressLine2}
                  onChange={(e) => setCurrentAddressLine2(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaTextField
                  name="currentPincode"
                  label="Pincode"
                  value={currentPincode}
                  fullWidth
                  onChange={(e) => setCurrentPincode(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaTextField
                  name="currentCity"
                  label="City"
                  value={currentCity}
                  fullWidth
                  onChange={(e) => setCurrentCity(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaTextField
                  name="currentState"
                  label="State"
                  value={currentState}
                  fullWidth
                  onChange={(e) => setCurrentState(e.target.value)}
                />
              </div>
              <div className="col-md-6 mt-4">
                <ArthaFormControl fullWidth>
                  <InputLabel id="currentResidenceOwner-label">
                    Residence Owner
                  </InputLabel>
                  <Select
                    labelId="currentResidenceOwner-label"
                    id="currentResidenceOwner"
                    name="currentResidenceOwner"
                    value={currentResidenceOwner}
                    onChange={(e) => setCurrentResidenceOwner(e.target.value)}
                  >
                    <MenuItem value="">Residence Owner</MenuItem>
                    <MenuItem value="selfOwned">Self Owned</MenuItem>
                    <MenuItem value="rental">Rental</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </ArthaFormControl>
              </div>
              <div className="col-md-6 mt-4">
                <ArthaFormControl fullWidth>
                  <InputLabel id="currentResidenceDuration-label">
                    Residence Duration
                  </InputLabel>
                  <Select
                    labelId="currentResidenceDuration-label"
                    id="currentResidenceDuration"
                    name="currentResidenceDuration"
                    value={currentResidenceDuration}
                    onChange={(e) =>
                      setCurrentResidenceDuration(e.target.value)
                    }
                  >
                    <MenuItem value="">Residence Duration</MenuItem>
                    <MenuItem value="1yr">1 yr</MenuItem>
                    <MenuItem value="2yrs">2 yrs</MenuItem>
                    <MenuItem value="3yrs">3 yrs</MenuItem>
                    <MenuItem value="4yrs">4 yrs</MenuItem>
                    <MenuItem value="5yrs">5 yrs</MenuItem>
                  </Select>
                </ArthaFormControl>
              </div>
              <label className="col-md-4 mt-4">
                <p className="msg">Current Address Proof</p>
                {isCurrentAddressProofVerified ? (
                  <>
                    <FaCheck className="check-icon" /> Address Proof Verified
                  </>
                ) : (
                  <>
                    <FaExclamationTriangle className="badge-icon" /> Not
                    Uploaded
                  </>
                )}
              </label>
              <div className="col-md-2 mt-4 d-flex align-items-end">
                <input
                  type="file"
                  ref={fileInputRefCurrent}
                  style={{ display: "none" }}
                  onChange={handleFileChangeCurrent}
                />
                <Button
                  variant="contained"
                  className="upload_btn btn_white"
                  onClick={handleUploadButtonClickCurrent}
                >
                  Upload
                </Button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6 d-flex justify-content-end">
                <ArthaClearButton variant="contained" onClick={handleBack}>
                  Back
                </ArthaClearButton>
              </div>
              <div className="col-md-6">
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
                  Continue
                </ArthaContinueButton>
              </div>
            </div>
          </form>
        </>
      ) : (
        <KYCAdharVerification
          onContinue={onContinue}
          onBack={() => setShowKYCAdharVerification(false)}
        />
      )}
    </>
  );
}
