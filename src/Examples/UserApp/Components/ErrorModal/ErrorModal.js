import Button from "../Button/Button";
import Card from "../Card/Card";
import Classes from './ErrorModal.module.css'
import React from "react";
import ReactDOM from 'react-dom'
const BackDrop = (props) => {
    return (<div className={Classes.backdrop} onClick={props.closeErrorModal}></div>)
}

const Modal = (props) => {
    return (<Card className={Classes.modal}>
        <header className={Classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={Classes.content}>
            {props.message}
        </div>
        <footer className={Classes.actions}>
            <Button onClick={props.closeErrorModal}>Okay</Button>
        </footer>
    </Card>)
}
const ErrorModal = (props) => {
    return (<React.Fragment>
        {ReactDOM.createPortal(<BackDrop closeErrorModal={props.closeErrorModal}></BackDrop>,
            document.getElementById('backDrop-root'))}
        {ReactDOM.createPortal(<Modal title={props.title} message={props.message} closeErrorModal={props.closeErrorModal}></Modal>,
            document.getElementById('modal-root'))}
    </React.Fragment>)
}

export default ErrorModal;