import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

const Container = ({ children, noflex, main }) => {
    const containerClassName = cx({
        container: !noflex,
        container_noflex: noflex,
        container_main: main,
    });

    return <div className={containerClassName}>{children}</div>;
};

export default Container;
