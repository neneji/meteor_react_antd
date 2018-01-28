import React, {Component} from 'react'

import Foo from '/imports/ui/components/Foo'

export default class FooContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Foo></Foo>
            </div>
        )
    }
}