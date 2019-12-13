import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Loader from 'components/Loader';
import Task from './Task';

import styles from './styles.css';

const TaskList = ({ tasks, currentStatementId, changeCurrent }) => (
    <ul className={styles.list}>
        <li className={styles.list__header}>
            <Button className={styles.button} text="Создать заявку" />
            <div className={styles.names}>
                <span className={styles.id}>ID</span>
                <span className={styles.name}>Название</span>
            </div>
        </li>
        {tasks.length ? (
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
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object),
    currentStatementId: PropTypes.number,
    changeCurrent: PropTypes.func,
};

export default TaskList;
