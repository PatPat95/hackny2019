import React, {Component} from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import routes from './routes'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
Amplify.configure(awsconfig);

const User = (params) => {
  return ( <h1> Welcome User {params.username} </h1>)
}

class App extends Component {
  render() {
    return (
      <Router>
      <div classname="App">
      <ul>
        <li>
        <NavLink to="/" exact activeStyle= {{color:'green'}}>Home</NavLink>
        </li>
        <li>
        <NavLink to="/settings" exact activeStyle= {{color:'green'}}>Settings</NavLink>
        </li>
        <li>
        <NavLink to="/user/John" exact activeStyle= {{color:'green'}}>User John</NavLink>
        </li>
      </ul>

      {/*<input type="button" value = "log in" onClick = {this.loginHandle.bind(this)}/>*/}
        <Route path ="/" exact render = {()=> {
          return ( <h1>Welcome Home</h1>)
        }} />
        <Route path ="/settings" exact render = {()=> {
          return ( <h1>Settings </h1>)
        }} />
        <Route path ="/user/:username" exact render={() =>{
          return ( <h1>Hello User </h1>)
        }} />
      </div>
      </Router>
    );
  } 
}

export default withAuthenticator(App, true);
