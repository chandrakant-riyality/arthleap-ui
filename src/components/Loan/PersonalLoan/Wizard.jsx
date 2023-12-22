import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import "./personalLoan.css";

const steps = [
  "Personal Details",
  "Eligibility Check",
  "KYC",
  "Photo Verification",
  "Employment Details",
  "Bank Statement",
  "Loan Offer",
];

const CustomStepIcon = ({ completed, index, active }) => {
  const completedColor = "green";
  const activeColor = "#0c2b6e";
  const defaultColor = "#9e9b9b";
  const textColor = active || completed ? "white" : "black";

  let color = defaultColor;

  if (completed) {
    color = completedColor;
  } else if (active) {
    color = activeColor;
  }

  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: color,
        border: `2px solid ${color}`,
        color: textColor,
        fontFamily: "Nunito Sans",
        fontSize: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {completed ? "✓" : index + 1}
    </div>
  );
};

const CustomStepConnector = () => (
  <StepConnector
    style={{
      borderTop: "2px dotted gray", // Set the style for the dotted line
    }}
  />
);

const Wizard = ({ activeStep }) => {
  return (
    <Box sx={{ width: "100%", color: "green" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomStepConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={index < activeStep}>
            <StepLabel
              StepIconComponent={(props) => (
                <CustomStepIcon
                  {...props}
                  index={index}
                  active={index === activeStep}
                />
              )}
              style={{
                fontFamily: "Nunito Sans",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "9.5px",
                  fontWeight: "900",
                  marginTop: "-10px",
                }}
              >
                {label}
              </span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Wizard;
