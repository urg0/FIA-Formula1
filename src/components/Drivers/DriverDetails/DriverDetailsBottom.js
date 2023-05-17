import React from "react";

import { Link } from "react-router-dom";

import ImageSlider from "components/UI/ImageSlider/ImageSlider";

import styles from "./DriverDetails.module.css";

import { DUMMY_SLIDES } from "data/dummyData";
import { biography } from "data/dummyData";

const DriverDetailsBottom = () => {
  return (
    <>
      <Link className={styles.link} to="..">
        <button className={styles.back}>Back to all drivers</button>
      </Link>
      <div className={styles.bottomContainer}>
        <div className={styles.bioContainer}>
          <h2 className={styles.bottomTitle}>Biography</h2>
          <p className={styles.bio}>{biography}</p>
        </div>
        <div className={styles.imageContainer}>
          <h2 className={styles.bottomTitle}>Gallery</h2>
          <ImageSlider slides={DUMMY_SLIDES} isBackdrop={false} />
        </div>
      </div>
    </>
  );
};

export default DriverDetailsBottom;
