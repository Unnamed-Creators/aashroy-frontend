import React from "react";
import hero_img from "./img/crimeLanding.svg";
import style from "./styles.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.outer_container}>
      <div className={style.left_section}>
        <div className={style.text}>
          <h1>Report A Crime</h1>
          <p>
            Crimes against the homeless are indeed one of the burning issues
            today, which everyone seems to ignore. Let us now unite to help them
            by reporting any kind of ill activity done against them.{" "}
          </p>
        </div>
        <div className={style.buttons}>
          <button>
            {" "}
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/crimereporting/filecomplain"
            >
              File A Complaint
            </Link>{" "}
          </button>
          <a
            style={{
              marginLeft: "2rem",
              color: "grey",
            }}
            href="https://indianexpress.com/article/india/india-news-india/pune-homeless-are-victims-of-a-vicious-cycle-of-crimes/"
            target="_blank"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className={style.right_section}>
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Landing;
