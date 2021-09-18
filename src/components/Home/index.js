import React from "react";
import styles from "./home.module.css";
import Button from "react-bootstrap/Button";
const Homec = () => {
  return (
    <div className={styles.lPage}>
      <div className={styles.mainHeading}>
        Welcome to <span className={styles.aashroy}> AASHROY</span>
        <p>A Helping Hand</p>
      </div>
      <div className={styles.getStarted}>
        <Button variant="primary" size="lg" className={styles.getButton}>
          Get Started
        </Button>{" "}
      </div>
    </div>
  );
};

export default Homec;
