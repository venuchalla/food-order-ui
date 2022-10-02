import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = (props) => {
    //Introducing refs instead of useState hooks
    const userNameRef = useRef();
    const ageRef = useRef();
    const [error, setError] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("userNameref",userNameRef)
        const userName = userNameRef.current.value
        const age=ageRef.current.value
        if (userName.trim().length === 0) {
            setError({
                'title': 'Invalid Input',
                'message': 'please enter your user name'

            })
            return;
        }
        if (age.trim().length === 0) {
            setError({
                'title': 'Invalid Input',
                'message': 'please enter your age'
            })
            return;
        }
        if (+age < 1) {
            setError({
                'title': 'Invalid Age',
                'message': 'please enter valid age'
            })
            return;
        }
        const User = {
            'userName': userName,
            'age': age
        }
        props.saveUser(User)

    }
    const resetError = () => {
        setError(null)
    }

    return (<>
        {error && <ErrorModal closeErrorModal={resetError} title={error.title} message={error.message}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text" ref={userNameRef}></input>
                <label htmlFor="age"> Age (Years) </label>
                <input id="age" type="number" ref={ageRef}></input>
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
    </>
    )
}
export default AddUser;