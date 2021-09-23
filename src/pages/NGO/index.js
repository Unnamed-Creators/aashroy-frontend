import React from "react";
import NgoP from "../../components/NGOportal";
import Appbar from "../../components/shared/Navbar";
import AppbarAuth from "../../components/shared/NavbarLogin";
const NGO = () => {
  const loggedin=true;
  return (
    <div>
     {loggedin?<AppbarAuth/>: <Appbar />}
      <NgoP />
    </div>
  );
};

export default NGO;
