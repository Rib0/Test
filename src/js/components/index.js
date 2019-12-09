import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from 'components/Main';
import { getStatusesApi } from 'api';

class App extends Component {
    componentDidMount() {
        const { getStatuses } = this.props;
        // getStatuses();
    }

    render() {
        return <Main />;
    }
}

const mapDispatchToProps = {
    getStatuses: getStatusesApi,
};

console.log(mapDispatchToProps);

export default hot(
    connect(
        null,
        mapDispatchToProps
    )(App)
);
