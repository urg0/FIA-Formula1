import React from "react";

import { Outlet, useLoaderData } from "react-router-dom";

import DriversList from "components/Drivers/DriversList/DriversList";

import styles from "./Drivers.module.css";

const DriversPage = () => {
  const data = useLoaderData("drivers");

  return (
    <>
      <div className={styles.driverContainer}>
        <h2 className={styles.title}>F1 Drivers 2023</h2>
        <p className={styles.alt}>
          Check out this season's official F1 line-up.
        </p>
        <Outlet />
        <DriversList data={data.MRData.DriverTable?.Drivers} />
      </div>
    </>
  );
};

export default DriversPage;

export async function loader() {
  const response = await fetch(`http://ergast.com/api/f1/2023/drivers.json`);
  const data = await response.json();
  /* const returnVal = await data.MRData.DriverTable?.Drivers;
  if (response.ok) {
    return returnVal;
  } */

  return data;
}
