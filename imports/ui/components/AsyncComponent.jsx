import React, {Component} from 'react'

export default class AsyncComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const {params} = this.props;

        // fetch data
        Meteor.call('foo.bar', params, (error, res) => {
            if (error) {
                this.setState({error});
            } else {
                this.setState({dataSource: res});
            }

            this.setState({
                loading: false
            });
        })
    }

    render() {
        const {
            loading,
            error,
            dataSource
        } = this.state;

        return (
            <div>
                {loading ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        {error ? (
                            <div>Boom!!!</div>
                        ) : (
                            <div>
                                {JSON.stringify(dataSource)}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}