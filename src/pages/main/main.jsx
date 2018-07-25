import React, {Component} from 'react';
import "./main.less";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>这是主页！</h1>
                <p>洪格轩</p>
            </div>
        )
    }
}