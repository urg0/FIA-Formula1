import React, { useState, useEffect, useContext } from "react";

import styles from "./TeamStandings.module.css";

import { DriverContext } from "store/driver-store";

const TeamStandings = () => {
  const [standings, setStandings] = useState([]);
  const ctx = useContext(DriverContext);

  useEffect(() => {
    fetch(`http://ergast.com/api/f1/current/constructorStandings.json`)
      .then((response) => response.json())
      .then((data) =>
        setStandings(
          data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
        )
      );
  }, []);

  return (
    <>
      <div className={styles.standingContainer}>
        <h2 className={styles.title}>CONSTRUCTOR STANDINGS</h2>
        <div className={styles.titleContainer}>
          <p className={styles.name}>Name</p>
          <p className={styles.nationality}>Nationality</p>
          <p className={styles.points}>Points</p>
        </div>

        {standings.map((s) => {
          return (
            <div className={styles.infoContainer} key={s.position}>
              <p className={styles.name}>
                {s.position}- {s.Constructor.name}
              </p>
              <p className={styles.nationality}>
                {ctx.code[s.Constructor.nationality]}{" "}
                <img
                  className={styles.flags}
                  src={`../flags/${ctx.flags[s.Constructor.nationality]}.jpg`}
                  alt="flag"
                />
              </p>
              <p className={styles.points}>{s.points}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TeamStandings;
