import { useParams} from "react-router";
import {useHistory} from 'react-router-dom'
import HighlightedQuote from "../Components/quotes/HighlightedQuote";
import Comments from "../Components/comments/Comments";
import { Route } from "react-router";
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
   * <Route path = {`/Quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
   */
  return (
    <>
      <HighlightedQuote
        text={Quote.text}
        author={Quote.author}
      ></HighlightedQuote>
    </>
  );
};
export default QuoteDetail;
