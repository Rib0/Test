import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Task = ({ currentStatementId, id, onClick, name, executorName }) => {
    const onSelect = () => {
        onClick(id);
    };

    const taskClassName = cx({
        list__item: true,
        active: id === currentStatementId,
    });

    return (
        <li className={taskClassName} onClick={onSelect} role="menuitem" aria-hidden>
            <span className={styles.id}>{id}</span>
            <span className={styles.name}>{name || 'Без названия'}</span>
            {!currentStatementId && (
                <>
                    <span className={styles.status}>qwe</span>
                    <span className={styles.executor}>{executorName}</span>
                </>
            )}
        </li>
    );
};

Task.defaultProps = {
    currentStatementId: null,
    id: null,
    name: 'Без названия',
    onClick: null,
};

Task.propTypes = {
    currentStatementId: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    onClick: PropTypes.func,
};

export default Task;
