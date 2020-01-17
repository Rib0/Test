import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';

import { getStatementsApi } from 'api';

import routes from 'routes';

class App extends Component {
    componentDidMount() {
        const { getStatements } = this.props;
        getStatements();
    }

    render() {
        return (
            <Layout.Container>
                <Layout.Row>
                    <Sidebar />
                    <Layout.Col width="auto" overflow="hidden">
                        <Switch>
                            {routes.map(({ path, component }) => (
                                <Route path={path} component={component} key={path} />
                            ))}
                        </Switch>
                    </Layout.Col>
                </Layout.Row>
            </Layout.Container>
        );
    }
}

App.defaultProps = {
    getStatements: PropTypes.func,
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
