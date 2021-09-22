import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
const UserDash = () => {
  return (
    <div>
      <h2 className={styles.joinUs}>Welcome Aboard!</h2>
      <h4 className={styles.animate}>So, here we go! </h4>
      <p className={styles.question}>How would you love to help us today?</p>
      <div className={styles.link1}>
        <Link to="/main" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <PersonIcon />
            </div>
            <div className={styles.wrapitUp}>
              <div className={styles.text}>Report Homeless</div>
              <div className={styles.report}>
                Help us <span>Locate</span> and <span> Track</span> Homeless
              </div>
            </div>

            <div className={styles.hide} style={{ marginLeft: "1rem" }}>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.link2}>
        <Link to="/crimeReporting" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <GroupsIcon />
            </div>
            <div className={styles.wrapitUp}>
              <div className={styles.text}>Report Crime</div>
              <div className={styles.report}>
                Help us to detect <span>Crimes</span> on Homeless
              </div>
            </div>

            <div className={styles.hide} style={{ marginLeft: "4rem" }}>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.link2}>
        <Link to="/totalDonation" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <MonetizationOnRoundedIcon />
            </div>
            <div className={styles.wrapitUp}>
              <div className={styles.text}>Donation</div>
              <div className={styles.report}>
                Please <span>Donate</span> for the homeless
              </div>
            </div>

            <div className={styles.hide} style={{ marginLeft: "4rem" }}>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UserDash;
