import React from "react";

import { ascendingSortHandler } from "../../data/dummyData";

import styles from "./SearchForm.module.css";

const DriverNumberSearch = ({ onChangeHandler, data }) => {
  return (
    <>
      <div className={styles.searchField}>
        <label className={styles.label} htmlFor="number">
          Driver Number:
        </label>
        <select onChange={onChangeHandler}>
          <option value="urg-default">Any</option>
          {data.sort(ascendingSortHandler).map((driver) => {
            return (
              <option
                value={driver.permanentNumber}
                key={driver.permanentNumber}
              >
                {driver.permanentNumber}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default DriverNumberSearch;
