import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParam = new URLSearchParams(location.search);
  //console.log("searchParam : ", searchParam);
  const isAsending = searchParam.get("sort") === "asc";
  const sortValue = isAsending ? "des" : "asc";
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };
  const sortedQuotes = sortQuotes(props.quotes, isAsending)
  const sortingHandler = () => {
    navigate({
      pathname: "/Examples/RouterApp/AllQuotes",
      search: "?sort=" + sortValue,
    });
  };
  
  return (
    <Fragment>
      <div>
        <button className={classes.sorting} onClick={sortingHandler}>
          sort {isAsending ? "Desending" : "Asending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
