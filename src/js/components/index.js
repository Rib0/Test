import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from 'components/Main';
import { getStatementsApi } from 'api';

class App extends Component {
    componentDidMount() {
        const { getStatementsApi } = this.props;
        getStatementsApi();
    }

    render() {
        return <Main />;
    }
}

const mapDispatchToProps = {
    getStatementsApi,
};

export default hot(
    connect(
        null,
        mapDispatchToProps
    )(App)
);
