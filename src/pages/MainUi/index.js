import React from "react";
import MainUic from "../../components/MainUi";
// import  LinearStepper  from "../../components/Stepper";
import Appbar from "../../components/shared/Navbar";
import AppbarAuth from "../../components/shared/NavbarLogin";

const MainUi = () => {
  const loggedin = true;
  return (
    <div>
      {loggedin ? <AppbarAuth /> : <Appbar />}
      <MainUic />
    </div>
  );
};

export default MainUi;
