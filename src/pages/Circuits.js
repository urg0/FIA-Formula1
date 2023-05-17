import React from "react";

import CircuitsList from "components/Circuits/CircuitsList/CircuitsList";

import styles from "./Circuits.module.css";

const CircuitsPage = () => {
  return (
    <>
      <div className={styles.driverContainer}>
        <div classNam={styles.top}>
          <h2 className={styles.title}> F1 Schedule 2023</h2>
          <p className={styles.alt}>
            2023 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
          </p>
        </div>
      </div>
      <CircuitsList />
    </>
  );
};

export default CircuitsPage;
