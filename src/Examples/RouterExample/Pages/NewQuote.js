import { useNavigate } from "react-router";
import QuoteForm from "../Components/quotes/QuoteForm";

const NewQuote = (props) => {
  const navigate = useNavigate();
  const addQuoteHandler = (QuoteData) => {
    console.log("quotaData:", QuoteData);
    navigate("/Examples/RouterApp/AllQuotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>;
};
export default NewQuote;
