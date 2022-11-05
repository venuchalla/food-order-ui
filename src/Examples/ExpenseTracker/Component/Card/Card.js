import './Card.css';

const Card = (props) => {

    let classes = "card"
    if (props.className) {
        classes = classes +" "+ props.className
    }
    return (<div className={classes}>
        {props.children}
    </div>)
}
export default Card;