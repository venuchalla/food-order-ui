
import Card from "../../Components/UI/Card/Card";
import styles from "./CustomHooks.module.css";
import useCounter from "./useCounter";
const Incrementer = (props) => {

    const countFunc = (counter) => {
        return counter + 1;
    }
    const counter = useCounter({setCount:countFunc})

    return (<Card className={styles.customHooks} >
        <p> Increment Counter : {counter}</p>
    </Card>)
}
export default Incrementer