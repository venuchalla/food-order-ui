import { Routes, Route } from "react-router";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import AllQuotes from "./Pages/AllQuotes";
import LayOut from "./Components/layout/layout";
import { Navigate } from "react-router";
import NotFound from "./Pages/NotFound";
function RouterApp() {
  /**
   *
   */
  return (
    <LayOut>
      <Routes>
        <Route
          path=""
          exact
          element={
            <Navigate
              to={"/Examples/RouterApp/NewQuote"}
              replace={true}
            ></Navigate>
          }
        ></Route>
        <Route exact path="/NewQuote" element={<NewQuote></NewQuote>}></Route>
        <Route
          exact
          path="/QuoteDetail/:quoteId"
          element={<QuoteDetail></QuoteDetail>}
        ></Route>
        <Route
          exact
          path="/AllQuotes"
          element={<AllQuotes></AllQuotes>}
        ></Route>
          <Route path='*' element={<NotFound></NotFound>}>
        </Route>
      </Routes>
    </LayOut>
  );
}

export default RouterApp;
