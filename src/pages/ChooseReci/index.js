import React from "react";
import ChooseRecicomp from "../../components/ChooseReci";
import AppbarAuth from "../../components/shared/NavbarLogin";
import Appbar from "../../components/shared/Navbar";

const ChooseReci = () => {
  const loggedin = true;
  return (
    <div>
      {loggedin ? <AppbarAuth /> : <Appbar />}
      <ChooseRecicomp />
    </div>
  );
};

export default ChooseReci;
