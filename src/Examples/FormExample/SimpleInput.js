import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnterdName] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);
  const [enteredEmail, setEnterdEmail] = useState("");
  const [inputEmailTouched, setInputEmailIsTocuhed] = useState(false);
  const [emailIsValid,setInputEmailIsValid] = useState(false);

  const validateEmail = (email) => {
    //const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
   // console.log("emailValid:", reg.test(email));
    let isValid =reg.test(email);
    setInputEmailIsValid(isValid);
  };
  const inputRef = useRef();
  const emailRef = useRef();

  const nameChangeHandler = (event) => {
    setEnterdName(event.target.value);
    validate(event.target.value);
  };
  const onBlurHandler = (event) => {
    setInputTouched(true);
    validate(enteredName);
  };
  const onBlurEmailHandler = (event) => {
    setInputEmailIsTocuhed(true);
   validateEmail(enteredEmail);
  };
  const validate = (value) => {
    let valid = value.trim() !== "";
    setInputIsValid(valid);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setInputTouched(true);
    setInputEmailIsTocuhed(true);
    validate(enteredName);
    validateEmail(enteredEmail);
  };
  const emailChangeHandler = (event) => {
    setInputEmailIsTocuhed(true);
    setEnterdEmail(event.target.value);
    validateEmail(event.target.value);
  };

  let showError = !inputIsValid && inputTouched;
  let showEmailError = inputEmailTouched && !emailIsValid;
  const inputclasses = showError ? "form-control invalid" : "form-control";
  const emailClasses = showEmailError ? "form-control invalid" : "form-control";
  
  return (
    <form autoComplete="off">
      <div className={inputclasses}>
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
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          onChange={emailChangeHandler}
          onBlur={onBlurEmailHandler}
          value={enteredEmail}
        />
        {showEmailError ? (
          <p className="error-text">Email is not valid </p>
        ) : null}
      </div>
      <div className="form-actions">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
