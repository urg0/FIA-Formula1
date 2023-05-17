import React from "react";

import styles from "./Advice.module.css";
import New from "components/News/SingleNew/New";

import { DUMMY_ADVICES } from "data/dummyData";
const Advice = () => {
  return (
    <>
      <div className={styles.advices}>
        <h2 className={styles.adviceTitle}>YOU MIGHT ALSO LIKE</h2>
        <div className={styles.adviceContainer}>
          {DUMMY_ADVICES.map((news) => {
            return <New key={news.title} title={news.title} img={news.img} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Advice;
