import CartIcon from "../../Cart/CartIcon.js";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);
  //  console.log("context in header cart button:",cartContext)
    const numberOfCartItems = cartContext.items.reduce((currentNumber,item)=>{
        return currentNumber + item.amount;
    },0)
    return (<button className={styles.button} onClick ={props.onCartButtonClick}>
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