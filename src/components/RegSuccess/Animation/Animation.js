import React from "react";
import img from "./img/Success.png";
import styles from "./Animation.module.css";

const Animation = () => {
  return (
    <>
      <div className="text-center my-5">
        <img src={img} alt={img} className={styles.animated} />
      </div>
    </>
  );
};

export default Animation;
