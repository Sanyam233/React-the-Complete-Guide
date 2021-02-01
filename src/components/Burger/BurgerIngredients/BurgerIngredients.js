import React from 'react'
import classes from './BurgerIngredients.module.css'

const BurgerIngredients = (props) => {

    let ingredientComponent = null;
    const ingredient = props.ingredientType;

    if (ingredient === 'topBread'){
        ingredientComponent = <div className = {classes.TopBread}>
        <div className = {classes.SesameSeeds1}></div>
        <div className = {classes.SesameSeeds2}></div>
        </div>
    }else if (ingredient === 'chicken' || ingredient === "beef" || ingredient === "pork" || ingredient === "ham" || ingredient === "turkey"){
        ingredientComponent = <div className = {classes.MeatLayer}></div>

    }else if (ingredient === "cheese"){
        ingredientComponent = <div className = {classes.CheeseLayer}></div>

    }else if (ingredient === "tomato"){
        ingredientComponent = <div className = {classes.TomatoLayer}></div>

    }else if (ingredient === "lettuce"){
        ingredientComponent = <div className = {classes.LettuceLayer}></div>

    }else if (ingredient === "olives"){
        ingredientComponent = <div className = {classes.OlivesLayer}></div>

    }else if (ingredient === "onion"){
        ingredientComponent = <div className = {classes.OnionLayer}></div>

    }else if (ingredient === "bottomBread"){
        ingredientComponent = <div className = {classes.BottomBread}></div>

    }else if (ingredient === "bellPepper"){
        ingredientComponent = <div className = {classes.BellPeppers}></div>

    }

    return ingredientComponent
        
}

export default BurgerIngredients