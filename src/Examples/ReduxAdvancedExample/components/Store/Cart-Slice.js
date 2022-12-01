import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "./Ui-Slice";
const cartIntialState = {
  totalQuantity: 0,
  items: [],
  changed : false,
};
const CartSlice = createSlice({
  name: "cartSlice",
  initialState: cartIntialState,
  reducers: {
    addItemsToCartHandler(state, action) {
      const { id, title, price } = action.payload;
      console.log("title:", title);
      let items = state.items;
      const index = items.findIndex((i) => {
        return i.id === id;
      });
      if (index >= 0) {
        let item = items[index];
        let quantity = item.quantity + 1;
        let total = quantity * item.price;
        item.quantity = quantity;
        item.total = total;
        items[index] = item;
        let totalQuantity = state.totalQuantity;
        state.totalQuantity = totalQuantity + 1;
      } else {
        items.push({
          id: id,
          title: title,
          price: price,
          quantity: 1,
          total: price,
        });
        let totalQuantity = state.totalQuantity;
        state.totalQuantity = totalQuantity + 1;
        state.changed =true;
      }
    },
    decrementQuantityHandler(state, action) {
      const { id, title, price } = action.payload;
      let items = state.items;
      const index = items.findIndex((i) => {
        return i.id === id;
      });
      if (index >= 0) {
        let totalQuantity = state.totalQuantity;
        let item = items[index];
        let quantity = item.quantity - 1;
        if (quantity >= 1) {
          let total = quantity * price;
          item.quantity = quantity;
          item.total = total;
          items[index] = item;
        } else {
          let filteredItems = items.filter((i) => {
            return i.title !== title;
          });
          state.items = filteredItems;
        }
        state.totalQuantity = totalQuantity - 1;
        state.changed =true;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.changed = action.payload.changed
    },
  },
});

export const fetchCartData = () => {
  return (dispatch) => {
    const fetchDataFromserver = () => {
      fetch("http://localhost:8080/cart/getCart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
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
          dispatch(CartActions.replaceCart({
            totalQuantity : data.totalQuantity,
            items : data.items || [],
            changed : false
          }))
        })
        .catch((error) => {
          console.log("error", error);
          dispatch(
            uiSliceActions.showNotification({
              status: "error",
              title: "Error",
              message: "fetching is failed",
            })
          );
        });
    };
    fetchDataFromserver();
  };
 
};
export const sendCartData = (cartData) => {
  return (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "sending",
        message: "sending data",
      })
    );
    const sendRequst =  () => {
      const requestBody = {
        totalQuantity: cartData.totalQuantity,
        items: cartData.items,
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
        });
    };
    sendRequst();
  };
};
export const CartActions = CartSlice.actions;
export default CartSlice;
