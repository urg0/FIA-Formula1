import React from "react";
import { Link } from "react-router-dom";

import styles from "../DriversList/DriversList.module.css";

const DriversListSearchForm = ({
  onEnteredInputChange,
  resetDriversHandler,
  resetFiltersHandler,
  enteredDriver,
}) => {
  return (
    <>
      <input
        className={styles.searchDriver}
        onChange={onEnteredInputChange}
        value={enteredDriver}
        type="text"
        placeholder="Search your favorite driver!"
      />
      <Link to="search" className={styles.detailSearch}>
        <button className={styles.searchButton} onClick={resetDriversHandler}>
          Search (for testing)
        </button>
      </Link>
      <button className={styles.searchButton} onClick={resetFiltersHandler}>
        Reset Filter
      </button>
    </>
  );
};

export default DriversListSearchForm;
