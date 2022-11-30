import Layout from "../ReduxAdvancedExample/components/Layout/Layout.js";
import Cart from "../ReduxAdvancedExample/components/Cart/Cart.js";
import Products from "../ReduxAdvancedExample/components/Shop/Products";
import { Provider } from "react-redux";
import AppStore from "./components/Store/AppStore.js";
const ReduxAdvancedExample = (props) => {
  return (
    <Provider store={AppStore}>
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Provider>
  );
};

export default ReduxAdvancedExample;
