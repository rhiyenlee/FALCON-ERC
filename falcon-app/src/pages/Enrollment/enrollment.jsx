import React, { useState } from "react";
import "./style/enrollment.css";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./context/StepperContext";

import Payment from "./Payment";
import PersonalInfo from "./PersonalInfo";
import UploadCredentials from "./UploadCredentials";
import Verify from "./Verify";

function Enrollment() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Personal Information",
    "Upload Documents",
    "Payment",
    "Verify Account",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <UploadCredentials />;
      case 3:
        return <Payment />;
      case 4:
        return <Verify />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <div className="bg-gray-color pb-5 rounded-full">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Enrollment;
