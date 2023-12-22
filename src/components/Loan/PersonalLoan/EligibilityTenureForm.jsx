import React, { useState } from "react";
import ArthaClearButton from "../../fields/ArthaClearButton";
import ArthaContinueButton from "../../fields/ArthaContinueButton";
export default function EligibilityTenureForm({ onContinue, onCancel }) {
  const [loanAmount, setLoanAmount] = useState(250000); // Default value: 2.5 lakhs
  const [tenure, setTenure] = useState(15); // Default value: 15 months

  const handleContinue = () => {
    // Handle eligibility tenure form submission logic
    // Call onContinue when done
    onContinue();
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(parseInt(event.target.value, 10));
  };

  const handleTenureChange = (event) => {
    setTenure(parseInt(event.target.value, 10));
  };

  return (
    <>
      <div className="tenure-heading">
        <h6 className="text">Congrats! Here's Your eligible amount & tenure</h6>
        <p className="msg">
          {" "}
          Loan Amount & tenure set hare will be used for loan offer in
          subsequent step
        </p>
      </div>

      <form className="row mt-4">
        <div className="tenure">
          <div className="row">
            <div className="col-6">
              <p className="msg"> Approximate EMI/Month </p>
              <h4>₹18,432</h4>
              <p className="msg">
                {" "}
                *EMI is subject to change based on further checks{" "}
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6">
              <p className="msg">Eligible Loan Amount</p>
              <h6 className="mt-2">2-5 lakhs lakhs</h6>
              <input
                type="text"
                className="form-control"
                value={loanAmount}
                onChange={handleLoanAmountChange}
              />

              <input
                type="range"
                className="form-range range-slider"
                min={200000}
                max={500000}
                step={10000}
                value={loanAmount}
                onChange={handleLoanAmountChange}
              />
              <p
                className="msg"
                style={{
                  display: "inline",
                  position: "relative",
                  top: "-12px",
                }}
              >
                ₹2,00,000
              </p>
              <p
                className="msg"
                style={{
                  display: "inline",
                  position: "relative",
                  right: "-160px",
                  marginRight: "200px",
                  top: "-12px",
                }}
              >
                ₹5,00,000
              </p>
            </div>

            <div className="col-6">
              <p className="msg">Eligible Tenure</p>
              <h6 className="mt-2">12-18 months</h6>
              <input
                type="text"
                className="form-control"
                value={tenure}
                onChange={handleTenureChange}
              />
              <input
                type="range"
                className="form-range range-slider"
                min={12}
                max={18}
                step={1}
                value={tenure}
                onChange={handleTenureChange}
              />
              <p
                className="msg"
                style={{
                  display: "inline",
                  position: "relative",
                  top: "-12px",
                }}
              >
                12
              </p>
              <p
                className="msg"
                style={{
                  display: "inline",
                  position: "relative",
                  top: "-12px",
                  right: "-235px",
                  marginRight: "200px",
                }}
              >
                18
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6 d-flex justify-content-end">
            <ArthaClearButton type="button" onClick={onCancel}>
              Back
            </ArthaClearButton>
          </div>

          <div className="col-6">
            <ArthaContinueButton type="button" onClick={handleContinue}>
              Continue
            </ArthaContinueButton>
          </div>
        </div>
      </form>
    </>
  );
}
