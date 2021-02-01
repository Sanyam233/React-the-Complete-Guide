import React from 'react'
import classes from './CheckoutButton.module.css'

const CheckoutButton = (props) =>{

    return(<button className = {classes.CheckoutButton} onClick = {props.modalToggler}>
        Pay $ {props.total}
    </button>)
}

export default CheckoutButton;