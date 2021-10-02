import React from "react";
import AdminDash from "../../components/adminCrime";
import Appbar from "../../components/shared/Navbar";
import styles from "./styles.module.css";
import Bot from "../../components/chatBot";
import AppbarAuth from "../../components/shared/NavbarLogin";

const HomlessList = () => {
  const loggedin = true;
  return (
    <div>
      {loggedin ? <AppbarAuth /> : <Appbar />}
      <h2>Crimes</h2>
      <div className={styles.wrapper}>
        <div className={styles.homeless}>
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
