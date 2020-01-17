import React, { PureComponent } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.css';

const cx = classNames.bind(styles);

class Layout extends PureComponent {
    static Container({ children }) {
        return <div className={styles.container}>{children}</div>;
    }

    static Row({ children, wrap, direction }) {
        const rowClassName = cx({
            row: true,
            'row-wrap': wrap,
            [`row-${direction}`]: direction,
        });

        return <div className={rowClassName}>{children}</div>;
    }

    static Col({ children, overflow, width, flexGrow }) {
        const colClassName = cx({
            [`col-overflow-${overflow}`]: overflow,
            [`col-width-${width}`]: width,
            [`col-flexGrow-${flexGrow}`]: flexGrow,
        });

        return <div className={colClassName}>{children}</div>;
    }
}

export default Layout;
