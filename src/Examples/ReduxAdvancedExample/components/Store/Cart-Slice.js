import {  createSlice } from "@reduxjs/toolkit";

const cartIntialState = {
    totalQuantity : 0,
    items :[]
}
const CartSlice = createSlice({
    name :'cartSlice',
    initialState : cartIntialState,
    reducers : {
        addItemsToCartHandler(state,action){

        }
    }
})


export const CartActions = CartSlice.actions;
export default CartSlice;