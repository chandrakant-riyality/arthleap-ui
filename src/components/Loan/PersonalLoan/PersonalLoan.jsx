// PersonalLoan.jsx
import React, { useState } from "react";
import Wizard from "./Wizard";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EligibilityCheckForm from "./EligibilityCheckForm";
import KYCDetailsForm from "./KYCDetailsForm";
const PersonalLoan = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleFormSubmit = (formData) => {
    // Handle form submission logic
    console.log("Form Data:", formData);
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    // Handle moving back logic
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="personalLoan">
      <div className="plFormBox">
        <div className="formWizard">
          <h4 className="text-center mb-4"> Personal Loan Application</h4>
          <Wizard activeStep={activeStep} />
        </div>
        <div className="personalForm">
          {activeStep === 0 && (
            <PersonalDetailsForm onSubmit={handleFormSubmit} />
          )}
          {activeStep === 1 && (
            <EligibilityCheckForm
              onContinue={handleFormSubmit}
              onBack={handleBack}
            />
          )}
          {activeStep === 2 && (
            <KYCDetailsForm onBack={handleBack} onContinue={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalLoan;
