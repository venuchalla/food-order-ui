import { configureStore } from "@reduxjs/toolkit";
import CartSlice from '../Store/Cart-Slice';
import ProductsSlice from "./Products-slice";
const AppStore = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    products: ProductsSlice.reducer,
  },
});

export default AppStore;
