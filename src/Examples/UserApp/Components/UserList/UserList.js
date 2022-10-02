import React from "react";
import classes from './UserList.module.css';
import Card from "../Card/Card";
const UserList = (props) => {
    let users = ""
    if (props.users && props.users.length >= 1) {
        users = (
            <Card className={classes.users}><ul>
                {props.users.map((user,index) => {
                    return (<li key ={index}>{user.userName} ({user.age} years old)</li>)
                })}
            </ul>
            </Card>
        )
    }
    return (users)
}
export default UserList;