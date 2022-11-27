import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";
import {counterActions } from '../Store/counterStore';

class CounterUsingClass extends Component {
  render() {
    const showCounter = this.props.showCounter
    return (
      <main className={classes.counter}>
        <h1>Redux Counter using Class Based Component</h1>
        {showCounter  && (
          <div className={classes.value}>{this.props.counter}</div>
        )}

        <div>
          <button onClick={this.props.incrementHandler} disabled ={!showCounter}>Increment</button>
          <button onClick={this.props.decrementHandler} disabled ={!showCounter}>Decrement</button>
          <button onClick={this.props.toggleHanlder}>Show/HideCounter</button>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log("state in class component:",state.counterReducer.counter)
  return {
    counter: state.counterReducer.counter,
    showCounter: state.counterReducer.showCounter,
  };
};
const mapDispacthToProps = (dispatch) => {
  return {
    incrementHandler: () => {
     // dispatch({ type: "INCREMENT" });
     dispatch(counterActions.increment())
    },
    decrementHandler: () => {
     // dispatch({ type: "DECREMENT" });
     dispatch(counterActions.decrement())
    },
    toggleHanlder: () => {
     // dispatch({ type: "TOGGLE" });
     dispatch(counterActions.toggle())
    },
  };
};
export default connect(mapStateToProps, mapDispacthToProps)(CounterUsingClass);
