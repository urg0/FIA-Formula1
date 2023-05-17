import React from "react";

import New from "../SingleNew/New";
import styles from "./NewsList.module.css";

import { DUMMY_NEWS } from "data/dummyData";

const News = () => {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.breakingNew}>
        <h1 className={styles.title}>BREAKING NEWS!</h1>
        <h2 className={styles.new}>
          Micheal Masi will be on padock for Melbourne GP
        </h2>
        <img
          className={styles.massi}
          src="https://media.speedcafe.com/wp-content/uploads/2020/04/00119002_814-scaled.jpg"
          alt="news"
        />
      </div>
      <div className={styles.news}>
        {DUMMY_NEWS.map(({ title, img }) => {
          return <New key={title} title={title} img={img} />;
        })}
      </div>
    </div>
  );
};

export default News;
