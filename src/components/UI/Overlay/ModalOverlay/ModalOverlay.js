import React from "react";

import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ children }) => {
  return (
    <>
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export default ModalOverlay;
