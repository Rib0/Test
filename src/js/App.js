import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import TaskList from 'components/TaskList';
import Header from 'components/Header';

import { getStatementsApi } from 'api';

import routes from 'routes';

class App extends Component {
    componentDidMount() {
        const { getStatements } = this.props;
        getStatements();
    }

    render() {
        return (
            <Container>
                <Sidebar />
                <Container noflex>
                    <Header />
                    <Container main>
                        <TaskList {...this.props} />
                        <Switch>
                            {routes.map(({ path, component }) => (
                                <Route path={path} component={component} key={path} />
                            ))}
                        </Switch>
                    </Container>
                </Container>
            </Container>
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
