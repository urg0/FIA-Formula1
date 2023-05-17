import React, { useState, useContext } from "react";

import Loader from "react-spinners/FadeLoader";

import Driver from "../Driver/Driver";
import styles from "./DriversList.module.css";

import Sort from "components/Forms/Sort";
import DriversListSearchForm from "./DriversListSearchForm";

import { DriverContext } from "store/driver-store";
import { SearchContext } from "store/search-store";
/* import { Link } from "react-router-dom"; */

const DriversList = ({ data }) => {
  //data from loader function
  const [enteredDriver, setEnteredDriver] = useState("");

  const driverCtx = useContext(DriverContext);
  const searchCtx = useContext(SearchContext);

  const resetDriversHandler = () => {
    driverCtx.setDrivers(driverCtx.originalDrivers);
    searchCtx.dispatch({
      type: "reset",
    });
  };

  const resetFiltersHandler = () => {
    driverCtx.setDrivers(driverCtx.originalDrivers);
    searchCtx.dispatch({
      type: "reset",
    });
    setEnteredDriver("");
  };

  const driverData = driverCtx.drivers
    .filter((driver) => {
      const fullName = `${driver.givenName} ${driver.familyName}`;
      return enteredDriver === ""
        ? fullName
        : fullName.toLowerCase().includes(enteredDriver.toLowerCase());
    })
    .map((driver) => {
      return (
        <Driver
          key={driver.code}
          name={driver.givenName}
          surname={driver.familyName}
          nationality={driver.nationality}
          number={driver.permanentNumber}
          url={driver.url}
          /* img={`../drivers${driver.familyName}.jpeg`} */
          /* TODO:DESTRUCTURE AND PASS */
        />
      );
    });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <Sort />

          {/* <input
            className={styles.searchDriver}
            onChange={(e) => setEnteredDriver(e.target.value)}
            type="text"
            placeholder="Search your favorite driver!"
          />
          <Link to="search" className={styles.detailSearch}>
            <button
              className={styles.searchButton}
              onClick={resetDriversHandler}
            >
              Search (for testing)
            </button>
          </Link> */}
          {/* TODO: Backdrop */}
          {/* TODO: separate component */}
          <DriversListSearchForm
            onEnteredInputChange={(e) => setEnteredDriver(e.target.value)}
            resetDriversHandler={resetDriversHandler}
            resetFiltersHandler={resetFiltersHandler}
            enteredDriver={enteredDriver}
          />
        </div>

        {/* FIXME: weird, cleaner code  */}
        <div className={styles.driverList}>
          {driverCtx.isLoading /* && driverCtx.drivers.length == 0 */ && (
            <Loader className={styles.loader} color="#b40300" />
          )}

          {!driverCtx.isLoading && driverCtx.drivers.length === 0 && (
            <p>No driver found.</p>
          )}
          {!driverCtx.isLoading && driverCtx.drivers.length !== 0 && driverData}
          {driverCtx.drivers.length !== 0 &&
            !driverCtx.isLoading &&
            driverData.length === 0 && (
              <p className={styles.err}>
                There is no driver called <strong>"{enteredDriver}"</strong> .
                Misspell?
              </p>
            )}
        </div>
      </div>
    </>
  );
};

export default DriversList;
