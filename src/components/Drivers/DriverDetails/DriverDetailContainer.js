import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import Loader from "react-spinners/FadeLoader";

import useFetch from "hooks/useFetch";

import styles from "./DriverDetails.module.css";

import { DriverContext } from "store/driver-store";
import { driverDetails } from "data/dummyData";

const DriverDetailContainer = () => {
  const { id } = useParams();

  const ctx = useContext(DriverContext);

  const { data: driver, isLoading } = useFetch(
    `http://ergast.com/api/f1/drivers/${id}.json`,
    false
  );
  /* TODO:CONSTANT */

  /* const {
    dateOfBirth,
    familyName,
    givenName,
    nationality,
    permanentNumber,
    url,
  } = driver[0] || {
    dateOfBirth: "",
    familyName: "",
    givenName: "",
    nationality: "",
    permanentNumber: "",
    url: "",
  }; */

  return (
    <>
      {isLoading && <Loader className={styles.loader} color="#b40300" />}
      <div className={styles.driverContainer}>
        <img
          className={styles.driver}
          src={`../drivers/${driver[0]?.familyName}.jpeg`}
          alt="driver-img"
        />
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h1 className={styles.name}>
              {driver[0]?.givenName} {driver[0]?.familyName}{" "}
            </h1>
            <h1 className={styles.number}>{driver[0]?.permanentNumber} </h1>
            <img
              className={styles.flags}
              src={`../flags/${ctx.flags[driver[0]?.nationality]}.jpg`}
              alt="flag"
            />
          </div>
          {/* <h1 className={styles.team}>Mercedes AMG PETRONAS </h1> */}
          <div className={styles.infoContainer}>
            <br />
            <a href={driver[0]?.url} target="_blank" rel="noreferrer">
              <img
                className={styles.helmet}
                src="../hamiltonhelmet.jpg"
                alt="driver-img"
              />
            </a>

            {driverDetails}
          </div>
          <a
            href={driver[0]?.url}
            className={styles.text}
            target="_blank"
            rel="noreferrer"
          >
            For further info
          </a>
        </div>
      </div>
    </>
  );
};

export default DriverDetailContainer;
