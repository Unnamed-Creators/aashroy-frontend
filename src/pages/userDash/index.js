import React from "react";
import Appbar from "../../components/shared/Navbar";
import UserDash from "../../components/userDash";
import AppbarAuth from '../../components/shared/NavbarLogin'

const User = () => {
  const loggedin=true;
  return (
    <div>
    {loggedin?<AppbarAuth/>: <Appbar />}
      <UserDash />
    </div>
  );
};

export default User;
