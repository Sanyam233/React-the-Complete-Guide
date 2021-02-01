import React, {Fragment} from 'react'
import classes from './Modal.module.css'
import Backdrop from '../UI/Backdrop/Backdrop'

const Modal = (props) => {

    return (
    <Fragment>
        <Backdrop show clicked = {props.clicked}/>
        <div className = {classes.Modal}>
            {props.children}
        </div>
    </Fragment>)
}

export default Modal