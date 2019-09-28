import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <menu>
        <Menu.Item>Menu</Menu.Item>
        <SubMenu title="SubMenu">
          <Menu.Item>SubMenuItem</Menu.Item>
        </SubMenu>
      </menu>
    );
  }
}

export default App;
