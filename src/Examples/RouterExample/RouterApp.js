import { NavLink, Outlet } from "react-router-dom";


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
      <Outlet></Outlet>
    </div>
  );
}

export default RouterApp;
