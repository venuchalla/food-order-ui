import React, { useState } from 'react';

import Button from '../../UI/Button/Button.js';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const onFocusHandler = event =>{
    setIsValidInput(true);
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: isValidInput ? "black" : "Red" }}>Course Goal</label>
        <input style={{ borderColor : isValidInput ? "black" : "Red", backgroundColor : isValidInput ? "transparent" : "salmon" }} type="text" onChange={goalInputChangeHandler} onFocus ={onFocusHandler } />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
