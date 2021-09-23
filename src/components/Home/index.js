import React from "react";
import styles from "./home.module.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Jump from 'react-reveal/Jump';


const Homec = () => {
  return (
    <div className={styles.lPage}>
      <div className={styles.mainHeading}>
        Welcome to <span className={styles.aashroy}> AASHROY</span>
        <p>A Helping Hand</p>
      </div>
      <div className={styles.getStarted}>
        <Link to="/joinAs">
        <Jump>
          <Button variant="primary" size="lg" className={styles.getButton}>
            Get Started
          </Button>
          </Jump>
        </Link>
      </div>
    </div>
  );
};

export default Homec;
