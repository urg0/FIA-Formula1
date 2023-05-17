import React from "react";

import Advice from "components/UI/Advice/Advice";

import styles from "./BottomNavigation.module.css";

/* TODO: Stick to the bottom */

const BottomNavigation = () => {
  return (
    <>
      <Advice />
      <div className={styles.bottom}>
        <p>DOWNLOAD THE OFFICIAL F1 APP</p>
      </div>
      <div className={styles.footer}>
        <footer> © 2003-2023 Formula One World Championship Limited </footer>
        <footer className={styles.urg}>URG</footer>
      </div>
    </>
  );
};

export default BottomNavigation;
