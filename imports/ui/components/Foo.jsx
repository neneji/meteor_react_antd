import React, {Component} from 'react'

import {
    Link
} from 'react-router-dom'

import {
    Button
} from 'antd'
import AsyncComponent from "./AsyncComponent";

export default class Foo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to={"/bar"}>
                    <Button>Bar</Button>
                </Link>

                <AsyncComponent params={{foo: 123, bar: 321}}/>
            </div>
        )
    }
}