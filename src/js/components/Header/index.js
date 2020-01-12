import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <input type="text" className={styles.input} />
            </div>
        );
    }
}

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
