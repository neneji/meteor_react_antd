import React, {Component} from 'react'

import {
    Link
} from 'react-router-dom'

import {
    Button
} from 'antd'

export default class Bar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/foo">
                    <Button>Foo</Button>
                </Link>
            </div>
        )
    }
}