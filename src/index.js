import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Main from "./pages/main/main";
import Navbar from "./component/navigation-bar/navigation";

ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route path="/main" component={Main}/>
                <Route path="/" component={Main}/>
            </Switch>
        </div>
    </Router>,

    document.getElementById('root'));
registerServiceWorker(); //离线缓存服务，提高本地服务加载访问速度
