import React from "react";

import { Link } from "react-router-dom";

import styles from "../Navigation/MainNavigation/MainNavigation.module.css";

const ImageLink = ({ to, src, alt }) => {
  return (
    <>
      <Link className={styles.link} to={to}>
        <img className={styles.cars} src={src} alt={alt} />
      </Link>
    </>
  );
};
export default ImageLink;
