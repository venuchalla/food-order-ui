import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {counterActions } from '../Store/counterStore';
const Counter = () => {
  const dispatch = useDispatch();
  const {counter }= useSelector((state) => {
   // console.log("state",state.counterReducer)
    return state.counterReducer
  });

  const incrementHandler = () => {
     //dispatch{ type: "INCREMENT" }
    dispatch(counterActions.increment());

  };
  const decrementHandler = () => {
   
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>IncrementBy5</button>
      </div>
    </main>
  );
};

export default Counter;
