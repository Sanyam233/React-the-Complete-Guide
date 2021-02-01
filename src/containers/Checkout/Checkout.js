import React, {Component} from 'react'
import CheckoutDisplay from '../../components/CheckoutDisplay/CheckoutDisplay'
import axios from '../../axiosInstance/axiosInstance'
import classes from './Checkout.module.css'

class Checkout extends Component {

    state = {
        ingredients : []
    }

    componentDidMount() {
        axios.get("/ingredients.json").then(res => {
            this.setState({ 
                ingredients : res.data
            })
        })
    }


    render(){
        return (<div className = {classes.Container}>
            <CheckoutDisplay ingredients = {this.state.ingredients}/>
        </div>)

    }
}

export default Checkout;