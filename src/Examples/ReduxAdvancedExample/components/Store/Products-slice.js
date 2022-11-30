import { createSlice } from "@reduxjs/toolkit";

const intialProducts = [
  { title: "Test Item",  price: 6 },
  { title: "Test Item2", price: 5 },
];
 
const ProductsSlice = createSlice({
  name: "Items",
  initialState: intialProducts,
  reducers: {
    getProductsHandler(state, action) {},
  },
});
export const productActions = ProductsSlice.actions;
export default ProductsSlice;
