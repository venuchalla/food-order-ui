import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const onDeleteClickHandler = (e) => {
        props.onDelete(title);

    }

    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={new Date(props.date)}></ExpenseDate>
            </div >
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={onDeleteClickHandler}> Delete Expense</button>
            </div>

        </Card>
    );
}
export default ExpenseItem;