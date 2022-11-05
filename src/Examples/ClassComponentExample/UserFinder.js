import { Component } from "react";
import Card from "../../Components/UI/Card/Card";
import styles from "./Users.module.css";
import Users from "./Users";
const dummyUsers = [{
    name: "venu",
    id: 1
},
{
    name: "alien",
    id: 2
}, {
    name: "ball",
    id: 3
}
]
class UserFinder extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            searchTerm: "",
            usersList: dummyUsers
        }
    }
    componentDidUpdate(prevprops, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            //console.log("component did update:" ,this.state.searchTerm)
            this.setState({
                usersList: dummyUsers.filter((u) => {
                    return u.name.includes(this.state.searchTerm)
                })
            })
        }
    }
    changeHandler(e) {
        this.setState({ searchTerm: e.target.value })
    }
    render() {
        return (<>
            <section className={styles.usersection}>
                <Card>
                    <div style={{ "display": "block", textAlign: "center" }}>
                        <input onChange={this.changeHandler.bind(this)}></input>
                    </div>

                </Card>
            </section>
            <Users users={this.state.usersList}></Users>
        </>

        )
    }
}
export default UserFinder;