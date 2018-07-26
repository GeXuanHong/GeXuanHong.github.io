import React, {Component} from 'react';
import "./navigation.less";
import "../../assets/css/common.less"
import { Avatar, Popover, Icon } from 'antd';
import Qcode from '../../assets/img/Qcode.png';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    render() {
        const wechatQcode = (
            <div>
                <img src={Qcode} style={{width: '200px', height: '200px'}}></img>
            </div>
        );
        return (
            <div className='navigation'>
                <div className='nav-content'>
                    <div className='logo'>
                        <a><h1 style={{color: '#87d068'}}>BLOG</h1></a>
                    </div>
                    <div className='tab'>
                        <a className='tab-item'>首页</a>
                        <a className='tab-item'>笔记</a>
                        <a className='tab-item'>分享</a>
                    </div>
                    <div className='user'>
                        <Icon type="github" className='github'></Icon>
                        <Popover content={wechatQcode}>
                            <Icon type="wechat" className='wechat'></Icon>
                        </Popover>
                        <Avatar style={{ backgroundColor: '#87d068' }}>Xuan</Avatar>
                    </div>
                </div>
            </div>
        )
    }
}