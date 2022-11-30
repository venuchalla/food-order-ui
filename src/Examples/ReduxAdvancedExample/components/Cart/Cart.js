import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => {
    return state.cart.items;
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.map((item, index) => {
        return (
          <ul>
            <CartItem key = {index}
              item={{ title: item.title, quantity: item.quantity, total: item.total, price: item.price }}
            />
          </ul>
        );
      })}
    </Card>
  );
};

export default Cart;
