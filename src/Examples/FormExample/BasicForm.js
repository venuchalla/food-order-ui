import { useRef } from "react";
import useInput from "./hooks/UseInput";

const BasicForm = (props) => {
  const nameValidateFn = (value) => {
    return value.trim() !== "";
  };
  const emailValidateFn = (value) => {
    //const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return reg.test(value);
  };
  const {
    value: fName,
    isValid: fNameValid,
    hasError: fNamehasError,
    inputChangeHandler: fnameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: fNameresetHandler,
  } = useInput(nameValidateFn);
  const {
    value: lName,
    isValid: lNameValid,
    hasError: lNamehasError,
    inputChangeHandler: lnameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: lNameresetHandler,
  } = useInput(nameValidateFn);
  const {
    value: email,
    isValid: emailValid,
    hasError: emailhasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailresetHandler,
  } = useInput(emailValidateFn);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    emailBlurHandler();
    fNameBlurHandler();
    lNameBlurHandler();
    if (!formValid) {
      if (!fNameValid) {
        fnameRef.current.focus();
      } else if (!lNameValid) {
        lnameRef.current.focus();
      } else if (!emailValid) {
        emailRef.current.focus();
      }
    }else {
      emailresetHandler();
      lNameresetHandler();
      fNameresetHandler();
    }
  };

  const formValid = fNameValid && lNameValid && emailValid;
  const fnameclasses = fNamehasError ? "form-control invalid" : "form-control";
  const lnameClasses = lNamehasError ? "form-control invalid" : "form-control";
  const emailClasses = emailhasError ? "form-control invalid" : "form-control";
  return (
    <form>
      <div className="control-group">
        <div className={fnameclasses}>
          <label htmlFor="fname">First Name</label>
          <input
            ref={fnameRef}
            type="text"
            id="fname"
            value={fName}
            onBlur={fNameBlurHandler}
            onChange={fnameChangeHandler}
          />
          {fNamehasError ? (
            <p className="error-text"> First name is Empty </p>
          ) : null}
        </div>
        <div className={lnameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            ref={lnameRef}
            type="text"
            id="lname"
            value={lName}
            onBlur={lNameBlurHandler}
            onChange={lnameChangeHandler}
          />
          {lNamehasError ? (
            <p className="error-text"> Last name is Empty </p>
          ) : null}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          ref={emailRef}
          type="text"
          id="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailhasError ? (
          <p className="error-text"> Email is not valid</p>
        ) : null}
      </div>
      <div className="form-actions">
        <button onClick={submitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
