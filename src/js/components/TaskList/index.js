import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Loader from 'components/Loader';
import Task from './Task';

import styles from './styles.css';

const TaskList = ({ tasks, currentStatementId, changeCurrent, fetchingStatements }) => (
    <ul className={styles.list}>
        <li className={styles.list__header}>
            <Button className={styles.button} text="Создать заявку" />
            <div className={styles.names}>
                <span className={styles.id}>ID</span>
                <span className={styles.name}>Название</span>
            </div>
        </li>
        {!fetchingStatements ? (
            tasks.map(task => (
                <Task
                    key={task.id}
                    {...task}
                    currentStatementId={currentStatementId}
                    onClick={changeCurrent}
                />
            ))
        ) : (
            <Loader />
        )}
    </ul>
);

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

export default TaskList;
