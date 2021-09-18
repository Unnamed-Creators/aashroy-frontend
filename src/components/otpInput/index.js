import React from "react";
import styles from "./styles.module.css";
const OtpInput = () => {
  return (
    <div>
      <input id={styles.partitioned} type="tel" maxlength="4" />
    </div>
  );
};

export default OtpInput;
