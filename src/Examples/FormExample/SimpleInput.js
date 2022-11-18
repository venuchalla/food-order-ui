import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnterdName] = useState('');
    const [inputIsValid, setInputIsValid] = useState(false);
    const [inputTouched, setInputTouched] = useState(false);
    const inputRef = useRef();
    const emailRef = useRef();
    const nameChangeHandler = (event) => {
        setEnterdName(event.target.value)
        validate(event.target.value)

    }
    const onBlurHandler = (event) => {
        console.log("onBlur")
        validate(enteredName)
    }

    const validate = (value) => {
        setInputTouched(true);
        let valid = value.trim() !== ''
        setInputIsValid(valid)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        validate(enteredName)
        

    }

    let showError = !inputIsValid && inputTouched
    let showEmailError = false;
    const classes = showError ? "form-control invalid": "form-control"
    return (
        <form autoComplete="off">
            <div className={classes}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={inputRef}
                    onChange={nameChangeHandler}
                    value={enteredName}
                    onBlur={onBlurHandler}
                />
                {showError ? (<p className="error-text">Name is Empty</p>) : null}
            </div>
            <div className={classes}>
                <label htmlFor='email'>Your Email</label>
                <input type='text' id='email' ref={emailRef}
                />
                {showEmailError ? (<p className="error-text">Email is Empty</p>) : null}
            </div>
            <div className="form-actions">
                <button onClick={submitHandler}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;