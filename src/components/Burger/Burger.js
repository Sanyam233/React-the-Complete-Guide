import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(itemKey => {
        return [...Array(props.ingredients[itemKey])].map((_,index) => {
            return <BurgerIngredients key = {itemKey + index} ingredientType = {itemKey} />;
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p style = {{textAlign : 'center', fontWeight : 'bold'}}>Please Start Adding Ingredients</p>
    }

    return (

    <div className = {classes.Burger}>
        <BurgerIngredients ingredientType = 'topBread' />
        {transformedIngredients}
        <BurgerIngredients ingredientType = 'bottomBread' />

    </div>
    );

}

export default Burger
