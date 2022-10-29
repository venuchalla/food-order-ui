import { Fragment } from "react"
import AvailableMeals from "./Available-meals"
import MealsSummary from "./MealsSummary"

const Meals =(props)=>{
    return (<Fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals></AvailableMeals>
        
    </Fragment>)
}

export default Meals;