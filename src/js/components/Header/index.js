import React, { Component } from 'react';

import styles from './styles.css';

export default class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <input type="text" className={styles.input} />
            </div>
        );
    }
}
