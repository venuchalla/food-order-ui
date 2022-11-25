import { useReducer, useState } from "react";

const intialState = {
  value: "",
  inputTouched: false,
};
const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, inputTouched: state.inputTouched };
  }
  if (action.type === "BLUR") {
    return { inputTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return intialState;
  }
};
const useInput = (validateFn) => {
  const [inputState, dispatch] = useReducer(inputReducer, intialState);
  //const [value, setValue] = useState("");
  //const [inputTouched, setInputTouched] = useState(false);
  const isValid = validateFn(inputState.value);
  const hasError = inputState.inputTouched && !isValid;

  const inputChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value});
  };

  const inputBlurHandler = (event) => {
    //setInputTouched(true);
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
