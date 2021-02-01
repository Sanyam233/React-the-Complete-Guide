import React, {Fragment} from 'react'
import classes from './BuildControls.module.css'
import BuildControl from  './BuildControl/BuildControl'
import ingredientsArray from './ingredientsArray'
import CheckoutButton from '../../CheckoutButton/CheckoutButton'


const BuildControls = (props) => {

    const Ingredients = ingredientsArray.map(element => <BuildControl el = {element} quantity = {props.ingredients[element.ingredient]} 
        ingredientsAdder = {() => props.addIngredients(element.ingredient)}
        ingredientsRemover = {() => props.removeIngredients(element.ingredient)}
        disabled = {props.disabled[element.ingredient]}/>)

    return (
    <Fragment>      
    <div className = {classes.BuildControls}>
        {Ingredients}
    </div>
    <div className = {classes.PayButtonContainer}>
        <CheckoutButton total = {props.total} modalToggler = {props.modalToggler}/>
    </div>
    </Fragment>)

}

export default BuildControls