import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import ingredientsArray from '../../components/Burger/BuildControls/ingredientsArray'
import classes from './BurgerBuilder.module.css'
import CheckoutDisplay from '../../components/CheckoutDisplay/CheckoutDisplay'
import axiosInstance from '../../axiosInstance/axiosInstance'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Modal from '../../components/Modal/Modal'



class BurgerBuilder extends Component {

    constructor (props){
        super(props);

        this.state = {ingredients : null,
            totalPrice : 4.0,
            purchaseable : false,
            loading : false,
            fetching : true,
            error : false,
            modalToggle : false,
        }

        this.addIngredientsHandler = this.addIngredientsHandler.bind(this)
        this.removeIngredientsHandler = this.removeIngredientsHandler.bind(this)
        this.updatePurchaseableState = this.updatePurchaseableState.bind(this)
    }

    componentDidMount(){

        console.log(this.props);

        axiosInstance.get("/ingredients.json").then((response) =>{
            this.setState({
                ingredients : response.data,
                fetching : false
            })
        }).catch((err) => {

            this.setState({ error : true})

        })
    }

    updatePurchaseableState(ingredientsCopy){

        const sum = Object.keys(ingredientsCopy).map(item => {
            return ingredientsCopy[item]
        }).reduce((arr, el) => {
            return arr + el
        },0)

        this.setState({
            purchaseable : sum > 0 
        })

    }

    findIngredientPrice(type){

        let ingrePrice = 0

        for(let i = 0; i < ingredientsArray.length; i++){
            if(ingredientsArray[i]['ingredient'] === type){
                ingrePrice = ingredientsArray[i]['price']
                break
            }
        }     
        
        return ingrePrice

    }

    addIngredientsHandler(type){

        const curQuant = this.state.ingredients[type]
        const newQuant = curQuant + 1
        const ingredientsCopy = {...this.state.ingredients};

        ingredientsCopy[type] = newQuant

        let ingrePrice = this.findIngredientPrice(type)

        const updatedTotalPrice = this.state.totalPrice + ingrePrice

        this.setState({
            ingredients : ingredientsCopy,
            totalPrice : updatedTotalPrice
        })

        this.updatePurchaseableState(ingredientsCopy)


    }

    removeIngredientsHandler(type){

        const curQuant = this.state.ingredients[type]
        let newQuant = curQuant;
        const ingrePrice = this.findIngredientPrice(type)   
        let updatedTotalPrice = this.state.totalPrice

        if(curQuant > 0){
            newQuant -= 1
            updatedTotalPrice -= ingrePrice
        }
        const ingredientsCopy = {...this.state.ingredients};

        ingredientsCopy[type] = newQuant

        this.setState({
            ingredients : ingredientsCopy,
            totalPrice : updatedTotalPrice
        })  

        this.updatePurchaseableState(ingredientsCopy)
 

    }

    checkoutHandler = () => {

        // this.setState({
        //     loading : true
        // })

        // axiosInstance.post('/orders.json', {
        // ingredients : this.state.ingredients,
        // price : this.state.price,
        // customer :{
        //     name : "Sam",
        //     address : "Test Street 1, Germany",
        //     phone_number : "604-712-6713",
        //     email : "test@test.com"
        // }
        // }).then(() => {
        //     this.setState({
        //         loading : false

        //     })
        // }).catch(err => {
        //     this.setState({
        //         loading : false
        //     })
        // })

        this.props.history.push("/checkout")

    }

    modalToggler = () =>{
        this.setState(prevState => {
            return{
                modalToggle : !prevState.modalToggle
            }
        })
    }

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = (<CheckoutDisplay 
            ingredients = {this.state.ingredients}
            totalPrice = {this.state.totalPrice}
            purchaseable = {this.state.purchaseable}
            checkout = {this.checkoutHandler}/>);
        
        let burger = (<Burger ingredients = {this.state.ingredients}/>)

        let buildControls = (<BuildControls 
            total = {this.state.totalPrice}
            ingredients = {this.state.ingredients} 
            addIngredients = {this.addIngredientsHandler} 
            removeIngredients = {this.removeIngredientsHandler}
            disabled = {disabledInfo}
            modalToggler = {this.modalToggler}/>)

        if(this.state.loading){
            orderSummary = <Spinner/>
        }

        if(this.state.fetching){
            burger = this.state.error ? <p>Ingredients cannot be loaded</p> : <Spinner/>
            buildControls = this.state.error ? null : <Spinner/>
            orderSummary = null;
        }

        return (
            <Aux>
                {this.state.modalToggle ? <Modal clicked = {this.modalToggler}>{orderSummary}</Modal> : null}
                <div className = {classes.displayHolder}>
                    {burger}
                </div>
                {buildControls}
            </Aux>
        )
    }
}


export default withErrorHandler(BurgerBuilder,axiosInstance);