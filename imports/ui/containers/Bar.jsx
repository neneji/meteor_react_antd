import React, {Component} from 'react'

import Bar from '/imports/ui/components/Bar'

export default class BarContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Bar></Bar>
            </div>
        )
    }
}