import React,{ useState,useEffect } from "react";
import axios from "axios";
import HomelessCard from "../../components/homelessCard";
import Appbar from "../../components/shared/Navbar";
import styles from "./styles.module.css";
import AppbarAuth from "../../components/shared/NavbarLogin";
const HomlessList = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/homeless`
      )
      .then((res) => {
        setData(res.data.homeless);
      })
      .catch((e) => alert("Reload the page or restart the project  "+e));
  }, []);
  console.log(data)
  const loggedin=true;
  return (
    <>
    {
     data &&
    <div>
     {loggedin ?<AppbarAuth/>: <Appbar />}
      <h2>List of Homeless People</h2>
      <div className={styles.wrapper}>
      {data &&
          data.map((res) => (
            <HomelessCard
              id={res._id}
              key={res._id}
              data={res}
            />
          ))}
           
      
      </div>
    </div>
  }</>
  );
};

export default HomlessList;
