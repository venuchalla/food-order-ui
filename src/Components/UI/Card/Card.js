import classes from './Card.module.css';
const Card = (props) => {
    const updatedclasses = classes.card +" " + props.className
    return (<div className={updatedclasses}>
        {props.children}
    </div>)
}

export default Card;
