import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Task = ({ currentStatementId, id, name = 'Без названия', ...props }) => {
    const onClick = () => {
        const { onClick } = props;
        onClick(id);
    };

    const taskClassName = cx({
        list__item: true,
        active: id === currentStatementId,
    });

    return (
        <li className={taskClassName} onClick={onClick}>
            <span className={styles.id}>{id}</span>
            <span className={styles.name}>{name}</span>
        </li>
    );
};

export default Task;
