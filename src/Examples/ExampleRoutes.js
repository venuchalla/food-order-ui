import { Routes, Route} from "react-router";
import ReduxAdvancedExample from "./ReduxAdvancedExample/ReduxAdvancedExample";
import UserFinder from "./ClassComponentExample/UserFinder";
import CustomHooksHttpExampleMain from "./CustomHooksHttpExample/CustomHooksHttpExampleMain";
import CustomhooksMain from "./CustomHooksExample/CustomHooksMain";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import FormExampleMain from "./FormExample/FormExampleMain";
import ReduxMain from "./ReduxExample/ReduxMain";
import RouterApp from "./RouterExample/RouterApp";
import HttpRequestExample from "./HttpRequestsExample/HttpRequestExample";
import StyleExample from "./StylesExample/StyleExample";
import UserMain from "./UserApp/UserMain/UserMain";
const ExampleRoutes = () => {
  return (
    <Routes>
      <Route
        exact
        path="/ReduxAdvancedExample"
        element={<ReduxAdvancedExample></ReduxAdvancedExample>}
      ></Route>
      <Route
        exact
        path="/UserFinder"
        element={<UserFinder></UserFinder>}
      ></Route>
      <Route
        exact
        path="/CustomHooksExample"
        element={<CustomhooksMain></CustomhooksMain>}
      ></Route>
      <Route
        exact
        path="/CustomHooksHttpExampleMain"
        element={<CustomHooksHttpExampleMain></CustomHooksHttpExampleMain>}
      ></Route>
      <Route
        exact
        path="/ExpenseTracker"
        element={<ExpenseTracker />}
      ></Route>
      <Route
        path="/FormExample"
        element={<FormExampleMain></FormExampleMain>}
      ></Route>
      <Route
        exact
        path="/ReduxExample"
        element={<ReduxMain></ReduxMain>}
      ></Route>
      <Route
        exact
        path="/HttpRequestExample"
        element={<HttpRequestExample></HttpRequestExample>}
      ></Route>
      <Route
        exact
        path="/StyleExample"
        element={<StyleExample></StyleExample>}
      ></Route>
      <Route
        exact
        path="/UserMain"
        element={<UserMain></UserMain>}
      ></Route>
      <Route
        path="/RouterApp/*"
        element={<RouterApp></RouterApp>}
      ></Route>
    </Routes>
  );
};
export default ExampleRoutes;
