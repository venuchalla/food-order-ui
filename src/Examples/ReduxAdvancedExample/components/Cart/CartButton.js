import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "../Store/Ui-Slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const totalItems = useSelector((state) => {
    return state.cart.totalQuantity;
  });
  const dispatch = useDispatch();
  const onClickHandler = (props) => {
    dispatch(uiSliceActions.toggleCartHandler());
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
