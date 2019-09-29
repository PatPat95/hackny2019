import React, {Component} from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import routes from './routes'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

import Home from "./page/home";
import RealHomePage from "./page/realHomePage";
import FormLayoutDemo from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Menu from "./components/menu";

Amplify.configure(awsconfig);

const User = (params) => {
  return ( <h1> Welcome User {params.username} </h1>)
}

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
          <Switch>
            <Route exact path="/" component={RealHomePage}/>
            <Route exact path="/user/:userid" component={Home}/>
            <Route exact path="/about" component={FormLayoutDemo}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
      <Menu/>
      </div>
    );
  } 
}

export default withAuthenticator(App, true);
