import React, {useState} from 'react';
import StepNavigation from '../../components/NgoReg/StepNavigation/Index';
import FirstSlide from '../../components/NgoReg/FirstSlide/Index';
import SecondSlide from '../../components/NgoReg/SecondSlide/Index';
import ThirdSlide from '../../components/NgoReg/ThirdSlide/Index';
import FourthSlide from '../../components/NgoReg/FourthSlide/Index';
import FifthSlide from '../../components/NgoReg/FifthSlide/Index';
import Navbar from '../../components/shared/Navbar/index'

// import styles from './NgoReg.module.css';
import './Test.css'

const NgoReg = () => {
    const labelArray = [
        "General details",
        "Address Details",
        "Bank Details",
        "Document Attachment",
        "Save & Preview",
      ];
      const [data,setData]=useState({
        applicantOrganaization: "",
        headOfOrganaization: "",
        panNumber: "",
        gender: "",
        emailID: "",
        phone: "",
        Password: "",
        fullAddress: "",
        neighbourName: "",
        landmark: "",
        cityOrTown: "",
        district: "",
        policeStation: "",
        state: "",
        pin: "",
        bankAccNumber: "",
        accountType: "",
        ifsc: "",
        bankName: "",
        bankBranch: "",
        mobile: "",
        emailId: "",
        identityProof: "",
        uploadFile: "",
        addressProof: "",
        addressProofUploadFile: "",
        passport: "",
        regOfficeAddressProof: "",
        cancelledCheque: "",
      });
      const [currentStep, updateCurrentStep] = useState(1);
      function updateStep(step) {
        updateCurrentStep(step);
      }
    return (
        <>
      <Navbar />
      <div className="TopHeading">
        <a className="link">
          Back
        </a>
        <h3 className="heading">NGO Registration</h3>
      </div>
      <div className="stepper">
        <StepNavigation
          labelArray={labelArray}
          currentStep={currentStep}
          updateStep={updateStep}
        />
      </div>
      {currentStep === 1 && (
        <FirstSlide setData={setData} data={data} currentStep={currentStep} updateStep={updateStep} />
      )}
      {currentStep === 2 && (
        <SecondSlide setData={setData} data={data}  currentStep={currentStep} updateStep={updateStep} />
      )}
      {currentStep === 3 && (
        <ThirdSlide setData={setData} data={data}  currentStep={currentStep} updateStep={updateStep} />
      )}
      {currentStep === 4 && (
        <FourthSlide setData={setData} data={data}  currentStep={currentStep} updateStep={updateStep} />
      )}
      {currentStep === 5 && (
        <FifthSlide setData={setData} data={data}  currentStep={currentStep} updateStep={updateStep} />
      )}
            
        </>
    )
}

export default NgoReg;
