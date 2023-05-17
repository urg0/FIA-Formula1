import React from "react";

import { Outlet } from "react-router-dom";

import styles from "./Drivers.module.css";

import ConstructorsList from "components/Teams/TeamsList";

const ConstructorsPage = () => {
  return (
    <>
      <div className={styles.driverContainer}>
        <h2 className={styles.title}>F1 Teams 2023</h2>

        <p className={styles.alt}>
          Discover everything you need to know about this year's Formula 1 teams
        </p>
        <ConstructorsList />
        <Outlet />
      </div>
    </>
  );
};

export default ConstructorsPage;
