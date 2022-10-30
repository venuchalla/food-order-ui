import CartIcon from "../../Cart/CartIcon.js";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext);
    //  console.log("context in header cart button:",cartContext)
    const { items } = cartContext
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => { setButtonIsHighlighted(false) }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items])
    const btnclasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`
    return (<button className={btnclasses} onClick={props.onCartButtonClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span> Your Cart</span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
    </button>)
}
export default HeaderCartButton;