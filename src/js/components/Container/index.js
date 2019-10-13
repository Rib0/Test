import React, { Component } from 'react';

import styles from './styles.css';

export default class Container extends Component {
    render() {
        const { children } = this.props;

        return <div className={styles.container}>{children}</div>;
    }
}
