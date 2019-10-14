import React, { Component } from 'react';

import Button from 'components/Button';
import styles from './styles.css';

import { items } from 'components/data/list.json';

export default class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.header}>
                    <input type="text" className={styles.input} />
                </div>
                <div className={styles.preview}>
                    <ul className={styles.list}>
                        <li className={styles.list__header}>
                            <Button className={styles.button} text="Создать заявку" />
                            <div className={styles.names}>
                                <span className={styles.id}>ID</span>
                                <span className={styles.name}>Название</span>
                            </div>
                        </li>
                        {items.map(item => (
                            <li className={styles.list__item} key={item.id}>
                                <span className={styles.id}>{item.id}</span>
                                <span className={styles.name}>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
