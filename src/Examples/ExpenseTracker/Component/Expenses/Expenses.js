
import { useState } from 'react';
import Card from '../Card/Card.js';
import ExpenseItem from '../ExpenseItem/ExpenseItem.js';
import './Expenses.css';
const Expenses = (props) => {
    const renderItems = props.items.map((i, index) => {
        return (<ExpenseItem key={index} title={i.title} amount={i.amount} date={i.date} onDelete={props.removeItem}></ExpenseItem>)
    })

    return (<div>
        <Card className='expenses'>
            {renderItems}
        </Card>
    </div>
    )
}
export default Expenses;