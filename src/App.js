import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CheckoutDisplay from './components/CheckoutDisplay/CheckoutDisplay'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {


  render(){

    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path = "/" exact component = {BurgerBuilder}/>
              <Route path = "/checkout" exact component = {CheckoutDisplay}/>
            </Switch>
          </Layout>
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
