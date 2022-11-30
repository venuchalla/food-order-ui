import { createSlice } from "@reduxjs/toolkit";

const intialUiState = {
    showCart: false,
}
const uiSlice = createSlice({
    name : 'uiSlice',
    initialState : intialUiState,
    reducers:{
        toggleCartHandler(state, action) {
            //let showCart = !state.showCart;
            state.showCart = !state.showCart;
          },
    }
})
export  const uiSliceActions = uiSlice.actions;
export default uiSlice;
