import Decrementer from "./Decrementer";
import Incrementer from "./Incrementer"
import styles from "./CustomHooks.module.css"
const CustomhooksMain = (props) => {


    return (<section className={styles.customsection}>
        <Incrementer></Incrementer>
        <Decrementer></Decrementer>
    </section>)
}
export default CustomhooksMain;