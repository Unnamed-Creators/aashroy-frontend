import React from "react";
import HomelessCard from "../../components/homelessCard";
import Appbar from "../../components/shared/Navbar";
import styles from "./styles.module.css";
const HomlessList = () => {
  return (
    <div>
      <Appbar />
      <h2>List of Homeless People</h2>
      <div className={styles.wrapper}>
        <div className={styles.homeless}>
          <div className={styles.hCard}>
            <HomelessCard />
          </div>

          <div className={styles.hCard}>
            <HomelessCard />
          </div>

          <div className={styles.hCard}>
            <HomelessCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomlessList;
