
import { Provider } from "react-redux";
import AppStore from "./components/Store/AppStore.js";
import ReduxAdvancedExampleApp from "./ReduxAdvancedExampleApp.js";
const ReduxAdvancedExample = (props) => {
  return (
    <Provider store={AppStore}>
      <ReduxAdvancedExampleApp></ReduxAdvancedExampleApp>
    </Provider>
  );
};

export default ReduxAdvancedExample;
