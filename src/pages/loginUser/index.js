import React from "react";
import SignInUser from "../../components/loginUser";
import Appbar from "../../components/shared/Navbar";

const LoginUser = () => {
  return (
    <div>
      <Appbar />
      <SignInUser />
    </div>
  );
};

export default LoginUser;
