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
          <NavLink to="UserFinder">ClassComponentExample</NavLink>
        </li>
        <li>
          <NavLink to="CustomHooksExample"> CustomHooks Example</NavLink>
        </li>
        <li>
          <NavLink to="CustomHooksHttpExampleMain"> CustomHooks Http Example</NavLink>
        </li>
        <li>
          <NavLink to="ExpenseTracker"> Expense Tracker</NavLink>
        </li>
        <li>
          <NavLink to="FormExample"> Form Example</NavLink>
        </li>
        <li>
          <NavLink to="ReduxAdvancedExample"> Redux Advanced Example</NavLink>
        </li>
        <li>
          <NavLink to="ReduxExample"> Redux Example</NavLink>
        </li>
        <li>
          <NavLink to="HttpRequestExample">Http Request Example</NavLink>
        </li>
        <li>
          <NavLink to="RouterApp">Router Example</NavLink>
        </li>
        <li>
          <NavLink to="StyleExample">Styles Example</NavLink>
        </li>
        <li>
          <NavLink to="UserMain"> User App</NavLink>
        </li>
        <li>
          <NavLink to="Authentication"> Authentication App</NavLink>
        </li>
      </ul>
    </Card>
    <ExampleRoutes></ExampleRoutes>
    </Fragment>
  );
};
export default Examples;
