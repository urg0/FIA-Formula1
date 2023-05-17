import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { DriverContext } from "store/driver-store";

import styles from "./Driver.module.css";

const Driver = ({ name, surname, nationality, number }) => {
  const ctx = useContext(DriverContext);

  return (
    <Link className={styles.link} to={`/drivers/${surname}`}>
      <div className={styles.cardContainer}>
        <img
          src={`../drivers/${surname}.jpeg`}
          alt="driver"
          className={styles.driverImage}
        />
        <div className={styles.driverInfoContainer}>
          <h1 className={styles.name}>
            <p className={styles.firstName}>{name}</p> {surname.toUpperCase()}
          </h1>
          <p className={styles.number}>
            {" "}
            <img
              className={styles.flags}
              src={`../flags/${ctx.flags[nationality]}.jpg`}
              alt="flag"
            />
          </p>
          <h2 className={styles.number}>{number}</h2>
          <p>Mercedes AMG Petronas</p>
        </div>
      </div>
    </Link>
  );
};

export default Driver;
