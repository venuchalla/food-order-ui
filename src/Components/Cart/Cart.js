import { useContext } from "react";
import Modal from "../Layout/Modal/Modal";
import CartContext from "../Store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => { 
        cartCtx.removeItem(id)
    }
    const cartItemAddHandler = (item) => { 
        cartCtx.addItem({...item,amount: 1})
    }
    const cartItems = cartCtx.items.map((item) => {
        return (
            <CartItem key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            ></CartItem>)
    })
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartItemUl = (<ul className={classes["cart-items"]}>{cartItems}</ul>)
    const hasItems = cartCtx.items.length > 0;

    return (
        <Modal closeModal={props.onCloseButton}>
            {cartItemUl}
            <div className={classes.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseButton}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}   
            </div>
            <CheckOut></CheckOut>
        </Modal>
    )
}
export default Cart;