import classes from "./Modal.module.css";
import ReactDom from "react-dom"
import { Fragment } from "react";
const BackDrop = (props) => {
    return (<div className={classes.backdrop} onClick = {props.onBackDropClick}></div>)
}

const Overlays = (props) => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
}
const overlayelment = document.getElementById("modal")
const Modal = (props) => {
    return (<Fragment>
        {ReactDom.createPortal(<BackDrop onBackDropClick = {props.closeModal}></BackDrop>,overlayelment)}
        {ReactDom.createPortal(<Overlays>{props.children}</Overlays>,overlayelment)}
    </Fragment>)

}
export default Modal;