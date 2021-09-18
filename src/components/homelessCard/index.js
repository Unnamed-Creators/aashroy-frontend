import React from "react";
import photo from "./homeless.jpg";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const location = "Guwahati";
const HomelessCard = () => {
  return (
    <div className={styles.masterCard}>
      <div className={styles.cardMain}>
        <div className={styles.photo}>
          <img src={photo} alt="..." height="130px" />
        </div>
        <div className={styles.details}>
          <div className={styles.preview}>Location : {location}</div>
          <div className={styles.moreDetails}>
            <Button variant="outlined" size="small">
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomelessCard;
