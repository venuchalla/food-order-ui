import { Routes, Route } from "react-router";
import NewQuote from "./Pages/NewQuote";
import QuoteDetail from "./Pages/QuoteDetail";
import AllQuotes from "./Pages/AllQuotes";
import LayOut from "./Components/layout/layout";
import { Navigate } from "react-router";
import NotFound from "./Pages/NotFound";
import { Link } from "react-router-dom";
import Comments from "./Components/comments/Comments";
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
          path="/QuoteDetail/:quoteId"
          element={<QuoteDetail></QuoteDetail>}
        >
          <Route
            exact
            path="/QuoteDetail/:quoteId"
            element={
              <div className="centered">
              <Link className="btn--flat" to='/Examples/RouterApp/QuoteDetail/:quoteId/comments'>
                {" "}
                Load Comments route
              </Link>
              </div>
            }
          ></Route>
          <Route
            path={"/QuoteDetail/:quoteId/comments"}
            element={<Comments></Comments>}
          ></Route>
        </Route>
        <Route
          exact
          path="/AllQuotes"
          element={<AllQuotes></AllQuotes>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </LayOut>
  );
}

export default RouterApp;
