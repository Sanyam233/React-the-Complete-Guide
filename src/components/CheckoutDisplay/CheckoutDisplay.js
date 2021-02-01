import React, {Component} from 'react'
import OrderDisplay from './OrderSummary/OrderSummary'
import ingredientsArray from '../Burger/BuildControls/ingredientsArray'
import classes from './CheckoutDisplay.module.css'
import TransButton from '../Buttons/TransButton/TransButton'


class CheckoutDisplay extends Component{


    render(){

        console.log(this.props);

        const finalOrderDisplay = ingredientsArray.map((item) => {

            if(this.props.ingredients[item.ingredient] > 0){
                return <OrderDisplay 
                title = {item.ingredient} 
                price = {item.price} 
                quantity = {this.props.ingredients[item.ingredient]}/>
            }

            return null;
        })


        return (
            <div className = {classes.CheckoutDisplay}>
                <h3>Order Summary</h3>
                <div className = {classes.DisplaySummaryContainer}>
                    {finalOrderDisplay}
                </div>
                <div>
                    <TransButton title = "CONTINUE" color = "green"/>
                    <TransButton title = "CANCEL" color = "red" clicked = {this.props.checkout}/>
                </div>
            </div>)

    }
}



export default CheckoutDisplay;