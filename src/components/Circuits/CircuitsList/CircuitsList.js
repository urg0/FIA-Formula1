import React, { useEffect, useState } from "react";

import Loader from "react-spinners/FadeLoader";

import Circuit from "components/Circuits/Circuit/Circuit";

import styles from "./CircuitsList.module.css";

const CircuitsList = () => {
  const [circuits, setCircuits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://ergast.com/api/f1/2023/circuits.json`)
      //TODO: EXRTRACT THE LINKS FROM CODE
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed!");
        }

        return response.json();
      })
      .then((data) => {
        setCircuits(data.MRData.CircuitTable.Circuits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message || "Something went wrong.");
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <Loader className={styles.loader} color="#b40300" />
        ) : (
          <div className={styles.cardLayout}>
            {circuits.map((circuit) => {
              return (
                <Circuit
                  name={circuit.circuitName}
                  city={circuit.Location.locality}
                  country={circuit.Location.country.toUpperCase()}
                  id={circuit.circuitId}
                  url={circuit.url}
                  key={circuit.circuitId}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default CircuitsList;
