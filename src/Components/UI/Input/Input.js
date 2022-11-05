import classes from "./Input.module.css";
import React from "react";
const Input = React.forwardRef((props, inputRef) => {
    return (<div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  ref={inputRef} {...props.input}></input>

    </div>)
}
)
export default Input;