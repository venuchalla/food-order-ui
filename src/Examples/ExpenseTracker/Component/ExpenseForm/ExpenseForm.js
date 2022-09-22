import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const defaultInput = {
        'title': '',
        'amount': '',
        'date': ''
    }
    const [userInput, setUserInput] = useState(defaultInput)
    const onTitleChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            'title': e.target.value
        })
    }
    // below approch in not recommend to use because react does schedule for state update
    const onAmountChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            'amount': e.target.value
        })
    }
    const onDateChangeHandler = (e) => {
        setUserInput((prevState) => { return { ...prevState, 'date': e.target.value } })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        //.log("submit handler", userInput);
        props.onSaveExpense(userInput)
        setUserInput((prevState) => { return { ...prevState, 'title': '',
        'amount': '','date': ''} })
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'value={userInput.title} minLength ="2" onChange={onTitleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value= {userInput.amount} minLength ="1" min='0.01' step='0.01' onChange={onAmountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value ={userInput.date} onChange={onDateChangeHandler} min ='2021-01-01'></input>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenseForm;