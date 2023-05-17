import React from "react";

import styles from "./TeamDetails.module.css";

const TeamDetailDummyData = () => {
  return (
    <>
      <h2 className={styles.driverTitle}>DRIVERS</h2>
      <div className={styles.belowContainer}>
        <div className={styles.driverContainer}>
          <Driver
            name="Lewis"
            surname="Hamilton"
            nationality="British"
            img="../drivers/hamilton.jpeg"
          />
          <Driver
            name="George"
            surname="Russell"
            nationality="British"
            img="../drivers/russell.jpg"
          />
        </div>
        <ul className={styles.list}>{constructorDetails}</ul>
      </div>
    </>
  );
};

export default TeamDetailDummyData;
