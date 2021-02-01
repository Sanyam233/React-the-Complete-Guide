import React from 'react'
import BurgerLogo from '../../../../assets/images/burger-logo.png'
import classes from './Logo.module.css'

const Logo = () => (<img src = {BurgerLogo} alt = "My Burger" className = {classes.Logo}/>);

export default Logo;