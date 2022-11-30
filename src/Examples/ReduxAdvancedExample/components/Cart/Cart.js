import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { showCart, items } = useSelector((state) => {
    return state.cart;
  });
  return (
    <div>
      {showCart && (<Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.map((item, index) => {
        return (
          <ul key={index}>
            <CartItem
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.total,
                price: item.price,
              }}
            />
          </ul>
        );
      })}
    </Card>)}
    </div>
    
  );
};

export default Cart;
