import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [showError, setError] = useState(false);
    const amountRef = useRef();
    const addClickHandler = (e) => {
        e.preventDefault();
        const enteredamount = amountRef.current.value;
        //console.log("value ", enteredamount)
        const enteredamountNumber = +enteredamount;
        //console.log("click handler ", enteredamountNumber)
        if (enteredamountNumber === 0 || enteredamountNumber > 5 || enteredamountNumber < 1) {
            //console.log("add click handler not valid ")
            setError(true)
            return;
        }
        props.onAddToCart(enteredamountNumber);
    }
    return (<form className={classes.form} onSubmit={addClickHandler}>
        <Input ref={amountRef} label="amount" input={{ id: "amount_" + props.id, type: 'number', min: "1", max: "7", defaultValue: "1" }}></Input>
        {showError && <p>please enter valid amount</p>}
        <button> +Add</button>
    </form>)
}
export default MealItemForm;