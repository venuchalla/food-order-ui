
import FoodLogo from "../../../assets/meals.jpg";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton.js"
import styles from "./Header.module.css";
const Header = (props) => {
    
    return (
        <>
            <header className={styles.header}>
                <h1>Meals</h1>
                <HeaderCartButton onCartButtonClick ={props.onCartButtonClickHandler}></HeaderCartButton>
            </header>
            <div className={styles["main-image"]}>
                <img src={FoodLogo} alt="FoodAppLogo"></img>
            </div>
        </>
    )
}
export default Header;