import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { Outlet } from "react-router-dom";
const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/Examples/RouterApp/AllQuotes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Examples/RouterApp/NewQuote"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
