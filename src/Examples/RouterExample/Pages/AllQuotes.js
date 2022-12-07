import QuoteList from "../Components/quotes/QuoteList";

const AllQuotes = (props) => {
    const dummyQuotes = [
        {id :'q1', author : "venu", text :'learning is fun'},
        {id :'q2',author : "venu",text :'learning is fun2'},
    ]
       

  return (
    <QuoteList quotes = {dummyQuotes}></QuoteList>
  );
};
export default AllQuotes;
