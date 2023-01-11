import { useContext, useState } from "react";
import Modal from "../Layout/Modal/Modal";
import CartContext from "../Store/cart-context";
import classes from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import CheckOut from "./CheckOut";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [checkOut, setCheckOut] = useState(false);
  const [isSubmiting, setisSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderClickHandler = () => {
    setCheckOut(true);
  };
  const onSubmitHandler = (userData) => {
    // console.log("userData:", userData);
    setisSubmiting(true);
    fetch(
      "https://react-burger-app-8ad9b-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    ).then((response) => {
      if (response.ok) {
        setDidSubmit(true);
        cartCtx.clearItems();
      } else {
        console.log("response:", response);
      }
      setisSubmiting(false);
    });
  };
  const cartItems = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      ></CartItem>
    );
  });
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemUl = <ul className={classes["cart-items"]}>{cartItems}</ul>;
  const hasItems = cartCtx.items.length > 0;

  const modalContent = (
    <div>
      {cartItemUl}
      <div className={classes.total}>
        <span>TotalAmount</span>
        <span>{totalAmount}</span>
      </div>
      {!checkOut && (
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseButton}
          >
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderClickHandler}>
              Order
            </button>
          )}
        </div>
      )}

      {checkOut && (
        <CheckOut
          onCancel={props.onCloseButton}
          onConfirm={onSubmitHandler}
        ></CheckOut>
      )}
    </div>
  );
  const loadingContent = <p> submitting order please wait ... </p>;

  const submittedComponent = (
    <div>
      <p> succesfully submitted </p>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onCloseButton}
        >
          Close
        </button>
      </div>
    </div>
  );
  return (
    <Modal closeModal={props.onCloseButton}>
      {!isSubmiting && !didSubmit && modalContent}
      {isSubmiting && loadingContent}
      {didSubmit && submittedComponent}
    </Modal>
  );
};
export default Cart;
