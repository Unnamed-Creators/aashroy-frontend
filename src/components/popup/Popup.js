import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import style from '../crimeRepoSecond/style.module.css'
import { Link } from "react-router-dom";

export default () => (
  <Popup trigger={<div className={style.button}>
  <button>File A Complaint</button>
</div>} position="top center">
    <div className={style.popupContent}>
        <h3>Do you want to file anonymously?</h3>
        <div className={style.popup_buttons}>
            <button> <Link style={{color:"#fff",textDecoration:"none"}} to="/crimereporting/form">Yes</Link> </button>
            <button>No</button>
        </div>
    </div>
  </Popup>
);