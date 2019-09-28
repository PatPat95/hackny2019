import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
      <Router>
      <div classname="App">
        <h1>Testing push</h1>
        <Route path ="/" exact render = {()=> {
          return ( <h1>Welcome Home</h1>)
        }} />
        <Route path ="/settings" exact render = {()=> {
          return ( <h1>Settings </h1>)
        }} />
      </div>
      </Router>
    );
  } 
}

export default App;
