import React from "react";
import LoginUI from "../../components/LoginUI";
import Appbar from "../../components/shared/Navbar";

const Login = () => {
  return (
    <div>
      <Appbar />
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Admin Portal</h2>
      <LoginUI />
    </div>
  );
};

export default Login;
