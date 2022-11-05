import { Component, Fragment } from "react";
import UserFinder from "./UserFinder";
import UserNotFound from "./UserNotFound";


class UserFinderMain extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <UserNotFound>
                 <UserFinder></UserFinder>
            </UserNotFound>
           
        )
    }
}
export default UserFinderMain;