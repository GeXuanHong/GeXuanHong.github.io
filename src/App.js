import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function opps() {
    console.log('--');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button type="primary" onClick={opps}>Ant</Button>
          <ul>
              <li>
                  <Link to='/main'>关于</Link>
              </li>
              <li>
                  <h1>洪格轩</h1>
              </li>
          </ul>
      </div>
    );
  }
}

export default App;
