import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseHandler = (userInput) => {
        const data = { 'title':userInput.title,'amount':userInput.amount,'date':new Date(userInput.date), id: Math.random().toString() }
        props.onAddExpense(data);
    }
    const cancelButtonHandler =(e)=>{
        props.onCancelButton(false);
    }
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseHandler} onCancelButton ={cancelButtonHandler}/>
    </div>)
}
export default NewExpense;