import React, { Component } from 'react';
import './App.less';
import './assets/css/common.less';
import Nav from './component/navigation-bar/navigation';
import Main from './pages/main/main';
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <div className='content'>
              <h1>正在开发中。。。</h1>
              {/*<Row gutter={48}>*/}
                  {/*<div className='left'>*/}
                      {/*<Col span={8}>导航栏</Col>*/}
                  {/*</div>*/}
                  {/*<div className='right'>*/}
                      {/*<Col span={16}>内容</Col>*/}
                  {/*</div>*/}
              {/*</Row>*/}
          </div>
      </div>
    );
  }
}

export default App;
