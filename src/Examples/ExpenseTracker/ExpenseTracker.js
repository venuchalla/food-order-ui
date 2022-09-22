import { useState } from "react"
import Expenses from "./Component/Expenses/Expenses"
import NewExpense from "./Component/NewExpense/NewExpense"

const ExpenseTracker = (props) => {
    const defaultItems = []
    const [expenseItems, setExpenseItems] = useState(defaultItems);
    const addExpenseHandler = (expense) => {
        setExpenseItems((prevState) => { return [...prevState, expense] });
    }
    const removeExpenseHandler = (title) => {
        console.log("removing :", title)
        setExpenseItems((prevState) => {
            return arrayRemove(prevState, title)
        })

    }
    const arrayRemove = (arr, value) => {
        return arr.filter(element => element.title !== value);
    }
    const renderExpenses = expenseItems.length >= 1 ? (<Expenses items={expenseItems} removeItem={removeExpenseHandler}></Expenses>) : "";
    return (
        <div>
            <h1 style={{textAlign :"center",color : 'blue'}}> Expense Tracker</h1>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            {renderExpenses}
        </div>
    )
}
export default ExpenseTracker;