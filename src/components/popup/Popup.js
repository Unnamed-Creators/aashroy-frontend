import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import style from "../crimeRepoSecond/style.module.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default () => (
  <Popup
    trigger={
      <div className={style.button}>
        <button>File A Complaint</button>
      </div>
    }
    position="top center"
  >
    <Content>
      <h3>Do you want to file anonymously?</h3>
      <div className={style.popup_buttons}>
        <button>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to="/crimereporting/form"
          >
            Yes
          </Link>
        </button>
        <button>
          {" "}
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to="/nareportone"
          >
            No
          </Link>{" "}
        </button>
      </div>
    </Content>
  </Popup>
);

const Content = styled.div`
  text-align: center;
  padding: 0 15px 10px;
  height: 90%;
  width: 100%;
  h3 {
    font-size: 1.26rem;
    opacity: 0.7;
    font-weight: 700;
    text-align: center;
    color: #383874;
  }
`;
