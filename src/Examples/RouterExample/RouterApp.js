import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import AllQuotes from "./Pages/AllQuotes";
import LayOut from "./Components/layout/layout";

function RouterApp() {
  /**
   *
   */
  return (
    <LayOut>
      <Routes>
        <Route
          exact path="/NewQuote"
          element={<NewQuote></NewQuote>}
        ></Route>
        <Route
          exact path="/QuoteDetail/:id"
          element={<QuoteDetail></QuoteDetail>}
        ></Route>
        <Route
          exact path="/AllQuotes"
          element={<AllQuotes></AllQuotes>}
        ></Route>
        </Routes>
    </LayOut>
  );
}

export default RouterApp;
