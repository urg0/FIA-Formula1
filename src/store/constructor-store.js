import { createContext, useMemo } from "react";
import useFetch from "hooks/useFetch";

export const ConstructorContext = createContext({
  constructors: [],
  isLoading: false,
});

const ConstructorContextProvider = ({ children }) => {
  const {
    data: constructors,

    isLoading,
  } = useFetch(`http://ergast.com/api/f1/2023/constructors.json`, true);

  const contextValue = useMemo(() => {
    return {
      constructors: constructors,
      isLoading: isLoading,
    };
  }, [isLoading, constructors]);

  return (
    <ConstructorContext.Provider value={contextValue}>
      {children}
    </ConstructorContext.Provider>
  );
};

export default ConstructorContextProvider;
