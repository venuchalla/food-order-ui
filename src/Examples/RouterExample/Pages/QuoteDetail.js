import { Outlet, useParams } from "react-router";
import HighlightedQuote from "../Components/quotes/HighlightedQuote";
import Comments from "../Components/comments/Comments";
import { Route ,Routes} from "react-router";
import { Link } from "react-router-dom";

const QuoteDetail = (props) => {
  const params = useParams();
  const dummyQuotes = [
    { id: "q1", author: "venu", text: "learning is fun" },
    { id: "q2", author: "venu", text: "learning is fun2" },
  ];
  const Quote = dummyQuotes.find((quote) => quote.id === params.quoteId);
  if (!Quote) {
    return <p>No Quote found</p>;
  }
  /**
   *
   */
  return (
    <>
      <HighlightedQuote
        text={Quote.text}
        author={Quote.author}
      ></HighlightedQuote>
      <div className="centered">
        <Link
          className="btn--flat"
          to={`/Examples/RouterApp/QuoteDetail/${params.quoteId}/comments`}
        >
          {" "}
          Load Comments
        </Link>
      </div>
   
        <Outlet></Outlet>
    
    </>
  );
};
export default QuoteDetail;
