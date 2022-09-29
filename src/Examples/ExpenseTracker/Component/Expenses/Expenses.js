
import { useState } from 'react';
import Card from '../Card/Card.js';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter.js';
import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import './Expenses.css';
const Expenses = (props) => {

    const [year, setYear] = useState('')
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);
    }
    let filteredElements = [...props.items]
    if (year) {
        filteredElements = props.items.filter(i => i.date.getFullYear().toString() === year)
    }

    let renderItems = (<div>please add Expenses</div>)
    if (filteredElements && filteredElements.length >= 1) {
        renderItems = filteredElements.map((i, index) => {
            return (<ExpenseItem key={index} title={i.title} amount={i.amount} date={i.date} onDelete={props.removeItem}></ExpenseItem>)
        })
    }
    return (<div>
        <Card className='expenses'>
            <ExpenseFilter onChange={filterChangeHandler} value={year}></ExpenseFilter>
            {renderItems}
        </Card>
    </div>
    )
}
export default Expenses;