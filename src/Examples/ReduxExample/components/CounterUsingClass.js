import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";

class CounterUsingClass extends Component {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter using Class Based Component</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.props.incrementHandler}>Increment</button>
          <button onClick={this.props.decrementHandler}>Decrement</button>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispacthToProps = (dispatch) => {
  return {
    incrementHandler: () => {
      dispatch({ type: "INCREMENT" });
    },
    decrementHandler: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
};
export default connect(
    mapStateToProps ,
  mapDispacthToProps
)(CounterUsingClass);
