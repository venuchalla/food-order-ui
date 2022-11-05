import { Component } from "react";
import Button from "../StylesExample/components/UI/Button/Button";
import styles from "./Users.module.css";

class User extends Component {

    constructor(props) {
        super(props);
        
        console.log("constructor called")
    }
    render() {
        return (
            <div className={styles.user}>
                {this.props.name}
            </div>
        )
    }
}
export default User;