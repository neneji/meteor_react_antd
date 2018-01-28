import React, {Component} from 'react'

import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Link,
    Switch
} from 'react-router-dom'
import BarContainer from "./containers/Bar";
import FooContainer from "./containers/Foo";

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/foo" component={FooContainer}></Route>
                        <Route path="/bar" component={BarContainer}></Route>
                        <Route render={() => {
                            return (<Redirect to="/foo"></Redirect>)
                        }}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}