import { createContext, useMemo } from "react";
import useFetch from "hooks/useFetch";

import { FLAGS } from "data/dummyData";
import { NATIONALITY_TO_CODE } from "data/dummyData";

export const DriverContext = createContext({
  originalDrivers: [],
  drivers: [],
  setDrivers() {},
  ages: [],
  driverNumbers: [],
  codes: {},
  flags: {},
  isLoading: false,
});

const DriverContextProvider = ({ children }) => {
  const {
    data: drivers,
    setData: setDrivers,
    originalDrivers,
    isLoading,
    /* error, */
  } = useFetch("http://ergast.com/api/f1/2023/drivers.json");

  /* TODO: extract this dummy data */

  const ages = [];
  drivers
    .map((d) => {
      return ages.push(d.dateOfBirth);
    })
    .sort((a, b) => a - b);

  const driverNumbers = [];
  drivers
    .map((d) => {
      return driverNumbers.push(d.permanentNumber);
    })
    .sort((a, b) => a - b);

  const filterDriverHandler = (filteredDrivers) => {
    setDrivers(filteredDrivers);
  };

  const contextValue = useMemo(
    () => ({
      originalDrivers,
      drivers,
      setDrivers: filterDriverHandler,
      ages,
      driverNumbers,
      code: NATIONALITY_TO_CODE,
      flags: FLAGS,
      isLoading,
    }),
    [drivers, isLoading]
  );

  return (
    <DriverContext.Provider value={contextValue}>
      {children}
    </DriverContext.Provider>
  );
};

export default DriverContextProvider;
