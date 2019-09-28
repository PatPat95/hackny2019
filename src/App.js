import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <Router>
      <div classname="App">
        <h1>Testing push</h1>
        <Route path ="/" render = {()=> {
          return ( <h1>Welcome Home</h1>)
        }} />
      </div>
      </Router>
=======
      <menu>
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
      </menu>
>>>>>>> b2052a4d9646f32ac5f31602d9bab473bfdbbfc6
    );
  } 
}

export default App;
