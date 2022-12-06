import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Card from "../Components/UI/Card/Card";
import ExampleRoutes from "./ExampleRoutes";

const Examples = (props) => {
  return (
    <Fragment>
    <Card>
      <h1>React Examples</h1>
      <ul>
        <li>
          <NavLink to="/Examples/UserFinder">ClassComponentExample</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/CustomHooksExample"> CustomHooks Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/CustomHooksHttpExampleMain"> CustomHooks Http Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/ExpenseTracker"> Expense Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/FormExample"> Form Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/ReduxAdvancedExample"> Redux Advanced Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/ReduxExample"> Redux Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/HttpRequestExample">Http Request Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/RouterApp">Router Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/StyleExample">Styles Example</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/UserMain"> User App</NavLink>
        </li>
      </ul>
    </Card>
    <ExampleRoutes></ExampleRoutes>
    </Fragment>
  );
};
export default Examples;
