import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import useFetch from "hooks/useFetch";

import { DriverContext } from "store/driver-store";

import Driver from "../Drivers/Driver/Driver";
/* import ConstructorDetailDummyData from "../Constructors/ConstructorDetails"; */
import styles from "./TeamDetails.module.css";

import { constructorDetails } from "data/dummyData";

const TeamDetails = () => {
  const { id } = useParams();

  const ctx = useContext(DriverContext);

  const { data: constructors } = useFetch(
    `http://ergast.com/api/f1/constructors/${id}.json`,
    true
  );

  //FIXME: separate

  /* TODO:  const { name } = constructors[0] || {}; */

  const { constructorId, name, nationality, url } = constructors[0] || {
    cId: "",
    name: "",
    nationality: "",
    url: "",
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <img
              className={styles.logo}
              src={`../constructors/${constructorId}.jpg`}
              alt="constructor-img"
            />
            <img
              src={`../flags/${ctx.flags[nationality]}.jpg`}
              alt="flag"
              className={styles.flags}
            />
            <h1 className={styles.name}>{name}</h1>
            <a
              className={styles.wiki}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.car}
                src={`../constructors/${constructorId}-car.jpg`}
                alt="constructor-img"
              />
            </a>
          </div>
        </div>
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
      </div>
      <Link className={styles.link} to="..">
        <button className={styles.back}>Back to all constructors</button>
      </Link>
    </>
  );
};

export default TeamDetails;
