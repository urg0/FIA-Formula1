import React from "react";

import styles from "./SearchForm.module.css";

import { alphabeticSortHandler } from "data/dummyData";

const NationalitySearch = ({ onChangeHandler, data }) => {
  /* TODO: MOVE CONSTANT func */
  const uniqueNationality = [
    ...new Set(
      data.sort(alphabeticSortHandler).map((d) => {
        return d.nationality;
      })
    ),
  ];
  return (
    <>
      <div className={styles.searchField}>
        <label className={styles.label} htmlFor="nationality">
          Nationality:
        </label>
        <select onChange={onChangeHandler} name="nationality" id="nationality">
          <option>Any</option>;
          {uniqueNationality.map((nationality) => {
            return (
              <option value={nationality} key={nationality}>
                {nationality}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default NationalitySearch;
