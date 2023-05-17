import React from "react";

import News from "components/News/NewsList/NewsList";
import ImageLink from "components/UI/ImageLink/ImageLink";

import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <ImageLink
          to="/drivers/hamilton"
          src="hamiltonhelmet.jpg"
          alt="hamilton"
        />
        <div className={styles.titleContainer}>
          <h2 className={styles.title}> FORMULA 1 ®</h2>

          <p className={styles.alt}>Welcome to the home of speed and drama.</p>
        </div>
        <ImageLink
          to="/drivers/hamilton"
          src="hamiltonhelmet.jpg"
          alt="hamilton"
        />
      </div>
      <News />
    </div>
  );
};

export default HomePage;
