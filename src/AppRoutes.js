import { Routes, Route } from "react-router";
import Examples from "./Examples/Examples";
import Home from "./Home";
import ExpenseTracker from "./Examples/ExpenseTracker/ExpenseTracker";
import StyleExample from "./Examples/StylesExample/StyleExample";
import UserMain from "./Examples/UserApp/UserMain/UserMain";
import HttpRequestExample from "./Examples/HttpRequestsExample/HttpRequestExample";
import UserFinder from "./Examples/ClassComponentExample/UserFinder";
import CustomHooksHttpExampleMain from "./Examples/CustomHooksHttpExample/CustomHooksHttpExampleMain";
import ReduxMain from "./Examples/ReduxExample/ReduxMain";
import ReduxAdvancedExample from "./Examples/ReduxAdvancedExample/ReduxAdvancedExample";
import MealsMainApp from "./Components/MealsMainApp";
import CustomhooksMain from "./Examples/CustomHooksExample/CustomHooksMain";
import FormExampleMain from "./Examples/FormExample/FormExampleMain";
import NewQuote from "./Examples/RouterExample/Pages/NewQuote";
import AllQuotes from "./Examples/RouterExample/Pages/AllQuotes";
import QuoteDetail from "./Examples/RouterExample/Pages/QuoteDetail";
import RouterApp from "./Examples/RouterExample/RouterApp";
const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route
        exact
        path="/Examples/ReduxAdvancedExample"
        element={<ReduxAdvancedExample></ReduxAdvancedExample>}
      ></Route>
      <Route
        exact
        path="/Examples/UserFinder"
        element={<UserFinder></UserFinder>}
      ></Route>
      <Route
        exact
        path="/Examples/CustomHooksExample"
        element={<CustomhooksMain></CustomhooksMain>}
      ></Route>
      <Route
        exact
        path="/Examples/CustomHooksHttpExampleMain"
        element={<CustomHooksHttpExampleMain></CustomHooksHttpExampleMain>}
      ></Route>
      <Route
        exact
        path="/Examples/ExpenseTracker"
        element={<ExpenseTracker />}
      ></Route>
      <Route
        path="/Examples/FormExample"
        element={<FormExampleMain></FormExampleMain>}
      ></Route>
      <Route
        exact
        path="/Examples/ReduxExample"
        element={<ReduxMain></ReduxMain>}
      ></Route>
      <Route
        exact
        path="/Examples/HttpRequestExample"
        element={<HttpRequestExample></HttpRequestExample>}
      ></Route>
      <Route
        exact
        path="/Examples/StyleExample"
        element={<StyleExample></StyleExample>}
      ></Route>
      <Route
        exact
        path="/Examples/UserMain"
        element={<UserMain></UserMain>}
      ></Route>
      <Route path="/Examples" element={<Examples></Examples>}></Route>
      <Route exact path="/Examples/RouterApp" element={<RouterApp></RouterApp>}>
        <Route
          exact
          path="/Examples/RouterApp/NewQuote"
          element={<NewQuote></NewQuote>}
        ></Route>
        <Route
          exact
          path="/Examples/RouterApp/AllQuotes"
          element={<AllQuotes></AllQuotes>}
        ></Route>
        <Route
          exact
          path="/Examples/RouterApp/QuoteDetail"
          element={<QuoteDetail></QuoteDetail>}
        ></Route>
      </Route>
      <Route
        exact
        path="/CourseApp"
        element={<MealsMainApp></MealsMainApp>}
      ></Route>
    </Routes>
  );
};
export default AppRoutes;
