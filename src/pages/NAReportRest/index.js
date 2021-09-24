import React, { useState } from "react";
import StepNavigation from "../../components/NAReportRest/StepNavigation/Index";
import FirstSlide from "../../components/NAReportRest/FirstSlide/Index";
import SecondSlide from "../../components/NAReportRest/SecondSlide/Index";
import ThirdSlide from "../../components/NAReportRest/ThirdSlide/Index";
import Navbar from "../../components/shared/Navbar/index";
import "./Test.css";

const NgoReg = () => {
  const labelArray = [
    "Complaint details",
    "Suspects details",
    "Preview & submit",
  ];
  const [currentStep, updateCurrentStep] = useState(1);
  function updateStep(step) {
    updateCurrentStep(step);
  }
  return (
    <>
      <Navbar />
      <div className="TopHeading"></div>
      <div className="stepper">
        <StepNavigation
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
      </div>
      {currentStep === 1 && (
        <FirstSlide currentStep={currentStep} updateStep={updateStep} />
      )}
      {currentStep === 2 && (
        <SecondSlide currentStep={currentStep} updateStep={updateStep} />
      )}
      {currentStep === 3 && (
        <ThirdSlide currentStep={currentStep} updateStep={updateStep} />
      )}
    </>
  );
};

export default NgoReg;
