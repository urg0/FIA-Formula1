import { useReducer } from "react";

const initialInputState = {
  enteredValue: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { enteredValue: action.value, isTouched: state.isTouched };

    case "BLUR":
      return { isTouched: true, enteredValue: state.enteredValue };
  }
};

const useBasicInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = validateValue(inputState.enteredValue);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueInputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueInputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    enteredValue,
    isTouched,
    enteredValueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useBasicInput;
