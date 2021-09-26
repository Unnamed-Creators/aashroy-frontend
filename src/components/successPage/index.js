import React from "react";
import AppbarAuth from "../shared/NavbarLogin";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div>
      <AppbarAuth />
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "darkblue",
          marginTop: "2rem",
        }}
      >
        Thank You for your help!
      </div>
      <Link
        to="/user"
        style={{
          textDecoration: "none",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Button variant="contained">Return to home page</Button>
      </Link>
    </div>
  );
};

export default Success;
