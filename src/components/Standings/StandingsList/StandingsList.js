import React from "react";

import DriverStandings from "../DriverStandings/DriverStandings";
import TeamStandings from "../TeamStandings/TeamStandings";

import styles from "./StandingsList.module.css";

const StandingsList = () => {
  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}> F1 ® 2023 STANDINGS</h2>
          <p className={styles.alt}>Welcome to the home of speed and drama.</p>
        </div>
        <div className={styles.standingContainer}>
          <DriverStandings />
          <TeamStandings />
        </div>
      </div>
    </>
  );
};

export default StandingsList;
