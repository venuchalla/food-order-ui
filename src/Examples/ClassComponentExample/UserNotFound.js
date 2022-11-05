import { Component } from "react"
import Card from "../../Components/UI/Card/Card";
import styles from "./Users.module.css"
class UserNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render() {
        let renderElement = this.props.children
        if (this.state.hasError) {
            renderElement = (<section className={styles.usersection} >
                <Card>User Not Found</Card>
            </section>)
        }
        return renderElement

    }

}
export default UserNotFound;