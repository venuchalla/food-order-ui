import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../Store/Cart-Slice';
import ProductsSlice from "./Products-slice";
import uiSlice from "./Ui-Slice";

const AppStore = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    products: ProductsSlice.reducer,
    ui : uiSlice.reducer
  },
});

export default AppStore;
