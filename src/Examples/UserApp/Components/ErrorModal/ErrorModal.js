import Button from "../Button/Button";
import Card from "../Card/Card";
import Classes from './ErrorModal.module.css'
const ErrorModal = (props) => {
    return (
    <>
    <div className= {Classes.backdrop} onClick ={props.closeErrorModal}></div>
    <Card className ={Classes.modal}>
        <header className={Classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={Classes.content}>
            {props.message}
        </div>
        <footer className={Classes.actions}>
            <Button onClick = {props.closeErrorModal}>Okay</Button>
        </footer>
    </Card>
    </>)
}

export default ErrorModal;