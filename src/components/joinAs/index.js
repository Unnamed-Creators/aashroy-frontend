import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
const JoinAs = () => {
  return (
    <div>
      <h2 className={styles.joinUs}>Join Us!</h2>
      <h4 className={styles.animate}>Let's begin this journey! </h4>
      <p className={styles.question}>How would you like to join us?</p>
      <div className={styles.link1}>
        <Link to="/signUp" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <PersonIcon />
            </div>
            <div className={styles.wrapitUp}>
              <div className={styles.text}>Join as an Individual</div>
              <div className={styles.report}>
                Join as an Individual to <span>Locate</span> and{" "}
                <span> Report</span>
              </div>
            </div>

            <div className={styles.hide} style={{ marginLeft: "1rem" }}>
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.link2}>
        <Link to="/homelessList" style={{ textDecoration: "none" }}>
          <div className={styles.listH}>
            <div className={styles.image}>
              <GroupsIcon />
            </div>
            <div className={styles.wrapitUp}>
              <div className={styles.text}>Join as an NGO</div>
              <div className={styles.report}>
                Join as an Individual to <span>Help</span>
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

export default JoinAs;
