import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";
import classes from './AddUser.module.css'

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('')
    const [error, setError] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
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
        setUserName('');
        setAge('');

    }
    const resetError = () => {
        setError(null)
    }
    const userNameChangeHandler = (e) => {
        setUserName(e.target.value);
    }
    const ageChangeHandler = (e) => {
        setAge(e.target.value)
    }
    return (<>
        {error && <ErrorModal closeErrorModal={resetError} title={error.title} message={error.message}></ErrorModal>}
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text" value={userName} onChange={userNameChangeHandler}></input>
                <label htmlFor="age"> Age (Years) </label>
                <input id="age" value={age} onChange={ageChangeHandler} type="number"></input>
                <Button type="submit" >Add User</Button>
            </form>
        </Card>
    </>
    )
}
export default AddUser;