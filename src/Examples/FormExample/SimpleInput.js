import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnterdName] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const [enteredEmail, setEnterdEmail] = useState("");
  const [inputEmailTouched, setInputEmailIsTocuhed] = useState(false);

  const validateEmail = (email) => {
    return email.trim() === "";
  };
  let inputEmailIsNotValid = validateEmail(enteredEmail);
  const inputRef = useRef();
  const emailRef = useRef();

  const nameChangeHandler = (event) => {
    setEnterdName(event.target.value);
    validate(event.target.value);
  };
  const onBlurHandler = (event) => {
    validate(enteredName);
  };
  const onBlurEmailHandler = (event) => {
    inputEmailIsNotValid = validateEmail(enteredEmail);
  };
  const validate = (value) => {
    setInputTouched(true);
    let valid = value.trim() !== "";
    setInputIsValid(valid);
  };
  const submitHandler = (event) => {
    setInputEmailIsTocuhed(true);
    console.log("clicked on submit");
    event.preventDefault();
    validate(enteredName);
    inputEmailIsNotValid = validateEmail(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setInputEmailIsTocuhed(true);
    setEnterdEmail(event.target.value);
    inputEmailIsNotValid = validateEmail(event.target.value);
  };

  let showError = !inputIsValid && inputTouched;
  let showEmailError = inputEmailTouched && inputEmailIsNotValid;
  const classes = showError ? "form-control invalid" : "form-control";
  return (
    <form autoComplete="off">
      <div className={classes}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={onBlurHandler}
        />
        {showError ? <p className="error-text">Name is Empty</p> : null}
      </div>
      <div className={classes}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          onChange={emailChangeHandler}
          onBlur={onBlurEmailHandler}
          value={enteredEmail}
        />
        {showEmailError ? <p className="error-text">Email is Empty</p> : null}
      </div>
      <div className="form-actions">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
