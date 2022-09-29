import Card from "../Card/Card"
import './AddExpenseButton.css'
const AddButtonExpense = (props) => {
    const onClickHandler = (e) => {
       // console.log("clicked on add - expense button")
        props.onAddNewExpenseButtonClick(true)
    }
    return <Card className="add-expense">
        <button onClick={onClickHandler}>Add New Expense</button>
    </Card>
}
export default AddButtonExpense;