import Counter from "../ReduxExample/components/Counter";
import { Provider } from "react-redux";
import CounterStore from "./Store/counterStore";
import CounterUsingClass from "../ReduxExample/components/CounterUsingClass";
import Header from "../ReduxExample/components/Header";
import Auth from "../ReduxExample/components/Auth";

const ReduxMain = (props) => {
  return (
    <Provider store={CounterStore}>
      <Header></Header>
      <Auth></Auth>
    </Provider>
  );
};
export default ReduxMain;
