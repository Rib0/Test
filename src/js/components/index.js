import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Main from 'components/Main';
import { getStatementsApi } from 'api';

class App extends Component {
    componentDidMount() {
        const { getStatements } = this.props;
        getStatements();
    }

    render() {
        return <Main />;
    }
}

App.defaultProps = {
    getStatements: null,
};

App.propTypes = {
    getStatements: PropTypes.func,
};

const mapDispatchToProps = {
    getStatements: getStatementsApi,
};

export default hot(
    connect(
        null,
        mapDispatchToProps
    )(App)
);
