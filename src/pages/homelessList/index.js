import React from "react";
import HomelessCard from "../../components/homelessCard";
import Appbar from "../../components/shared/Navbar";
import styles from "./styles.module.css";
import AppbarAuth from "../../components/shared/NavbarLogin";
const HomlessList = () => {
  const loggedin=true;
  return (
    <div>
     {loggedin?<AppbarAuth/>: <Appbar />}
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
