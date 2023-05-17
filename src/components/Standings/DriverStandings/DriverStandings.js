import React, { useState, useEffect, useContext } from "react";

import styles from "./DriverStandings.module.css";

import { DriverContext } from "store/driver-store";

const DriverStandings = () => {
  const [standings, setStandings] = useState([]);

  const ctx = useContext(DriverContext);

  async function fetchStandings() {
    const response = await fetch(
      `http://ergast.com/api/f1/current/driverStandings.json`
    );
    const data = await response.json();
    setStandings(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
  }
  useEffect(() => {
    fetchStandings();
  }, []);

  return (
    <>
      <div className={styles.standingContainer}>
        <h2 className={styles.title}>DRIVER STANDINGS</h2>
        <div className={styles.titleContainer}>
          <p className={styles.name}>Name</p>
          <p className={styles.nationality}>Nationality</p>
          <p className={styles.points}>Points</p>
          <p className={styles.constructors}>Constructor</p>
        </div>

        {standings.map((s) => {
          return (
            <div className={styles.infoContainer} key={s.position}>
              <p className={styles.fullName}>
                {s.position}- {s.Driver.givenName} {s.Driver.familyName}
              </p>
              <p className={styles.nationality}>
                {ctx.code[s.Driver.nationality]}{" "}
                <img
                  className={styles.flags}
                  src={`../flags/${ctx.flags[s.Driver.nationality]}.jpg`}
                  alt="flags"
                />
              </p>
              <p className={styles.points}>{s.points}</p>
              <p className={styles.constructors}>{s.Constructors[0].name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DriverStandings;
