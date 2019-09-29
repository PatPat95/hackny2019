import React, {Component} from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';
import routes from './routes'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

import Home from "./components/home";
import FormLayoutDemo from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

Amplify.configure(awsconfig);

const User = (params) => {
  return ( <h1> Welcome User {params.username} </h1>)
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Switch>
            <Route path="/:userid" component={Home} exact />
            <Route path="/about" component={FormLayoutDemo} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  } 
}

export default withAuthenticator(App, true);
