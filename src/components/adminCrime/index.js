import React from "react";
import photo from "./homeless.jpg";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
const location = "Guwahati";
const locationDisplay = "Gogamukh, Dhemaji, Assam";
const date = "25/06/2020";
const time = "20:12";
const photoProof = "https://picsum.photos/200";
const crime = "Mention Crime here";
const TwitterPost =
  "https://twitter.com/intent/tweet?url=Dear @assampolice , we need to report a crime at " +
  location +
  " on " +
  date +
  time +
  " . As reported by our user on Aashroy, the crime is :" +
  crime +
  " . We have attached the photo proof of it below. Kindly have a serious and immediate look over this issue." +
  photoProof;
console.log(TwitterPost);
const AdminCrime = () => {
  return (
    <div className={styles.masterCard}>
      <div className={styles.cardMain}>
        <div className={styles.photo}>
          <img src={photo} alt="..." height="180px" width="90%" />
        </div>
        <div className={styles.details}>
          <div className={styles.preview}>
            <span
              style={{
                fontSize: "1.1rem",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              Location
            </span>{" "}
            : {locationDisplay}
          </div>
          <div className={styles.moreDetails}>
            {/* <Link to="/">
              <Button variant="outlined" size="small">
                Details
              </Button>
            </Link> */}
            <div style={{ marginTop: "0.5rem" }}>
              {" "}
              <a
                type="button"
                role="button"
                title="Share on twitter"
                href={TwitterPost}
                rel="noopener"
                target="_blank"
              >
                <TwitterIcon />
              </a>
              <a
                style={{ marginLeft: "1rem" }}
                type="button"
                role="button"
                title="Report to Police via Call"
                href="tel:3612261510"
                rel="noopener"
                target="_blank"
              >
                <LocalPoliceIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCrime;
