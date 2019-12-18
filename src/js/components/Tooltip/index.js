import React from 'react';
import PropTypes from 'prop-types';

import close from 'Images/close.png';
import styles from './styles.css';

const Tooltip = ({ text, onClick }) => (
    <div className={styles.tooltip}>
        <span className={styles.tooltip__number}>№ 67405</span>
        <p className={styles.tooltip__text}>{text}</p>
        <button onClick={onClick} className={styles.buttonClose}>
            <img src={close} alt="close" />
        </button>
    </div>
);

Tooltip.defaultProps = {
    text: '',
};

Tooltip.propTypes = {
    text: PropTypes.string,
};

export default Tooltip;
