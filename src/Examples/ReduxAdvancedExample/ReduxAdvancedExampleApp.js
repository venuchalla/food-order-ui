import Layout from "../ReduxAdvancedExample/components/Layout/Layout.js";
import Cart from "../ReduxAdvancedExample/components/Cart/Cart.js";
import Products from "../ReduxAdvancedExample/components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { uiSliceActions } from "./components/Store/Ui-Slice";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { CartActions, fetchCartData, sendCartData } from "./components/Store/Cart-Slice.js";

let intialLoad = true;

const ReduxAdvancedExampleApp = (prop) => {
  const { showCart } = useSelector((state) => {
    return state.ui;
  });
  const showNotification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (intialLoad) {
      intialLoad = false;
      return;
    }
    /* dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending data",
      })
    );
    const requestBody = {
      totalQuantity: cart.totalQuantity,
      items: cart.items,
    };
    fetch("http://localhost:8080/cart/updateCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("sending data is failed");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(
          uiSliceActions.showNotification({
            status: "success",
            title: "Success!",
            message: "send data Successfully",
          })
        );
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(
          uiSliceActions.showNotification({
            status: "error",
            title: "Error",
            message: "sending is failed",
          })
        );
      });*/
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
       

   
  }, [cart, dispatch]);
  return (
    <Fragment>
      {showNotification && (
        <Notification
          status={showNotification.status}
          title={showNotification.title}
          message={showNotification.message}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
};
export default ReduxAdvancedExampleApp;
