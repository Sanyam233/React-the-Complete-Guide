import React, {Component} from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    constructor(props){
        super(props);

        this.state = {
            showSideDrawer : false,
        }

        this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this)
    }

    sideDrawerToggleHandler(){

        this.setState((prevState,_) => {

            return {showSideDrawer : !prevState.showSideDrawer}
        })

    }

    render(){
        return (<div className = {classes.Lay}>

            <div className = {classes.Toolbar}>
                <div className = {classes.Container}>
                    <Toolbar sideDrawerToggle = {this.sideDrawerToggleHandler}/>
                </div>
            </div>

            <SideDrawer sideDrawerToggle = {this.sideDrawerToggleHandler}
            showSideDrawer = {this.state.showSideDrawer}/>

            <div className = {classes.Container}>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>

        </div>);
    }
}


export default Layout