import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { CartActions } from "../Store/Cart-Slice";
const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cart = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();
  const addCartClickHandler = (event) => {
    dispatch(
      CartActions.addItemsToCartHandler({ id: id, title: title, price: price })
    );
  };

  const addCartItem = (event) => {
    const newTotalQuantity = cart.totalQuantity + 1;

    const updatedItems = cart.items.slice(); // create copy via slice to avoid mutating original state
    const existingItem = updatedItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedItem = { ...existingItem }; // new object + copy existing properties to avoid state mutation
      updatedItem.quantity++;
      updatedItem.total = updatedItem.total + price;
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        price: price,
        quantity: 1,
        total: price,
        title: title,
      });
    }

    const newCart = {
      totalQuantity: newTotalQuantity,
      items: updatedItems,
      changed : true
    };

    dispatch(CartActions.replaceCart(newCart));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCartItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
