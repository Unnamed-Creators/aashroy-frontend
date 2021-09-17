import React from "react";
import classes from "./loader.module.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class={classes.loader}>
        <AcUnitIcon style={{ color: "#3498db" }} />
      </div>
    </div>
  );
};

export default Loader;
