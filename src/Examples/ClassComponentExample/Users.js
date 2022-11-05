import { Component } from "react";
import User from "./User.js";
import Card from "../../Components/UI/Card/Card.js";
import styles from "./Users.module.css";
import Button from "../StylesExample/components/UI/Button/Button.js";

class Users extends Component {
    constructor(props) {
        super(props);
        console.log("users constructor")
        this.state = {
            showUsers: false
        }
    }
    onclickHanlder() {
        this.setState((currentState) => {
            return ({ showUsers: !currentState.showUsers })
        })
    }

    render() {
        
        const renderElement = this.props.users.map(e => {
            return <User name={e.name} key={e.id}></User>
        })
        return (<section className={styles.usersection} ><Card>
            <div className={styles.user} ><Button onClick={this.onclickHanlder.bind(this)}>{this.state.showUsers ? "Hide" : "show"} Users</Button></div>
            {this.state.showUsers && renderElement}
        </Card>
        </section>)
    }
}
export default Users;