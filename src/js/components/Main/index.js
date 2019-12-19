import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import TaskList from 'components/TaskList';
import Centerpannel from 'components/Centerpannel';
import Tooltip from 'components/Tooltip';
import { changeCurrent } from 'store/actions';
import { getTasks } from 'store/selectors';

import styles from './styles.css';

/* eslint-disable */

class Main extends Component {
    state = {
        activeToolTip: true,
    };

    onClick = () => this.setState({ activeToolTip: false });

    render() {
        const { currentStatement, ...props } = this.props;
        const { activeToolTip } = this.state;

        return (
            <Container>
                <Sidebar />
                <div className={styles.main}>
                    <div className={styles.header}>
                        <input type="text" className={styles.input} />
                    </div>
                    <div className={styles.preview}>
                        <TaskList {...props} />
                        <div className={styles.content}>
                            {activeToolTip && (
                                <Tooltip
                                    text="Просьба оценить разработку рекламного баннера на новорижском
                                        шоссе. Форматы 500x500x30. Материал - полиестирол хорошего
                                        качества."
                                    onClick={this.onClick}
                                />
                            )}
                            <Centerpannel currentStatement={currentStatement} />
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

Main.defaultProps = {
    tasks: [],
    currentStatementId: null,
    currentStatement: {},
    changeCurrent: null,
    fetchingStatements: false,
};

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentStatementId: PropTypes.number,
    currentStatement: PropTypes.object,
    changeCurrent: PropTypes.func,
    fetchingStatements: PropTypes.bool,
};

const mapStateToProps = state => {
    const {
        statements: { currentStatementId, items },
        requests: { fetchingStatements },
    } = state;

    return {
        tasks: getTasks(state),
        currentStatementId,
        currentStatement: items.find(item => item.id === currentStatementId),
        fetchingStatements,
    };
};

const mapDispatchToProps = {
    changeCurrent,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
