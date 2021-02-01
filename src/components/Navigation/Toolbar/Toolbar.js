import React from 'react'
import classes from './Toolbar.module.css'
import Logo from './Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Toolbar  = (props) =>{


    return (
    <div className = {classes.Toolbar}>
        <button className = {classes.Hamburger} onClick = {props.sideDrawerToggle}><FontAwesomeIcon 
        icon="bars" className = {classes.HamburgerIcon}
        /></button>
        <div className = {classes.LogoContainer}><Logo/></div>
        <div className = {classes.NavigationLinkContainer}>
            <NavigationItems/>
        </div>

    </div>)

}

export default Toolbar
