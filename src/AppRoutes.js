import { Routes, Route, Navigate } from "react-router";
import Examples from "./Examples/Examples";
/*import ExpenseTracker from "./Examples/ExpenseTracker/ExpenseTracker";
import StyleExample from "./Examples/StylesExample/StyleExample";
import UserMain from "./Examples/UserApp/UserMain/UserMain";
import HttpRequestExample from "./Examples/HttpRequestsExample/HttpRequestExample";
import UserFinder from "./Examples/ClassComponentExample/UserFinder";
import CustomHooksHttpExampleMain from "./Examples/CustomHooksHttpExample/CustomHooksHttpExampleMain";
import ReduxMain from "./Examples/ReduxExample/ReduxMain";
import ReduxAdvancedExample from "./Examples/ReduxAdvancedExample/ReduxAdvancedExample";
import CustomhooksMain from "./Examples/CustomHooksExample/CustomHooksMain";
import FormExampleMain from "./Examples/FormExample/FormExampleMain";
import NewQuote from "./Examples/RouterExample/Pages/NewQuote";
import AllQuotes from "./Examples/RouterExample/Pages/AllQuotes";
import QuoteDetail from "./Examples/RouterExample/Pages/QuoteDetail";
import RouterApp from "./Examples/RouterExample/RouterApp";*/
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import MealsMainApp from "./Components/MealsMainApp";
import { useContext } from "react";
import AuthContext from "./Components/Store/auth-context";
const AppRoutes = (props) => {
  // <Route path="/home" element={<Home></Home>}></Route>
  const authContext = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={"/auth"} replace={true}></Navigate>}
      ></Route>
      {!authContext.isLoggedIn && (
        <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
      )}
      {authContext.isLoggedIn && (
        <Route
          path="/auth"
          element={<Navigate to={"/home"} replace={true}></Navigate>}
        ></Route>
      )}
      {authContext.isLoggedIn && (
        <Route path="/home" element={<HomePage></HomePage>}></Route>
      )}
      {authContext.isLoggedIn && (
        <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
      )}
      {authContext.isLoggedIn && (
        <Route path="/Examples/*" element={<Examples></Examples>}></Route>
      )}
      {authContext.isLoggedIn && (
        <Route
          path="/CourseApp"
          element={<MealsMainApp></MealsMainApp>}
        ></Route>
      )}
      <Route
        path="*"
        element={<Navigate to={"/auth"} replace={true}></Navigate>}
      ></Route>
    </Routes>
  );
};
export default AppRoutes;
