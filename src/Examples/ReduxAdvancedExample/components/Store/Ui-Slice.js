import { createSlice } from "@reduxjs/toolkit";

const intialUiState = {
  showCart: false,
  notification: null,
};
const uiSlice = createSlice({
  name: "uiSlice",
  initialState: intialUiState,
  reducers: {
    toggleCartHandler(state, action) {
      //let showCart = !state.showCart;
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const uiSliceActions = uiSlice.actions;
export default uiSlice;
