import React from "react";

import DriverDetails from "components/Drivers/DriverDetails/DriverDetails";

const DriverDetailPage = () => {
  return (
    <>
      <DriverDetails />
    </>
  );
};

export default DriverDetailPage;

/* export async function loader({ request, params }) {
  const { data: driver, setData: setDriver } = useFetch(
    `http://ergast.com/api/f1/drivers/${params.id}.json`,
    false
  );

  return data;
} */
