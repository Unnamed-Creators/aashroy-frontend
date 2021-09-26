import React from "react";
import css from "./styles.module.css";

const HomelessCard = (res) => {
  return (
    <div className={css.blogCard}>
                    <a>
                      <img src="https://cdn.givingcompass.org/wp-content/uploads/2018/07/13132706/Homelessness-What-To-Know-and-How-to-Help.jpg" alt="Homelessness"/>
                      <p><strong>Address</strong>: {res.data.NeighbourhoodName},{res.data.District}</p>
                      <p><strong>Landmark</strong>: {res.data.Landmark}</p>
                    
                      <div className={css.blogCardCategory}>
                      {res.data.CityTown}
                      </div>
                    </a>
                </div>
  );
};

export default HomelessCard;
