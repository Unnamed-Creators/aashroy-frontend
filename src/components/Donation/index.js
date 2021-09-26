import React from "react";
import styles from "./styles.module.css";
import icon3 from "./icon3.png";
const amount = 20000;
const DonationNgo = () => {
  return (
    <div>
      <h2>Donations Received</h2>
      <p>This is the total amount of Donations received</p>
      <div className={styles.wrapper}>
        <div className={styles.listH}>
          <div className={styles.image}>
            <img src={icon3} alt="...." height="30px" />
          </div>
          <div className={styles.donationAmount}>
            <div className={styles.text}>Donations Received</div>
            <div className={styles.amount}>₹ {amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationNgo;
