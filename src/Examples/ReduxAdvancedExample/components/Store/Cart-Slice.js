import { createSlice } from "@reduxjs/toolkit";

const cartIntialState = {
  showCart: false,
  totalQuantity: 0,
  items: [],
};
const CartSlice = createSlice({
  name: "cartSlice",
  initialState: cartIntialState,
  reducers: {
    addItemsToCartHandler(state, action) {
      const { title, price } = action.payload;
      console.log("title:", title);
      let items = state.items;
      const index = items.findIndex((i) => {
        return i.title === title;
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
        items.push({ title: title, price: price, quantity: 1, total: price });
        let totalQuantity = state.totalQuantity;
        state.totalQuantity = totalQuantity + 1;
      }
    },
    toggleCartHandler(state, action) {
      let showCart = !state.showCart;
      state.showCart = showCart;
    },
    decrementQuantityHandler(state, action) {
      const { title, price } = action.payload;

      let items = state.items;
      const index = items.findIndex((i) => {
        return i.title === title;
      });
      console.log("index:", index);
      if (index >= 0) {
        let totalQuantity = state.totalQuantity
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
        state.totalQuantity = totalQuantity-1;
      }
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
