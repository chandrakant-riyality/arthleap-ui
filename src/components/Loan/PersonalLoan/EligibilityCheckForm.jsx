import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import EligibilityTenureForm from "./EligibilityTenureForm";
import ArthaContinueButton from "../../fields/ArthaContinueButton.js";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaTextField from "../../fields/ArthaTextField";
import ArthaFormControl from "../../fields/ArthaFormControl.js";
import ArthaInputLabel from "../../fields/ArthaInputLabel.js";
import "./personalLoan.css";

const EligibilityCheckForm = ({ onContinue, onBack }) => {
  const [showEligibilityTenureForm, setShowEligibilityTenureForm] =
    useState(false);

  // Initialize formData state
  const [formData, setFormData] = useState({
    employmentType: "",
    monthlyIncome: "",
    existingObligationEMI: "",
    loanAmount: "",
    tenure: "",
    purpose: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleContinue = () => {
    setShowEligibilityTenureForm(true);
  };

  const handleBack = () => {
    onBack(); // Call the onBack function passed as a prop
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update formData state based on the input field
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the form on each change
    validateForm();
  };

  const validateForm = () => {
    const {
      employmentType,
      monthlyIncome,
      existingObligationEMI,
      loanAmount,
      tenure,
    } = formData;

    // Validate each field
    const isEmploymentTypeValid = employmentType !== "";
    const isMonthlyIncomeValid = /^\d+$/.test(monthlyIncome);
    const isExistingObligationEMIValid = /^\d+$/.test(existingObligationEMI);
    const isLoanAmountValid = /^\d+$/.test(loanAmount);
    const isTenureValid = tenure !== "" && tenure !== "0";

    // Update the overall form validity
    setIsFormValid(
      isEmploymentTypeValid &&
        isMonthlyIncomeValid &&
        isExistingObligationEMIValid &&
        isLoanAmountValid &&
        isTenureValid
    );
  };

  return (
    <>
      {!showEligibilityTenureForm ? (
        <>
          <h6 className="text">Financial Details</h6>

          <form className="mt-4">
            <div className="row mb-4">
              <p className="msg">Employment Type</p>
              <div className="form-outline col-6">
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="salaried"
                      control={<Radio />}
                      label={
                        <span
                          className={
                            formData.employmentType === "salaried"
                              ? "selected-label"
                              : ""
                          }
                        >
                          Salaried
                        </span>
                      }
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="selfEmployed"
                      control={<Radio />}
                      label={
                        <span
                          className={
                            formData.employmentType === "selfEmployed"
                              ? "selected-label"
                              : ""
                          }
                        >
                          Self Employed
                        </span>
                      }
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-6">
                <ArthaTextField
                  id="outlined-basic"
                  name="monthlyIncome"
                  label="₹ Monthly Income"
                  fullWidth
                  variant="outlined"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                />
                <p className="msg">As per Bank Statement</p>
              </div>
              <div className="col-md-6">
                <ArthaTextField
                  id="outlined-basic"
                  name="existingObligationEMI"
                  label="₹ Existing Obligation EMI"
                  fullWidth
                  variant="outlined"
                  value={formData.existingObligationEMI}
                  onChange={handleChange}
                />
                <p className="msg">Total amount per month</p>
              </div>
            </div>

            <h6 className="text mt-4">Loan Requirement</h6>
            <div className="row mt-4">
              <div className="col-md-6 ">
                <ArthaTextField
                  name="loanAmount"
                  label="₹ Loan Amount"
                  defaultValue=""
                  fullWidth
                  variant="outlined"
                  value={formData.loanAmount}
                  onChange={handleChange}
                />
                <p className="msg">Preferred Loan Amount</p>
              </div>
              <div className="col-md-6">
                <ArthaFormControl fullWidth>
                  <ArthaInputLabel id="tenure-label">Tenure</ArthaInputLabel>
                  <Select
                    labelId="tenure-label"
                    id="tenure"
                    name="tenure"
                    required
                    value={formData.tenure}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Tenure</MenuItem>
                    <MenuItem value={6}>6 Months</MenuItem>
                    <MenuItem value={12}>12 Months</MenuItem>
                    <MenuItem value={18}>18 Months</MenuItem>
                    <MenuItem value={24}>24 Months</MenuItem>
                    <MenuItem value={30}>30 Months</MenuItem>
                    <MenuItem value={36}>36 Months</MenuItem>
                    <MenuItem value={42}>42 Months</MenuItem>
                    <MenuItem value={48}>48 Months</MenuItem>
                    <MenuItem value={54}>54 Months</MenuItem>
                    <MenuItem value={60}>60 Months</MenuItem>
                  </Select>
                  <p className="msg">Preferred Tenure</p>
                </ArthaFormControl>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <ArthaTextField
                  name="purpose"
                  label="Purpose (Optional)"
                  fullWidth
                  variant="outlined"
                  value={formData.purpose}
                  onChange={handleChange}
                />
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
                  disabled={!isFormValid}
                  // Add style based on form validity
                  style={{
                    backgroundColor: isFormValid
                      ? "rgba(255, 115, 0, 1)" // Original color when form is valid
                      : "rgb(255 98 0 / 39%)", // Lower opacity when form is not valid
                  }}
                >
                  Continue
                </ArthaContinueButton>
              </div>
            </div>
          </form>
        </>
      ) : (
        <EligibilityTenureForm
          onContinue={onContinue}
          onCancel={() => setShowEligibilityTenureForm(false)}
        />
      )}
    </>
  );
};

export default EligibilityCheckForm;
