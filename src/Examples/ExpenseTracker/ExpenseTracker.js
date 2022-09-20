import ExpenseItem from './Component/ExpenseItem/ExpenseItem.js';
import './ExpenseTracker.css';
const ExpenseTracker = (props) => {
    const items = [
        { title: "firstItem", amount: "$123", date: new Date() },
        { title: "secondItem", amount: "$1234", date: new Date() },
        { title: "thirdItem", amount: "$1235", date: new Date() }
    ]
    const renderItems = items.map((i, index) => {
        return (<ExpenseItem key={index} title={i.title} amount={i.amount} date={i.date}></ExpenseItem>)
    })
    return (<div className='expenses'>
        <h1 style={{textAlign :"center",color : 'blue'}}> Expenses </h1>
        {renderItems}
    </div>)
}
export default ExpenseTracker;