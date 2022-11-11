
import { useCallback } from "react";
import Card from "../../Components/UI/Card/Card";
import styles from "./CustomHooks.module.css";
import useCounter from "./useCounter";
const Decrementer = (props) => {
    const countDecremeter = useCallback((counter) => {
        return counter - 1;
    },[])
   
    const counter = useCounter(countDecremeter)
    return (<Card className ={styles.customHooks}>
        <p> Decrementer : {counter}</p>
    </Card>)
}
export default Decrementer;