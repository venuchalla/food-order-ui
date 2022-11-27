import Counter from "../ReduxExample/components/Counter";
import { Provider } from "react-redux";
import CounterStore from "./Store/counterStore";
import CounterUsingClass from '../ReduxExample/components/CounterUsingClass'
const ReduxMain = (props) => {
  return (
    
    <Provider store={CounterStore}>
      <Counter></Counter>
      <CounterUsingClass></CounterUsingClass>
    </Provider>
  );
};
export default ReduxMain;
