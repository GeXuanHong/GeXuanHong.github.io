import React, {Component} from 'react';
import "./main.less";
import { Carousel, Row, Col } from 'antd';
// import axios from 'axios';

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
        let list = app.data;
        console.log(list);
        this.setState({blogList: list});
        //axios获取数据
        // axios.get(url).then(function (res) {
        //     console.log(res);
        // }).catch(function (err) {
        //     console.log(err);
        // })
    }

    render() {
        const {blogList} = this.state;
        return (
            <div className='main-page'>
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <div className='news-list'>
                    {blogList.map((item, index) => {
                        return (
                            <div key={index} className='blog'>
                                <div className='blog-title'>
                                    {item.title}
                                </div>
                                <div className='layout'>
                                    <div className='blog-intro line-limit r3'>
                                        {item.intro}
                                    </div>
                                    <div className='blog-pic'>
                                        <img src={item.blogPic}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}