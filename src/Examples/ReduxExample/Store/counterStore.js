import { legacy_createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
/*
// store using react redux
const counterReducer = (state = { counter: 0,showCounter : false}, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter :state.showCounter
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter :state.showCounter
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.value,
      showCounter :state.showCounter
    };
  }
  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      showCounter :!state.showCounter
    };
  }
  return state;
};
const CounterStore = legacy_createStore(counterReducer);
*/

//Redux using react tool kit
const initialState = { counter: 0, showCounter : false }
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    },
    decrement(state) {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    },
    increase(state, action) {
      return {
        counter: state.counter + action.payload,
        showCounter: state.showCounter,
      };
    },
    toggle(state) {
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    },
  },
});
const CounterStore = configureStore({
  reducer:{
    counterReducer : counterSlice.reducer
  },
})
export const counterActions = counterSlice.actions;
export default CounterStore;
