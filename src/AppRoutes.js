import { Routes, Route, Navigate } from "react-router";
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
      <Route
        path="/"
        exact
        element={<Navigate to={"/home"} replace={true}></Navigate>}
      ></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/Examples/*" element={<Examples></Examples>}></Route>
      <Route
        exact
        path="/CourseApp"
        element={<MealsMainApp></MealsMainApp>}
      ></Route>
    </Routes>
  );
};
export default AppRoutes;
