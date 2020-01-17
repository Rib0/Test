import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { changeCurrent } from 'store/actions';

import Button from 'components/Button';
import Loader from 'components/Loader';
import Task from './Task';

import styles from './styles.css';

const cx = classNames.bind(styles);

const TaskList = ({ tasks, currentStatementId, changeCurrent, fetchingStatements }) => {
    return (
        <ul className={styles.list}>
            <li className={styles.list__itemButton}>
                <Button className={styles.button} text="Создать заявку" />
            </li>
            {!fetchingStatements ? (
                <>
                    <li className={styles.list__header}>
                        <span className={styles.id}>ID</span>
                        <span className={styles.name}>Название</span>
                        {!currentStatementId && (
                            <>
                                <span className={styles.status}>Статус</span>
                                <span className={styles.executor}>Исполнитель</span>
                            </>
                        )}
                    </li>
                    {tasks.map(task => (
                        <Task key={task.id} {...task} currentStatementId={currentStatementId} onClick={changeCurrent} />
                    ))}
                </>
            ) : (
                <Loader />
            )}
        </ul>
    );
};

TaskList.defaultProps = {
    tasks: [],
    currentStatementId: null,
    changeCurrent: null,
    fetchingStatements: false,
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentStatementId: PropTypes.number,
    changeCurrent: PropTypes.func,
    fetchingStatements: PropTypes.bool,
};

const mapStateToProps = state => {
    const {
        statements: { currentStatementId, items },
        requests: { fetchingStatements },
    } = state;

    return {
        tasks: items,
        fetchingStatements,
        currentStatementId,
    };
};

const mapDispatchToProps = {
    changeCurrent,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);
