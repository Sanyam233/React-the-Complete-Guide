import React from 'react'
import classes from './OrderSummary.module.css'


const OrderSummary = (props) => {

    return(<div className = {classes.SummaryText}>
        <span style = {{textTransform : 'capitalize'}}>{props.title}</span>
        <span>x{props.quantity}</span>
        <span>${props.price * props.quantity}</span>
    </div>)
}

export default OrderSummary