import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getTasks } from 'store/selectors';
import Container from 'components/Container';
import Sidebar from 'components/Sidebar';
import TaskList from 'components/TaskList';
import Header from 'containers/Header';

import { getStatementsApi } from 'api';
import { changeCurrent } from 'store/actions';

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
    tasks: [],
    currentStatementId: null,
    fetchingStatements: false,
    getStatements: PropTypes.func,
};

App.propTypes = {
    tasks: PropTypes.array,
    currentStatementId: PropTypes.number,
    fetchingStatements: PropTypes.bool,
    getStatements: PropTypes.func,
};

const mapStateToProps = state => {
    const {
        statements: { currentStatementId },
        requests: { fetchingStatements },
    } = state;

    return {
        tasks: getTasks(state),
        currentStatementId,
        fetchingStatements,
    };
};

const mapDispatchToProps = {
    getStatements: getStatementsApi,
    changeCurrent
};

export default hot(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
