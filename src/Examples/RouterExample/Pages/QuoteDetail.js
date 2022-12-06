import { useParams } from "react-router";

const QuoteDetail = (props)=>{
    const params = useParams();
    return(<div>
        <h1> Quote Detail</h1>
        {params.id}
    </div>)
}
export default QuoteDetail;