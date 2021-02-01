import React, {Fragment} from 'react'
import classes from './SideDrawer.module.css'
import Logo from '../Toolbar/Logo/Logo'
import NavigationItem from '../Toolbar/NavigationItems/NavigationItem/NavigationItem'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

    const sideDrawerClasses = [classes.SideDrawer]

    if (props.showSideDrawer){
        sideDrawerClasses.push(classes.Open)
    }else{
        sideDrawerClasses.push(classes.Close)
    }

    return (

        <Fragment>
            <Backdrop show = {props.showSideDrawer} clicked = {props.sideDrawerToggle}/>
            <div className = {sideDrawerClasses.join(' ')}>
                <div className = {classes.LogoContainer}>
                    <Logo/>
                </div>
                <nav className = {classes.NavigationLinkContainer}>
                    <NavigationItem link = "/" >Burger Builder</NavigationItem>
                    <NavigationItem link = "/checkout" >Checkout</NavigationItem>
                </nav>

            </div>
        </Fragment>
    )
}

export default SideDrawer