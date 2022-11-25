import { useState } from "react";

const useInput = (validateFn) => {
  const [value, setValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);
  const isValid = validateFn(value);
  const hasError = inputTouched && !isValid;
  const inputChangeHandler = (event) => {
    setInputTouched(true);
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setInputTouched(true);
  };
const reset =()=>{
    setInputTouched(false);
    setValue("")
}
  return {
    value: value,
    isValid:isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;
