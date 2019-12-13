import React from 'react';

import styles from './styles.css';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader} />
        </div>
    );
};

export default Loader;
