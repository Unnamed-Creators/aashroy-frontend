import React from "react";
import TopDetails from "../../components/NAReportOne/TopDetails/Index";
import FormDetails from "../../components/NAReportOne/FormDetails/Index";
import Navbar from "../../components/shared/Navbar/index";
import ContactButton from "../../components/NAReportOne/ContactButton/Index";

const NAReportOne = () => {
  return (
    <div>
      <Navbar />
      <TopDetails />
      <FormDetails />
    </div>
  );
};

export default NAReportOne;
