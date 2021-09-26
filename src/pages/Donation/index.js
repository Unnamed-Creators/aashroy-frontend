import React from "react";
import DonationNgo from "../../components/Donation";
import Appbar from "../../components/shared/Navbar";
import AppbarAuth from "../../components/shared/NavbarLogin";

const DonationAmount = () => {
  return (
    <div>
      <AppbarAuth/>
      <DonationNgo />
    </div>
  );
};

export default DonationAmount;
