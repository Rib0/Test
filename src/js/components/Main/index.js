import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import Tooltip from 'components/Tooltip';
import CommentsList from 'components/CommentsList';
import Info from 'components/Info';

import styles from './styles.css';

/* eslint-disable */

class Main extends Component {
    state = {
        activeToolTip: true,
    };

    onClick = () => this.setState({ activeToolTip: false });

    render() {
        const { activeToolTip } = this.state;
        const {
            currentStatementId,
            currentStatement: { description },
        } = this.props;

        return (
            <Layout.Row wrap>
                <Header />
                <Layout.Col width={`${currentStatementId ? '35' : 'full'}`}>
                    <TaskList />
                </Layout.Col>
                {currentStatementId ? (
                    <div className={styles.content}>
                        {activeToolTip && (
                            <Tooltip
                                text="Просьба оценить разработку рекламного баннера на новорижском
                                            шоссе. Форматы 500x500x30. Материал - полиестирол хорошего
                                            качества."
                                onClick={this.onClick}
                            />
                        )}
                        <div className={styles.content__info}>
                            <div className={styles.content__main}>
                                <div className={styles.content__description}>
                                    <p className={styles.label}>Описание</p>
                                    <p dangerouslySetInnerHTML={{ __html: description }} />
                                </div>
                                <CommentsList />
                            </div>
                            <Info />
                        </div>
                    </div>
                ) : null}
            </Layout.Row>
        );
    }
}

Main.defaultProps = {
    tasks: [],
    fetchingStatements: false,
    currentStatementId: null,
    currentStatement: {},
};

Main.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    fetchingStatements: PropTypes.bool,
    currentStatementId: PropTypes.number,
    currentStatement: PropTypes.object,
};

const mapStateToProps = ({ statements: { currentStatementId, items } }) => ({
    currentStatementId,
    currentStatement: items.find(item => item.id === currentStatementId),
});

export default connect(mapStateToProps)(Main);
