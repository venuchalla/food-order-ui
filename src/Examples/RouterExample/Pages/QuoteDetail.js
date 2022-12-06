import { useParams } from "react-router";

const QuoteDetail = (props)=>{
    const params = useParams();
    console.log("id:",params.id)
    return(<div>
        <h1> Quote Detail</h1>
        {params.id}
    </div>)
}
export default QuoteDetail;