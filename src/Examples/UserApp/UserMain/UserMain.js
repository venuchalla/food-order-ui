import React, { useState } from "react";
import AddUser from "../Components/AddUser/AddUser";
import UserList from "../Components/UserList/UserList";
import './UserMain.css'

const UserMain = (props) => {
    const [Users, setUsers] = useState([]);
    const saveUserHandler = (user) => {
        setUsers((prevUsers) => {
            return [...prevUsers, user]
        })
    }
    return (<div>
        <AddUser saveUser={saveUserHandler}></AddUser>
        <UserList users={Users}></UserList>
    </div>

    )
}
export default UserMain;