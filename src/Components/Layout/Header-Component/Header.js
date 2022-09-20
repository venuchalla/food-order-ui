import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FoodLogo from "../../../assets/food-logo.png";
import styles from "./Header.module.css";
const Header = (props) => {
    return (<header>
        <h1>Meals</h1>
        <div className={styles.logo}>
            <img src={FoodLogo} alt="FoodAppLogo"></img>
        </div>
    </header>
    )
}
export default Header;