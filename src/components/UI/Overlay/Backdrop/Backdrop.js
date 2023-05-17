import React from "react";

import styles from "../ModalOverlay/ModalOverlay.module.css";

const Backdrop = ({ navigateBackHandler }) => {
  return <div className={styles.backdrop} onClick={navigateBackHandler}></div>;
};

export default Backdrop;
