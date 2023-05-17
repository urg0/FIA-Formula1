import React, { useContext } from "react";

import { DriverContext } from "store/driver-store";

import styles from "./Sort.module.css";

const SORT_ACTIONS = {
  AGE_ASCENDING: "age-ascending",
  AGE_DESCENDING: "age-descending",
  DRIVER_NUMBER_ASCENDING: "number-ascending",
  DRIVER_NUMBER_DESCENDING: "number-descending",
};

const Sort = () => {
  const ctx = useContext(DriverContext);

  const calcAge = (date) => {
    return date.slice(0, 4);
  };

  const onSortChange = (e) => {
    switch (e.target.value) {
      case SORT_ACTIONS.AGE_ASCENDING:
        const ageAscendingDrivers = ctx.drivers.slice().sort((a, b) => {
          const firstBirthDate = calcAge(a.dateOfBirth);
          const secondBirthDate = calcAge(b.dateOfBirth);
          return secondBirthDate - firstBirthDate;
        });
        ctx.setDrivers(ageAscendingDrivers);
        break;

      case SORT_ACTIONS.AGE_DESCENDING:
        const ageDescendingDrivers = ctx.drivers.slice().sort((a, b) => {
          const firstBirthDate = calcAge(a.dateOfBirth);
          const secondBirthDate = calcAge(b.dateOfBirth);
          return firstBirthDate - secondBirthDate;
        });
        ctx.setDrivers(ageDescendingDrivers);
        break;

      case SORT_ACTIONS.DRIVER_NUMBER_ASCENDING:
        const numberAscendingDrivers = ctx.drivers.slice().sort((a, b) => {
          return a.permanentNumber - b.permanentNumber;
        });
        ctx.setDrivers(numberAscendingDrivers);
        break;

      case SORT_ACTIONS.DRIVER_NUMBER_DESCENDING:
        const numberDescendingDrivers = ctx.drivers.slice().sort((a, b) => {
          return b.permanentNumber - a.permanentNumber;
        });
        ctx.setDrivers(numberDescendingDrivers);
        break;

      default:
        break;
    }
  };
  /* console.log(ctx.drivers); */

  return (
    <>
      <select
        className={styles.sort}
        onChange={onSortChange}
        name="sort"
        id="sort"
      >
        <option value="urg-default">Sort by: URG</option>
        <option value={SORT_ACTIONS.AGE_ASCENDING}>Age (ascending)</option>
        <option value={SORT_ACTIONS.AGE_DESCENDING}>Age (descending)</option>
        <option value={SORT_ACTIONS.DRIVER_NUMBER_ASCENDING}>
          Driver Number (ascending)
        </option>
        <option value={SORT_ACTIONS.DRIVER_NUMBER_DESCENDING}>
          Driver Number (descending)
        </option>
      </select>
    </>
  );
};

export default Sort;
