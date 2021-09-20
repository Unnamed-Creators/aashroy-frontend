import React from "react";
import AdminDash from "../../components/adminCrime";
import Appbar from "../../components/shared/Navbar";
import styles from "./styles.module.css";
import Bot from "../../components/chatBot";
const HomlessList = () => {
  return (
    <div>
      <Appbar />
      <h2>Crimes</h2>
      <div className={styles.wrapper}>
        <div className={styles.homeless}>
          <div className={styles.hCard}>
            <AdminDash />
          </div>

          <div className={styles.hCard}>
            <AdminDash />
          </div>

          <div className={styles.hCard}>
            <AdminDash />
          </div>
        </div>
      </div>
      <Bot />
    </div>
  );
};

export default HomlessList;
