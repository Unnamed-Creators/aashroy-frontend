import React from "react";
import { Link } from "react-router-dom";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import styles from "./styles.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NgoP = () => {
  return (
    <div>
      <h3>NGO Portal</h3>
      <div className={styles.link1}>
        <Link to="/homelessList" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <img src={icon1} alt="...." height="30px" />
            </div>
            <div className={styles.text}>List of Homeless People</div>
            <div className={styles.hide} style={{ marginLeft: "1rem" }}>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.link2}>
        <Link to="/totalDonation" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <img src={icon2} alt="...." height="30px" />
            </div>
            <div className={styles.text}>Donations</div>
            <div className={styles.hide} style={{ marginLeft: "1rem" }}>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NgoP;
