import { useState, useEffect } from "react";

const useFetch = (url, isConstructor = false) => {
  const [data, setData] = useState([]);
  const [originalDrivers, setOriginalDrivers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  /* TODO:cache? */
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed!");
        }
        return response.json();
      })
      .then((data) => {
        setOriginalDrivers(data.MRData.DriverTable?.Drivers);
        //FIXME: 21 does not work
        setData(
          isConstructor
            ? data.MRData.ConstructorTable?.Constructors
            : data.MRData.DriverTable?.Drivers
        );
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.log(err.message || "Something went wrong.");
      });
  }, [isConstructor, url]);

  return {
    data,
    setData,
    originalDrivers,
    isLoading,
    error,
  };
};

export default useFetch;
