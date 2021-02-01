import React from 'react'
import classes from './BuildControl.module.css'
import IconRenderer from './IconRenderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BuildControl = (props) => {

    const ingredient = props.el.ingredient;

    return (<div className = {classes.BuildControl}>

        <div className = {classes.BuildControlContainer}>
            <div className = {classes.IconContainer}>
                <IconRenderer type = {ingredient}/>
            </div>
            <div className = {classes.Controller}>
                <p style = {{textTransform : 'capitalize'}} className = {classes.Text}>{ingredient}</p>
                <p className = {classes.Text}>${props.el.price}</p>
                <div className = {classes.ControlPad}>
                    <button onClick = {props.ingredientsAdder} className = {classes.Button}><FontAwesomeIcon icon = "plus"/></button>
                    <div className = {classes.PriceContainer}>
                        <span>{props.quantity}</span>
                    </div>
                    <button onClick = {props.ingredientsRemover} disabled = {props.disabled} className = {classes.Button}>
                        <FontAwesomeIcon icon = "minus"/>
                    </button>
                </div>
            </div>
        </div>

    </div>)
}


export default BuildControl