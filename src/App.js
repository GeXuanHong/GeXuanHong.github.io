import React, { Component } from 'react';
import './App.css';
import './assets/css/common.less';
import Nav from './component/navigation-bar/navigation';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
      </div>
    );
  }
}

export default App;
