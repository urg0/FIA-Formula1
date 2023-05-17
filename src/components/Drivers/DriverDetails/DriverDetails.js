import React from "react";
import { Outlet } from "react-router-dom";

import DriverDetailContainer from "./DriverDetailContainer";
import DriverDetailsBottom from "./DriverDetailsBottom";

import styles from "./DriverDetails.module.css";

const DriverDetails = () => {
  return (
    <>
      <Outlet />
      <div className={styles.driverDetailContainer}>
        <DriverDetailContainer />
        <DriverDetailsBottom />
      </div>
    </>
  );
};

export default DriverDetails;
