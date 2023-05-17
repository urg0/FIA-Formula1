import React, { useContext } from "react";

import { Link } from "react-router-dom";

/* import Driver from "../Driver/Driver"; */

import { DriverContext } from "store/driver-store";

import styles from "./Team.module.css";

const Team = ({ name, id, nationality, url, car, img }) => {
  const ctx = useContext(DriverContext);

  return (
    <>
      <div className={styles.cardContainer}>
        <Link to={id} className={styles.link}>
          <div className={styles.bold}>
            <img
              className={styles.flags}
              src={`../flags/${ctx.flags[nationality]}.jpg`}
              alt="flags"
            />
            <h1>{name} </h1>
            <img className={styles.teamLogo} src={img} alt="constructor-img" />
          </div>
          <div className={styles.car}>
            <img className={styles.carLogo} src={car} alt="car-img" />
            <div className={styles.bold}>
              <p className={styles.name}>Lewis HAMILTON</p>
              <img
                className={styles.driver}
                src="../drivers/hamilton.jpeg" //dummy data bc of api
                alt="driver"
              />
              <p className={styles.name}>George Russell</p>
              <img
                className={styles.driver}
                src="../drivers/russell.jpeg"
                alt="driver"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Team;
