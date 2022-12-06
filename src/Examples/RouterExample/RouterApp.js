import { NavLink, Outlet } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import AllQuotes from "./Pages/AllQuotes";

function RouterApp() {
  /**
   *
   */
  return (
    <div>
      <h1> Router Example</h1>
      <ul>
        <li>
          <NavLink to="/Examples/RouterApp/NewQuote"> Add New Quote</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/RouterApp/QuoteDetail"> QuoteDetail</NavLink>
        </li>
        <li>
          <NavLink to="/Examples/RouterApp/AllQuotes"> All Quotes</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default RouterApp;
