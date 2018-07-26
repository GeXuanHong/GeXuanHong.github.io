import React, {Component} from 'react';
import "./main.less";
import { Carousel, Row, Col } from 'antd';
import axios from 'axios';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogList: []
        };
        this.getBlogList = this.getBlogList.bind(this); //手动绑定this
    }

    componentDidMount() {
        this.getBlogList();
    }
    componentDidUpdate() {

    }

    getBlogList () {
        let app = require('../../assets/static_JSON/blog.json');
        let list = [];
        list.push(app);
        this.setState({blogList: list});
        console.log('--' + JSON.stringify(this.state.blogList));
        console.log('--' + JSON.stringify(list));
        //axios获取数据
        // axios.get(url).then(function (res) {
        //     console.log(res);
        // }).catch(function (err) {
        //     console.log(err);
        // })
    }

    render() {
        return (
            <div className='main-page'>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <button onClick={this.getBlogList}>123</button>
            </div>
        )
    }
}