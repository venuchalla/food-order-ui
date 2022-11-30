import { createSlice } from "@reduxjs/toolkit";

const intialProducts = [
  {
    id: 1,
    description: "Product 1- amazing!",
    title: "Test Item1",
    price: 6,
  },
  {
    id: 2,
    description: "Product2 - amazing!",
    title: "Test Item2",
    price: 4,
  },
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
