import { createContext, useReducer } from "react";

export const SearchContext = createContext({
  nationality: "",
  age: "",
  number: "",
  dateOfBirth: "",
  ACTIONS: [],
});

const SearchContextProvider = ({ children }) => {
  const ACTIONS = {
    NATIONALITY: "nationality",
    AGE: "age",
    NUMBER: "number",
    DATEOFBIRTH: "dateOfBirth",
    RESET: "reset",
  };

  const driverReducer = (state, { type, payload }) => {
    switch (type) {
      case ACTIONS.NATIONALITY:
        return { ...state, nationality: payload.nationality };
      case ACTIONS.AGE:
        return { ...state, age: payload.age };
      case ACTIONS.NUMBER:
        return { ...state, number: payload.number };
      case ACTIONS.DATEOFBIRTH:
        return { ...state, dateOfBirth: payload.dateOfBirth };
      case ACTIONS.RESET:
        return {
          nationality: "",
          age: "",
          number: "",
          dateOfBirth: "",
        };

      default:
        return state;
    }
  };

  const [{ nationality, age, number, dateOfBirth }, dispatch] = useReducer(
    driverReducer,
    {
      /* age: "any", */
    }
  );

  return (
    <SearchContext.Provider
      value={{
        nationality,
        age,
        number,
        dateOfBirth,
        dispatch,
        ACTIONS: ACTIONS,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

/* value={{
  nationality: nationality,
  age: age,
  number: number,
  dateOfBirth: dateOfBirth,
  dispatch: dispatch,
  ACTIONS: ACTIONS,
}} */
