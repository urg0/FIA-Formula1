import React from "react";

/* import useValidateInput from "../../hooks/useValidateInput"; */

import styles from "./SearchForm.module.css";

const AgeSearch = ({ onChangeHandler, age }) => {
  return (
    <>
      <div className={styles.searchField}>
        <label className={styles.label} htmlFor="age">
          <div>Age: {age}</div>
        </label>
        <input
          onChange={onChangeHandler}
          className={styles.ageInput}
          type="range"
          value={age}
          min="18"
          max="45"
        />
        <div className={styles.ageFeedback}></div>
      </div>
    </>
  );
};

export default AgeSearch;
