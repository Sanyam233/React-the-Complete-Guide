import React from 'react'
import classes from './TransButton.module.css'

const TransButton = (props) =>{

    return(<button 
    className = {classes.TransButton} 
    onClick = {props.clicked}
    style = {{color : props.color}}>
    {props.title}
    </button>)
}

export default TransButton;