import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from './components/HomePage/Admin.js'
import Owner from './components/HomePage/Owner.js'
import Signup from './components/signUp/Signup';
import { LoginContext } from './components/signUp/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends React.Component {

  static contextType = LoginContext;


  render() {
    return (
      <div>
        {  this.context.loggedIn &&  <Header /> }
        <BrowserRouter>
          <Switch>
          
            <Route exact path="/">
              { this.context.loggedIn && this.context.token ?this.context.role === 'admin'? <Admin/> :<Owner />: <Signup /> }
            </Route>
           
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}
