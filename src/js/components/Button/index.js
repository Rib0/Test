import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

export default ({ text, onClick, className }) => {
    const buttonClassName = cx('button', className);

    return (
        <button onClick={onClick} className={buttonClassName}>
            {text}
        </button>
    );
};
