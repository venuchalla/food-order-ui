import Card from "../Card/Card";
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {
    let years = [ '','2018', '2019', '2020', '2021', '2022'];
    const optionComponent = years.map((k, index) => {
        return (<option key={index} value={k}> {k}</option>)
    })
    const onSelectHandler = (e) => {
        console.log("value:", e.target.value);
        props.onChange(e.target.value);
    }
    return (<Card className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label htmlFor="years">Filter by year:</label>
            <select id="years" onChange={onSelectHandler} defaultValue={props.value}>
                {optionComponent}
            </select>
        </div>

    </Card>)
}

export default ExpenseFilter;