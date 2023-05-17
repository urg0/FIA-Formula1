import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { DriverContext } from "store/driver-store";
import { SearchContext } from "store/search-store";

import NationalitySearch from "./NationalitySearch";
import AgeSearch from "./AgeSearch";
import DriverNumberSearch from "./DriverNumberSearch";
import DateOfBirthSearch from "./DateOfBirthSearch";

import styles from "./SearchForm.module.css";

//TODO: Validate age, button disabled

/* TODO: const filterDriverHandler = (drivers, searchCriteria) => {
  return drivers.filter((driver) => {
    const age = calculateAge(driver.dateOfBirth);
    return (
      (!searchCriteria.number ||
        driver.permanentNumber === searchCriteria.number) &&
      (!searchCriteria.dateOfBirth ||
        driver.dateOfBirth === searchCriteria.dateOfBirth) &&
      (!searchCriteria.age || age === searchCriteria.age) &&
      (!searchCriteria.nationality ||
        driver.nationality === searchCriteria.nationality)
    );
  });
};
 */

const calculateAge = (dateOfBirth) => {
  const year = dateOfBirth.slice(0, 4);
  return 2023 - year;
};

const SearchForm = () => {
  const navigate = useNavigate();
  const driverCtx = useContext(DriverContext);
  const searchCtx = useContext(SearchContext);

  const navigateBackHandler = (event) => {
    event.stopPropagation();
    navigate("..");
  };

  // TODO: if user search a driver and navigate between pages,
  //  the driver list stays filtered.

  const searchHandler = (event) => {
    event.preventDefault();

    const filteredDrivers = driverCtx.drivers.filter((driver) => {
      const age = calculateAge(driver.dateOfBirth);
      return (
        (!searchCtx.number || driver.permanentNumber === searchCtx.number) &&
        (!searchCtx.dateOfBirth ||
          driver.dateOfBirth === searchCtx.dateOfBirth) &&
        (!searchCtx.age || age === searchCtx.age) &&
        (!searchCtx.nationality || driver.nationality === searchCtx.nationality)
      );
    });

    driverCtx.setDrivers(filteredDrivers);
    navigate("..");
  };
  return (
    <>
      <div className={styles.modal}>
        <form className={styles.form}>
          <button style={{ float: "right" }} onClick={navigateBackHandler}>
            X
          </button>
          <div>
            <h2 className={styles.title}>Search your driver.</h2>
          </div>
          <NationalitySearch
            onChangeHandler={(e) =>
              searchCtx.dispatch({
                type: searchCtx.ACTIONS.NATIONALITY,
                payload: { nationality: e.target.value },
              })
            }
            data={driverCtx.drivers}
          />
          <AgeSearch
            onChangeHandler={(e) =>
              searchCtx.dispatch({
                type: searchCtx.ACTIONS.AGE,
                payload: { age: e.target.value },
              })
            }
            age={searchCtx.age}
          />
          <DriverNumberSearch
            onChangeHandler={(e) =>
              searchCtx.dispatch({
                type: searchCtx.ACTIONS.NUMBER,
                payload: { number: e.target.value },
              })
            }
            data={driverCtx.drivers}
          />
          <DateOfBirthSearch
            onChangeHandler={(e) =>
              searchCtx.dispatch({
                type: searchCtx.ACTIONS.DATEOFBIRTH,
                payload: { dateOfBirth: e.target.value },
              })
            }
            dateOfBirth={searchCtx.dateOfBirth}
          />
          <div className={styles.actions}>
            <button className={styles.formButtons} onClick={searchHandler}>
              Search
            </button>
            <button
              className={styles.formButtons}
              onClick={navigateBackHandler}
            >
              Back
            </button>
          </div>
          <p className={styles.info}>
            *You can search without entering the features that you do not know.
            It will act like it doesn't exist.{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
