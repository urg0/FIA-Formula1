/* import { useMemo } from "react";

const useFilteredDrivers = (drivers, searchCriteria) => {
  const calculateAge = (dateOfBirth) => {
    const year = dateOfBirth.slice(0, 4);
    return 2023 - year;
  };

  return useMemo(() => {
    const { number, dateOfBirth, age, nationality } = searchCriteria;
    return drivers.filter((driver) => {
      const driverAge = calculateAge(driver.dateOfBirth);
      return (
        (!number || driver.permanentNumber === number) &&
        (!dateOfBirth || driver.dateOfBirth === dateOfBirth) &&
        (!age || driverAge === age) &&
        (!nationality || driver.nationality === nationality)
      );
    });
  }, [drivers, searchCriteria]);
};

export default useFilteredDrivers;
 */
