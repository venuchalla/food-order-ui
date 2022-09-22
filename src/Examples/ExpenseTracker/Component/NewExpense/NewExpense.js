import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseHandler = (userInput) => {
        const data = { ...userInput, id: Math.random().toString() }
        // console.log(data,"new Expense");
        props.onAddExpense(data);
    }
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>)
}
export default NewExpense;