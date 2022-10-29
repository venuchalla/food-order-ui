import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
    const cartContext = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    const onaddCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name :props.name,
            amount : amount,
            price :props.price
        })
    }
    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                <MealItemForm id={props.id} onAddToCart={onaddCartHandler}></MealItemForm>
            </div>
        </li>

    )
}
export default MealItem;