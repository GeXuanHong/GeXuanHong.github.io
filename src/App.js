import React, { Component } from 'react';
import './App.less';
import './assets/css/common.less';
import Nav from './component/navigation-bar/navigation';
import Main from './pages/main/main';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className='content'>
              <div className='left-part'>
                  <Main/>
              </div>
              <div className='right-part'>
                  <h1 style={{color: '#fff'}}>导航栏</h1>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
